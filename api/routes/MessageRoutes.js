const router = require("express").Router();
const axios = require("axios");

router.post("/send", (req, res) => {
  const data = JSON.stringify({
    applicationId: "APP_066293",
    password: "4c49aba32fb8a656f02f8fbf2d443ba9",
    message: "Hello",
    destinationAddresses: [
      "tel:B%3C4clUUo8U11COKJXFBh8O5TBIPLKZcmjd+Mzr+7QqxuL215qcEk/S0I3zrteFr4+hD",
    ],
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
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
