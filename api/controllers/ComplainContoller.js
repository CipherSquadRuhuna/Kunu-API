const { findUserById } = require("../services/userService");
const { GarbageComplain } = require("../models");

const createComplain = async (req, res) => {
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

module.exports = {
  createComplain,
};
