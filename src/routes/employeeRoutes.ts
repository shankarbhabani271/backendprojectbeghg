import express from "express";
import { createEmployee } from "../controllers/employeeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { verifyEmployeeOtp } from "../controllers/verifyOtp.controller.js";

const router = express.Router();

// Register employee
router.post(
  "/register",
  createEmployee
);
router.post("/verify-otp", verifyEmployeeOtp);
export default router;