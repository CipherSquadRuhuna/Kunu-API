const { config } = require("dotenv");
const express = require("express");
const cors = require("cors");
const { checkServerStatus } = require("./controllers/StatusController.js");
const Authroutes = require("./routes/AuthRoutes.js");

config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", checkServerStatus);

app.use("/api/v1/auth", Authroutes);

module.exports = { app };
