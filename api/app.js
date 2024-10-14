const { config } = require("dotenv");
const express = require("express");
const cors = require("cors");
const { checkServerStatus } = require("./controllers/StatusController.js");
const Authroutes = require("./routes/AuthRoutes.js");
const ComplainRoutes = require("./routes/ComplainRoutes.js");
const DataRoutes = require("./routes/DataRoutes.js");
const ErrorHandleMiddleware = require("./middleware/ErrorHandleeMiddleware.js");
const axios = require("axios");

config();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", checkServerStatus);
app.use("/api/v1/auth", Authroutes);
app.use("/api/v1/complains", ComplainRoutes);
app.use("/api/v1/data", DataRoutes);
app.use("/api/v1/schedule", require("./routes/ScheduleRoutes.js"));
app.use("/api/v1/request-pickup", require("./routes/RequestPickupRoutes.js"));
// app.use("/api/v1/payment", require("./routes/PaymentRoutes.js"));
// app.use("/api/webhook/message", (req, res) => {
//   console.log(req.body);
//   res.json({ message: "ok" });
// });

app.use("/api/webhook/message/send", (req, res) => {
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

app.use("/api/v1/webhook/subscription", (req, res) => {
  console.log(req.body);

  var data = JSON.stringify({
    applicationId: "APP_066293",
    password: "4c49aba32fb8a656f02f8fbf2d443ba9",
    subscriberId: "tel:94755383869",
    version: "1.0",
    action: "0",
  });

  var config = {
    method: "post",
    url: "https://api.dialog.lk/ subscription/send",
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

app.use(ErrorHandleMiddleware);

module.exports = { app };
