import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  mobile: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  employeeId: {
    type: String,
    default: () => "EMP" + Date.now()
  }
});

export default mongoose.model("Employee", employeeSchema);