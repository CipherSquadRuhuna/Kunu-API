const router = require("express").Router();
const axios = require("axios");
const { IDEAPRO_APP_ID, IDEAPRO_APP_PASSWORD } = process.env;

router.post("/send", (req, res) => {
  const data = JSON.stringify({
    message: "Hello!",
    applicationId: IDEAPRO_APP_ID,
    password: IDEAPRO_APP_PASSWORD,
    destinationAddresses: ["tel:94771242254"],
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
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.json(error);
    });
});

module.exports = router;
