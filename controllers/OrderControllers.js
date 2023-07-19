import mongoose from "mongoose";
import Order from "../models/OrderModel.js";

const AddOrder = async (req, res, next) => {
  // const userID = req.user._id;
  // try {
  //   const newOrder = new Order({ userID, orderedProducts: req.body.cartItems });
  //   await newOrder.save();
  //   let perPair = 25;
  //   const requiredInventory = perPair * req.body.cartTotalQuantity;
  //   const getInventory = await Inventory.find();
  //   const dblength = getInventory[0].length;
  //   let stockInventory = getInventory[0].length - requiredInventory;
  //   const stockInventoryID = getInventory[0]._id;
  //   if (dblength >= requiredInventory) {
  //     const updateInventoryModel = await Inventory.findByIdAndUpdate(
  //       stockInventoryID,
  //       {
  //         length: stockInventory,
  //       }
  //     );
  //   } else {
  //     const newInventoryOrder = new Inventory({
  //       length: requiredInventory,
  //       purchasedPrice: req.body.cartTotalQuantity * 100,
  //       category: getInventory[0].category,
  //       material: getInventory[0].material,
  //       quantity: req.body.cartTotalQuantity,
  //     });
  //     await newInventoryOrder.save();
  //     return res.json({
  //       message: "New Inventory order Generated Placed successfully",
  //     });
  //   }

  //   return res.status(200).json({
  //     message: "Order Placed successfully",
  //   });
  // } catch (error) {
  //   next(error);
  // }
};

const getAllOrders = async (req, res, next) => {
  try {
    if (req.user.role == "owner") {
    
      const orders = await Order.find();
      return res.json(orders);
    }
    const orders = await Order.find({ userID: req.user._id }).sort({
      status: -1,
    });
    return res.json(orders);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.json({ message: "Loading..." });
  }
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
const updateOrder = async (req, res, next) => {
  const { status } = req.body;
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.json({ message: "Loading..." });
  }
  try {
    await Order.findByIdAndUpdate(req.params.id, {
      status,
    });

    return res.json({
      message: "Order Status updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};
export { AddOrder, getAllOrders, deleteOrder, updateOrder };
