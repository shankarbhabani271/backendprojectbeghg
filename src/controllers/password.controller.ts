import PasswordProfile from "../models/password.model.js";

export const createProfileDetails = async (
  req,
  res
) => {
  try {
    const {
      profileImage,
      mobile,
      bloodGroup
    } = req.body;

    if (!mobile || !bloodGroup) {
      return res.status(400).json({
        success: false,
        message:
          "Mobile and Blood Group required"
      });
    }

    const newProfile =
      await PasswordProfile.create({
        profileImage,
        mobile,
        bloodGroup
      });

    res.status(201).json({
      success: true,
      message:
        "Profile saved successfully",
      data: newProfile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};