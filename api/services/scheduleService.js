const { CollectionSchedule } = require("../models");

const getCollectionSchedules = async () => {
  return await CollectionSchedule.findAll();
};

const getCollectionScheduleByDivision = async (division) => {
  console.log(division);
  return await CollectionSchedule.findAll({
    where: {
      division,
    },
  });
};

const getDivisions = async () => {
  return await CollectionSchedule.findAll({
    attributes: ["division"],
    group: ["division"],
  });
};

module.exports = {
  getCollectionSchedules,
  getCollectionScheduleByDivision,
  getDivisions,
};
