const { config } = require("dotenv");
const express = require("express");
const cors = require("cors");
const { checkServerStatus } = require("./controllers/StatusController.js");
const Authroutes = require("./routes/AuthRoutes.js");
const ComplainRoutes = require("./routes/ComplainRoutes.js");
const DataRoutes = require("./routes/DataRoutes.js");
const ErrorHandleMiddleware = require("./middleware/ErrorHandleeMiddleware.js");

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
app.use("/api/webhook/message", (req, res) => {
  console.log(req.body);
  res.json({ message: "ok" });
});
app.use("/api/v1/webhook/subscription", (req, res) => {
  console.log(req.body);
  res.json({ message: "ok" });
});
app.use(ErrorHandleMiddleware);

module.exports = { app };
