const express = require("express");
const {
  getAllHistoryController,
  getLastDataController,
} = require("../controller/probox");
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// const authenticateToken = require("../middleware/auth");
>>>>>>> 2ea44bdfa4b2c99896994ff56975d2f4fc0386e4
>>>>>>> 15d64472ec80f13cbf9066f3d680d0bb175598f0

const router = express.Router();

router.get("/probox/history", getAllHistoryController);
router.get("/probox", getLastDataController);

module.exports = router;
