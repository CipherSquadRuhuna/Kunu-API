const router = require("express").Router();

router.post("/send", (req, res) => {
  var data = JSON.stringify({
    applicationId: "APP_066293",
    password: "4c49aba32fb8a656f02f8fbf2d443ba9",
    subscriberId: "tel:94755383869",
    version: "1.0",
    action: "1",
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
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
