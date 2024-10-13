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
app.use(ErrorHandleMiddleware);

module.exports = { app };
