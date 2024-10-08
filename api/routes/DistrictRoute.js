// routes/districtRoutes.js
const express = require('express');
const {
    createDistrict,
    getAllDistricts,
    getDistrictById,
    updateDistrict,
    deleteDistrict,
} = require('../controllers/DistrictController'); // Adjust the path as necessary

const router = express.Router();

router.post('/', createDistrict);          // Create a new district
router.get('/', getAllDistricts);          // Get all districts
router.get('/:id', getDistrictById);       // Get a district by ID
router.put('/:id', updateDistrict);        // Update a district by ID
router.delete('/:id', deleteDistrict);     // Delete a district by ID
module.exports = router;
