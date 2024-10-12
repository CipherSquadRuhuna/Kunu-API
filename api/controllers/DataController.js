const {
  getDistricts,
  getMunicipalCouncils,
} = require("../services/dataServices");

const getDistrictsList = async (req, res) => {
  const districts = await getDistricts();
  res.json({
    status: "success",
    data: districts,
  });
};

const getMunicipalCouncilsList = async (req, res) => {
  const municipalCouncils = await getMunicipalCouncils();
  res.json({
    status: "success",
    data: municipalCouncils,
  });
};
module.exports = {
  getDistrictsList,
  getMunicipalCouncilsList,
};
