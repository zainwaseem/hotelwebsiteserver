import Room from "../models/ProductModel.js";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

const AddProduct = async (req, res, next) => {
  try {
    let { roomType, availability, price, occupancyStatus, img } = req.body;

    if (!roomType || !availability || !price || !occupancyStatus) {
      return res.json({
        message: "Please provide all details of the product",
      });
    }

    // cloudinary
    let result = await cloudinary.uploader.upload(img, {
      folder: "rooms",
    });
    img = {
      public_id: result.public_id,
      secure_url: result.secure_url,
    };

    const newProduct = new Room({
      img,
      roomType,
      availability,
      price,
      occupancyStatus,
    });
    await newProduct.save();
    return res.status(200).json({
      message: "Room added successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getALLProducts = async (req, res, next) => {
  try {
    const Products = await Room.find();
    return res.json(Products);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const singleProduct = await Room.findById(req.params.id);
    return res.json(singleProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  let {
    roomType,
    availability,
    price,
    checkInDate,
    checkOutDate,
    occupancyStatus,
    img,
  } = req.body;

  if (!roomType || !availability || !price || !occupancyStatus) {
    return res.json({
      message: "Please provide all details of the product",
    });
  }
  // cloudinary
  let result = await cloudinary.uploader.upload(img, {
    folder: "rooms",
  });
  // console.log(result);
  img = {
    public_id: result.public_id,
    secure_url: result.secure_url,
  };
  try {
    await Room.findByIdAndUpdate(req.params.id, {
      roomType,
      availability,
      checkInDate,
      checkOutDate,
      price,
      occupancyStatus,
      img,
    });
    return res.json({ message: `Room has been Booked` });
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    await cloudinary.uploader.destroy(deleteProduct);
    return res.json({ message: `Room has been deleted` });
  } catch (error) {
    next(error);
  }
};

export { AddProduct, getProduct, getALLProducts, deleteProduct, updateProduct };
