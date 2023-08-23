const { getLatestData, getAllHistory } = require("../models/probox");
const { utcToZonedTime, format } = require("date-fns-tz");

function formatTimestamp(timestamp) {
  const timeZone = "Asia/Jakarta";
  const zonedTime = utcToZonedTime(timestamp, timeZone);
  return format(zonedTime, "yyyy-MM-dd HH:mm:ss", { timeZone });
}

const getLastDataController = async (req, res) => {
  try {
    const dataDB = await getLatestData();

    const getData = {
      id: dataDB[0].id || null,
      uid: dataDB[0].uid || null,
      status: dataDB[0].status || null,
      selenoid: dataDB[0].selenoid || null,
      timestamp: dataDB[0].timestamp
        ? formatTimestamp(dataDB[0].timestamp)
        : null,
    };

    res.status(200).json({
      status: 200,
      message: "GET last data success",
      data: getData,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: {
        message: error.message,
      },
    });
  }
};

const getAllHistoryController = async (req, res) => {
  try {
    const historyData = await getAllHistory();

    if (Array.isArray(historyData)) {
      const formattedData = historyData.map((data) => ({
        ...data,
        timestamp: formatTimestamp(data.timestamp),
      }));

      res.json({
        status: 200,
        message: "GET all history success",
        data: formattedData,
      });
    } else {
      res.status(500).json({
        status: 500,
        errors: {
          message: "Unexpected data format: history data is not an array",
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      errors: {
        message: error.message,
      },
    });
  }
};

module.exports = {
  getAllHistoryController,
  getLastDataController,
};
