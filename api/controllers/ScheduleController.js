const {
  getCollectionScheduleByDivision,
} = require("../services/scheduleService");

const getScheduleOfDivision = async (req, res) => {
  const { division } = req.query;

  const schedule = await getCollectionScheduleByDivision(division);
  res.json({
    status: "success",
    data: schedule,
  });
};

module.exports = {
  getScheduleOfDivision,
};
