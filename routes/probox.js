const express = require("express");
const { getAllHistoryController } = require("../controller/probox");
// const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.get("/probox/history", getAllHistoryController);

module.exports = router;
