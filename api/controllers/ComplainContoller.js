const { findUserById } = require("../services/userService");
const { GarbageComplain } = require("../models");
const { ServiceComplain } = require("../models");

const createGrabageComplain = async (req, res) => {
  const { user_id, location, attached_image, remarks } = req.body;

  const user = await findUserById(user_id);
  if (!user) throw new Error("User not found");

  const complain = await GarbageComplain.create({
    user_id,
    location,
    attached_image,
    remarks,
  });

  res.json({
    status: "success",
    message: "Complain created successfully",
    data: {
      complain,
    },
  });
};

const createServiceComplain = async (req, res) => {
  const { municiple_councial_id, complain, user_id } = req.body;

  const new_complain = await ServiceComplain.create({
    user_id,
    municiple_councial_id,
    complain,
  });

  console.log(new_complain);

  res.json({
    status: "success",
    message: "Complain created successfully",
    data: [new_complain],
  });
};

module.exports = {
  createGrabageComplain,
  createServiceComplain,
};
