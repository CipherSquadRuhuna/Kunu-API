const routes = require("express").Router();
const axios = require("axios");

routes.post("/subscription", (req, res) => {
  var data = JSON.stringify({
    applicationId: "APP_066293",
    password: "4c49aba32fb8a656f02f8fbf2d443ba9",
    subscriberId: "tel:94755383869",
    version: "1.0",
    action: "0",
  });

  var config = {
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
      res.json(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = routes;
