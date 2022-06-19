const express = require("express");
const router = express.Router();
const {
  getStores,
  getUserStores,
  postStore,
} = require("../controllers/storeController");
const protect = require("../middleware/authMiddleware");

router.get("/", getStores);
router.post("/", protect, getUserStores);
router.post("/", protect, postStore);

module.exports = router;
