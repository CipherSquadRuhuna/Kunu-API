const { RequestPickup } = require("../models");
const CreateRequestPickUp = async (req, res) => {
  const { user_id, waste_type, location, no_of_bags, payment_type } = req.body;

  // Create Request Pickup
  const requestPickup = await RequestPickup.create({
    user_id,
    waste_type,
    location,
    no_of_bags,
    payment_type,
  });

  res.json({
    status: "success",
    message: "Request Pickup Created",
    data: {
      requestPickup,
    },
  });
};

module.exports = { CreateRequestPickUp };
