import Inventory from "../models/Inventorymodel.js";

export const placeInevtory = async (req, res, next) => {
  try {
    const { toiletries, linens, equipment, inventorylevels, status } = req.body;

    const newInventoryOrder = new Inventory({
      toiletries,
      linens,
      equipment,
      inventorylevels,
      status,
    });
    await newInventoryOrder.save();
    return res.json({ message: "Inventory order Placed successfully" });
  } catch (error) {
    next(error);
  }
};

export const getALLInventroies = async (req, res, next) => {
  try {
    const inventory = await Inventory.find().sort({ name: 1 });
    return res.json(inventory);
  } catch (error) {
    next(error);
  }
};

export const deleteInventory = async (req, res, next) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    return res.json({ message: `Inventory has been deleted` });
  } catch (error) {
    next(error);
  }
};
export const getInventory = async (req, res, next) => {
  try {
    const inventoryy = await Inventory.findById(req.params.id);
    return res.json(inventoryy);
  } catch (error) {
    next(error);
  }
};

export const updateInventory = async (req, res) => {
  const { toiletries, linens, equipment, inventorylevels, status } = req.body;

  try {
    await Inventory.findByIdAndUpdate(req.params.id, {
      toiletries,
      linens,
      equipment,
      inventorylevels,
      status,
    });
    return res
      .status(200)
      .json({ message: `Inventory Updated Successfully...` });
  } catch (error) {
    next(error);
  }
};
