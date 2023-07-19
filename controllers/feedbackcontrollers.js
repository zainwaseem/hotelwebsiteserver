import Feedback from "../models/feedbackmodel.js";
import mongoose from "mongoose";

const Savefeedback = async (req, res, next) => {
  try {
    const { rating, description } = req.body;
    if (!rating || !description) {
      return res.json({
        message: "Please fill out the fields.",
      });
    }
    const newMessage = new Feedback({
      rating,
      description,
    });
    await newMessage.save();
    res.status(200).json({ message: `Your Feedback recorded successfully` });
  } catch (error) {
    next(error);
  }
};

const getAllfeedback = async (req, res, next) => {
  try {
    const messages = await Feedback.find();
    // .sort({ name: 1 });
    return res.json(messages);
  } catch (error) {
    next(error);
  }
};
const deletefeedback = async (req, res, next) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    return res.json({ message: `feed has been deleted` });
  } catch (error) {
    next(error);
  }
};
export { Savefeedback, getAllfeedback, deletefeedback };
