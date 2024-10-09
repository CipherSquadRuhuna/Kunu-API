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

// const { User } = db;

const login = async (req, res) => {
  const { phone_number, password } = req.body;

  const user = await findUserByPhoneNumber(phone_number);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isauth = comparePassword(password, user.password);

  if (!isauth) {
    return res.status(401).json({
      status: "error",
      message: "Invalid email or password",
      data: null,
    });
  }

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

  if (!phone_number || phone_number == "") {
    return res.json({
      status: "failed",
      message: "Mobile Number can't be empty",
    });
  }

  const is_user = await isUserAlreadyExist(phone_number);

  if (is_user) {
    return res.json({
      status: "failed",
      message: "Phone number is already exist!",
      data: [],
    });
  }

  const otp_code = Math.floor(Math.random() * 100000);
  const user = await createUser({ phone_number: phone_number, otp_code });

  res.json({
    status: "success",
    message: "User created successfully",
    data: {
      user: {
        id: user.id,
      },
    },
  });
};

const verifyOTP = async (req, res) => {
  const { phone_number, otp } = req.body;

  if (!otp || otp == "") {
    return res.json({
      status: "failed",
      message: "OTP is required",
      data: [],
    });
  }

  const user = await findUserByPhoneNumber(phone_number);

  if (!user) {
    return res.json({
      status: "failed",
      message: "Invalid phone number",
      data: [],
    });
  }

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

  if (!user) {
    return res.json({
      status: "failed",
      message: "Invalid user id",
      data: [],
    });
  }

  user.name = full_name;
  user.nic = nic;

  await user.save();

  res.json({
    status: "success",
    message: "Name and NIC update success",
    data: [],
  });
};

// implement authenticated middleware
const updatePassword = async (req, res) => {
  const { password, user_id } = req.body;

  if (!password || password == "") {
    return res.json({
      status: "failed",
      message: "Password should not be empty",
      data: [],
    });
  }

  const user = await findUserById(user_id);
  if (!user) {
    return res.json({
      status: "failed",
      message: "user not found",
      data: [],
    });
  }

  user.password = hashPassword(password);
  await user.save();

  res.json({
    status: "success",
    message: "password updated successfuly.",
    data: [],
  });
};

module.exports = { login, register, verifyOTP, updateNameNIC, updatePassword };
