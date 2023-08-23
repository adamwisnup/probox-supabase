const express = require("express");
const {
  getAllHistoryController,
  getLastDataController,
} = require("../controller/probox");
const router = express.Router();

router.get("/probox/history", getAllHistoryController);
router.get("/probox", getLastDataController);

module.exports = router;
