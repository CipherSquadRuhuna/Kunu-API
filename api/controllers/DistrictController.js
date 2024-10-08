const db = require("../models/index.js");

const { District } = require("../models");

// Create a new district
const createDistrict = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "District name is required" });
    }

    const newDistrict = await District.create({ name });
    return res.status(201).json(newDistrict);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all districts
const getAllDistricts = async (req, res) => {
  try {
    const districts = await District.findAll();
    return res.status(200).json(districts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get a single district by ID
const getDistrictById = async (req, res) => {
  try {
    const { id } = req.params;
    const district = await District.findByPk(id);

    if (!district) {
      return res.status(404).json({ message: "District not found" });
    }

    return res.status(200).json(district);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a district by ID
const updateDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const district = await District.findByPk(id);
    if (!district) {
      return res.status(404).json({ message: "District not found" });
    }

    district.name = name || district.name;
    await district.save();

    return res.status(200).json(district);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a district by ID
const deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const district = await District.findByPk(id);

    if (!district) {
      return res.status(404).json({ message: "District not found" });
    }

    await district.destroy();
    return res.status(204).send(); // No content
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDistrict,
  getAllDistricts,
  getDistrictById,
  updateDistrict,
  deleteDistrict,
};
