// routes/municipalCouncilRoutes.js
const express = require("express");
const {
    createMunicipalC,
    getAllMunicipalC,
    getByIdMunicipalC,
    updateMunicipalC,
    deleteMunicipalC,
    
} = require("../controllers/MunicipalControlller");

const router = express.Router();

router.post("/", createMunicipalC);
router.get("/", getAllMunicipalC);
router.get("/:id", getByIdMunicipalC);
router.put("/:id", updateMunicipalC);
router.delete("/:id", deleteMunicipalC);

module.exports = router;
