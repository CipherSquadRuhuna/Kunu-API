const { getScheduleOfDivision } = require("../controllers/ScheduleController");
const catchAsync = require("../utils/catchAsync");

const router = require("express").Router();

router.get("/", catchAsync(getScheduleOfDivision));

module.exports = router;
