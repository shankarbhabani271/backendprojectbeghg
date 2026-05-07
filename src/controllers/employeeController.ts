import Employee from "../models/employee.model.js";

export const createEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      name,
      mobile,
      blood,
      email,
      department,
      role
    } = req.body;

    // check existing employee
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({
        success: false,
        message: "Employee already exists"
      });
    }

    // create employee
    const newEmployee = new Employee({
      employeeId,
      name,
      mobile,
      blood,
      email,
      department,
      role
    });

    await newEmployee.save();

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employee: newEmployee
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};