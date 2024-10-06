const { JWT_SECRET } = process.env;
const db = require("../models/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = db;

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || email == "" || !password || password == "") {
    return res.json({
      status: "failed",
      message: "Empty credientials",
    });
  }

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isauth = bcrypt.compareSync(password, user.password);

  if (!isauth) {
    return res.status(401).json({
      status: "error",
      message: "Invalid email or password",
      data: null,
    });
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

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

  //check the phone number is alreay excit

  const is_phonenumber = await User.findOne({
    where: {
      phone_number,
    },
  });

  if (is_phonenumber) {
    return res.json({
      status: "failed",
      message: "Phone number is already exist!",
      data: [],
    });
  }

  const otp_code = Math.floor(Math.random() * 100000);

  const user = await User.create({
    phone_number: phone_number,
    otp_code,
  });

  // send otp

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

  const user = await User.findOne({
    where: {
      phone_number,
    },
  });

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

  console.log(user_id);

  const user = await User.findByPk(user_id);

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

  const user = await User.findByPk(user_id);
  if (!user) {
    return res.json({
      status: "failed",
      message: "user not found",
      data: [],
    });
  }

  user.password = bcrypt.hashSync(password, 10);
  await user.save();

  res.json({
    status: "success",
    message: "password updated successfuly.",
    data: [],
  });
};
module.exports = { login, register, verifyOTP, updateNameNIC, updatePassword };
