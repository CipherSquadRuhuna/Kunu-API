const { District, MunicipalCouncil } = require("../models");

const getDistricts = async () => {
  return await District.findAll({
    attributes: ["id", "name"],
  });
};

const getMunicipalCouncils = async () => {
  return await MunicipalCouncil.findAll({
    attributes: ["id", "name"],
  });
};

module.exports = {
  getDistricts,
  getMunicipalCouncils,
};
