import Staff from "../models/StaffModel.js";

const AddStaff = async (req, res, next) => {
  try {
    const { name, role, workschedule } = req.body;

    const newstaff = new Staff({
      name,
      role,
      workschedule,
    });
    await newstaff.save();
    res.status(200).json({ message: `Staff Added successfully` });
  } catch (error) {
    next(error);
  }
};

const getAllStaff = async (req, res, next) => {
  try {
    const staf = await Staff.find().sort({ name: 1 });
    return res.json(staf);
  } catch (error) {
    next(error);
  }
};
const deleteStaff = async (req, res, next) => {
  console.log(req.params.id);
  try {
    await Staff.findByIdAndDelete(req.params.id);
    return res.json({ message: `Deleted` });
  } catch (error) {
    next(error);
  }
};
export { AddStaff, getAllStaff, deleteStaff };
