import Employee from "../models/employee.model.js";

export const verifyEmployeeOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
console.log("User entered OTP:", otp);
    const employee = await Employee.findOne({ email });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found"
      });
    }
  console.log("Database OTP:", employee.otp);

    if (employee.otp != otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    employee.isVerified = true;
    employee.otp = null;

    await employee.save();

    res.status(200).json({
      success: true,
      message: "OTP verified successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};