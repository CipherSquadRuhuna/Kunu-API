const express = require('express');
const { createRoad,
    getAllRoads,
    getRoadById,
    updateRoad,
    deleteRoad,} = require('../controllers/RoadController.js');


const router = express.Router();


// Define routes for the Road resource
router.post('/',createRoad);
router.get('/',getAllRoads);
router.get('/:id',getRoadById);
router.put('/:id',updateRoad);
router.delete('/:id',deleteRoad);

module.exports = router;
