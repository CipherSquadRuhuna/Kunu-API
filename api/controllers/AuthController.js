const {
  findUserById,
  findUserByPhoneNumber,
  isUserAlreadyExist,
  createUser,
} = require("../services/userService.js");
const {
  comparePassword,
  generateToken,
  hashPassword,
} = require("../services/authService.js");
const sendMessageToTelegram = require("../utils/sendToChannel.js");
const axios = require("axios");

const login = async (req, res) => {
  const { phone_number, password } = req.body;

  // check user exist
  const user = await findUserByPhoneNumber(phone_number);
  if (!user) throw new Error("Invalid email or password");

  // return if the user profile is not verified
  if (!user.is_verified) throw new Error("User profile is not verified");

  // ask to set password if the user is not set the password
  if (!user.password) throw new Error("Please set the password");

  // check password
  const isauth = comparePassword(password, user.password);
  if (!isauth) throw new Error("Invalid email or password");

  // check is nic and name is set
  if (!user.name || !user.nic) throw new Error("Please set the name and NIC");

  const token = generateToken({ id: user.id }, "1h");

  res.json({
    status: "success",
    message: "Login successful",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    },
  });
};

const register = async (req, res) => {
  const { phone_number } = req.body;

  const user = await isUserAlreadyExist(phone_number);
  if (user) throw new Error("Phone number is already exist!");

  const otp_code = Math.floor(Math.random() * 100000);
  const newUser = await createUser({ phone_number: phone_number, otp_code });

  // send otp to the user
  sendMessageToTelegram(`Your OTP is: ${otp_code}`);

  const data = JSON.stringify({
    message: `Your OTP is: ${otp_code}`,
    applicationId: "APP_066293",
    password: "4c49aba32fb8a656f02f8fbf2d443ba9",
    destinationAddresses: [`tel:${phone_number}`],
  });

  const config = {
    method: "post",
    url: "https://api.dialog.lk/sms/send",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  res.json({
    status: "success",
    message: "User created successfully",
    data: {
      user: {
        id: newUser.id,
      },
    },
  });
};

const verifyOTP = async (req, res) => {
  const { phone_number, otp } = req.body;

  const user = await findUserByPhoneNumber(phone_number);
  if (!user) throw new Error("Invalid phone number");

  // check already verified
  if (user.is_verified) throw new Error("User already verified");

  if (user.otp_code !== otp) {
    // todo: increase otp attempt
    return res.json({
      status: "failed",
      message: "Invalid otp",
      data: [],
    });
  }

  // update the record as verified
  user.is_verified = 1;
  await user.save();

  return res.json({
    status: "success",
    message: "OTP verified!",
    data: [],
  });
};

const updateNameNIC = async (req, res) => {
  const { user_id, full_name, nic } = req.body;

  const user = await findUserById(user_id);
  if (!user) throw new Error("User not found");

  user.name = full_name;
  user.nic = nic;

  await user.save();

  res.json({
    status: "success",
    message: "Name and NIC update success",
    data: [],
  });
};

const updatePassword = async (req, res) => {
  const { password, user_id } = req.body;

  const user = await findUserById(user_id);
  if (!user) throw new Error("User not found");

  user.password = hashPassword(password);
  await user.save();

  res.json({
    status: "success",
    message: "password updated successfuly.",
    data: [],
  });
};

const updateDistrict = async (req, res) => {
  const { district, munimunicipal, user_id } = req.body;

  const user = await findUserById(user_id);
  if (!user) throw new Error("User not found");

  user.district = district;
  user.municipal = munimunicipal;
  await user.save();

  res.json({
    status: "success",
    message: "District updated successfuly.",
    data: [],
  });
};

module.exports = {
  login,
  register,
  verifyOTP,
  updateNameNIC,
  updatePassword,
  updateDistrict,
};
