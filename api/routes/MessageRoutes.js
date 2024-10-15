const router = require("express").Router();
const axios = require("axios");

router.post("/send", (req, res) => {
  const data = JSON.stringify({
    message: "Hello!",
    applicationId: "APP_066293",
    password: "4c49aba32fb8a656f02f8fbf2d443ba9",
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
