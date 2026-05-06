import express from "express";
import { createEmployee } from "../controllers/employeeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Save employee details
router.post(
  "/details",
  authMiddleware,
  createEmployee
);

export default router;