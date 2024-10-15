const router = require("express").Router();
const axios = require("axios");
const { IDEAPRO_APP_ID, IDEAPRO_APP_PASSWORD } = process.env;

router.post("/send", async (req, res) => {
  const { phone_number } = req.body;
  try {
    const data = JSON.stringify({
      applicationId: IDEAPRO_APP_ID,
      password: IDEAPRO_APP_PASSWORD,
      version: "1.0",
      action: "1",
      subscriberId: `tel:${phone_number}`,
    });

    const config = {
      method: "post",
      url: "https://api.dialog.lk/subscription/send",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.json(error);
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
