const db = require("../models/index.js");
const { Road } = db;

// Create a new road entry
const createRoad = async (req, res) => {
  try {
    const { waste_type, date, occurrences_per_day, municipal_council_id } =
      req.body;

    if (!waste_type || !date || occurrences_per_day == null) {
      return res
        .status(400)
        .json({ status: "failed", message: "All fields are required" });
    }

    const road = await Road.create({
      waste_type,
      date,
      occurrences_per_day,
      municipal_council_id,
    });

    res.status(201).json({
      status: "success",
      message: "Road created successfully",
      data: { road },
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Get all roads
const getAllRoads = async (req, res) => {
  try {
    const roads = await Road.findAll();
    res.status(200).json({ status: "success", data: roads });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Get a road by ID
const getRoadById = async (req, res) => {
  try {
    const road = await Road.findByPk(req.params.id);
    if (!road) {
      return res
        .status(404)
        .json({ status: "failed", message: "Road not found" });
    }
    res.status(200).json({ status: "success", data: road });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Update a road entry
const updateRoad = async (req, res) => {
  try {
    const road = await Road.findByPk(req.params.id);
    if (!road) {
      return res
        .status(404)
        .json({ status: "failed", message: "Road not found" });
    }

    const { waste_type, date, occurrences_per_day, municipal_council_id } =
      req.body;

    if (waste_type) road.waste_type = waste_type;
    if (date) road.date = date;
    if (occurrences_per_day != null)
      road.occurrences_per_day = occurrences_per_day;
    if (municipal_council_id) road.municipal_council_id = municipal_council_id;

    await road.save();

    res.status(200).json({
      status: "success",
      message: "Road updated successfully",
      data: road,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Delete a road entry
const deleteRoad = async (req, res) => {
  try {
    const road = await Road.findByPk(req.params.id);
    if (!road) {
      return res
        .status(404)
        .json({ status: "failed", message: "Road not found" });
    }

    await road.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  createRoad,
  getAllRoads,
  getRoadById,
  updateRoad,
  deleteRoad,
};
