const express = require("express");
const proboxController = require("../controller/Telemetry");
// const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.get("/probox", proboxController.getTelemetryController);

module.exports = router;
