const asyncHandler = require("express-async-handler");
const Store = require("../models/storeModel");

//Get Store
// route Get /api/store
//access Public
const getStores = asyncHandler(async (req, res) => {
  const stores = await Store.find();
  res.status(200).json(stores);
});

const getUserStores = asyncHandler(async (req, res) => {
  const stores = await Store.find({ user: req.user._id });
  res.status(200).json(stores);
});

// Post to store
// route Post /api/store
//access Private
const postStore = asyncHandler(async (req, res) => {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.rating ||
    !req.body.image ||
    !req.body.categories ||
    !req.body.model ||
    !req.body.description
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const store = await Store.create({
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image,
    categories: req.body.categories,
    model: req.body.model,
    description: req.body.description,
    user: req.user._id,
  });
  res.status(200).json(store);
});

module.exports = { getStores, getUserStores, postStore };
