// controllers/municipalCouncilController.js
const { MunicipalCouncil } = require('../models'); // Adjust the path as necessary

// Create a new Municipal Council
const createMunicipalC = async (req, res) => {
    try {
        const council = await MunicipalCouncil.create(req.body);
        res.status(201).json(council);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all Municipal Councils
const getAllMunicipalC = async (req, res) => {
    try {
        const councils = await MunicipalCouncil.findAll();
        res.status(200).json(councils);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a Municipal Council by ID
const getByIdMunicipalC = async (req, res) => {
    try {
        const council = await MunicipalCouncil.findByPk(req.params.id);
        if (council) {
            res.status(200).json(council);
        } else {
            res.status(404).json({ message: 'Municipal Council not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a Municipal Council
const updateMunicipalC = async (req, res) => {
    try {
        const [updated] = await MunicipalCouncil.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedCouncil = await MunicipalCouncil.findByPk(req.params.id);
            res.status(200).json(updatedCouncil);
        } else {
            res.status(404).json({ message: 'Municipal Council not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a Municipal Council
const deleteMunicipalC = async (req, res) => {
    try {
        const deleted = await MunicipalCouncil.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Municipal Council not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Exporting the functions
module.exports = {
    createMunicipalC,
    getAllMunicipalC,
    getByIdMunicipalC,
    updateMunicipalC,
    deleteMunicipalC,
};
