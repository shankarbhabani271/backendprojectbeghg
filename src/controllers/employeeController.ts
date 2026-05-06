import Employee from "../models/employee.model.js";

export const createEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      department,
      role,
      password
    } = req.body;

    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(400).json({
        message: "Employee already exists"
      });
    }

    const newEmployee = new Employee({
      name,
      email,
      mobile,
      department,
      role,
      password
    });

    await newEmployee.save();

    res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};