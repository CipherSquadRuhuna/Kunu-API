const routes = require("express").Router();
const axios = require("axios");

const DIALOG_SUBSCRIPTION_URL =
  process.env.DIALOG_SUBSCRIPTION_URL || "https://api.dialog.lk/subscription/send";

routes.post("/subscription", (req, res) => {
  if (
    !process.env.DIALOG_APPLICATION_ID ||
    !process.env.DIALOG_PASSWORD ||
    !process.env.DIALOG_SUBSCRIBER_ID
  ) {
    return res.status(500).json({
      message:
        "Dialog subscription environment variables are not fully configured.",
    });
  }

  var data = JSON.stringify({
    applicationId: process.env.DIALOG_APPLICATION_ID,
    password: process.env.DIALOG_PASSWORD,
    subscriberId: process.env.DIALOG_SUBSCRIBER_ID,
    version: process.env.DIALOG_API_VERSION || "1.0",
    action: "0",
  });

  var config = {
    method: "post",
    url: DIALOG_SUBSCRIPTION_URL,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = routes;
