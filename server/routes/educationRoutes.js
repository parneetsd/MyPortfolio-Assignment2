import express from "express";
import {
    getEducations,
    getEducation,
    createEducation,
    updateEducation,
    deleteEducation,
    deleteAllEducations
} from "../controllers/educationController.js";

const router = express.Router();

router.get("/", getEducations);
router.get("/:id", getEducation);
router.post("/", createEducation);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);
router.delete("/", deleteAllEducations);

export default router;