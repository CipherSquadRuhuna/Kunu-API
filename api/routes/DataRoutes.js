const {
  getDistrictsList,
  getMunicipalCouncilsList,
} = require("../controllers/DataController");
const catchAsync = require("../utils/catchAsync");

const router = require("express").Router();

router.get("/districts", catchAsync(getDistrictsList));
router.get("/municipal-councils", catchAsync(getMunicipalCouncilsList));

module.exports = router;
