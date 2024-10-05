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

  const user = await User.create({
    phone_number: phone_number,
  });

  // const user = await User.create({
  //   name,
  //   email,
  //   password: bcrypt.hashSync(password, 10),
  // });

  res.json({
    status: "success",
    message: "User created successfully",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    },
  });
};

module.exports = { login, register };
