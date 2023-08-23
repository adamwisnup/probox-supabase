const supabase = require("../config/supabaseConfig");

const getLatestData = async () => {
  const { data, error } = await supabase
    .from("sensor")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);

  if (error) {
    throw error;
  }

  return data;
};

const getAllHistory = async () => {
  const { data, error } = await supabase
    .from("sensor")
    .select("*")
    .order("id", { ascending: false });
  // .range(1, 24);

  if (error) {
    throw error;
  }

  return data;
};

module.exports = {
  getAllHistory,
  getLatestData,
};
