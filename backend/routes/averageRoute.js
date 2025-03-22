import express from "express";
import calculateAverage from "../controllers/averageController.js"; // ✅ Correct path

const router = express.Router();

router.post("/", calculateAverage); // ✅ This will work on `/average`

export default router;
