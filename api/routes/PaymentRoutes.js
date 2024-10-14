const router = require("express").Router();
const axios = require("axios");

router.post("/cass", async (req, res) => {
  const { amount, user_id } = req.body;

  //check user amount
  const amount_date = await axios.post(
    `http://localhost:7000/caas/get/balance`,
    {
      applicationId: "APP_000001",
      password: "password",
      subscriberId: "5C74B588F97",
    }
  );

  //   log request
  console.log(amount_date.data);
});

module.exports = router;
