const telemetry = require("../models/TelemetryData");
const { format } = require("date-fns");

const getTelemetryController = async (req, res) => {
  try {
    const telemetryData = await telemetry.getTelemetryData();
    const telemetryDB = await telemetry.getLatestTelemetryDB();

    const getData = {
      uid: telemetryDB[0].uid || null,
      status: telemetryDB[0].status || null,
      lock: telemetryDB[0].lock || null,
      timestamp: telemetryDB[0].timestamp
        ? format(new Date(telemetryDB[0].timestamp), "yyyy-MM-dd HH:mm:ss")
        : null,
    };

    res.status(200).json({
      status: 200,
      message: "success",
      data: getData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getTelemetryController,
};
