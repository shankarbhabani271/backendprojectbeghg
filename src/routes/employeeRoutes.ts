import express from "express";
import { createEmployee } from "../controllers/employeeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register employee
router.post(
  "/register",
  createEmployee
);

export default router;