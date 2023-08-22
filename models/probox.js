const supabase = require("../config/supabaseConfig");

const insertHistory = async (uid, status, lock, timestamp) => {
  const { data, error } = await supabase
    .from("history")
    .insert([{ uid: uid, status: status, lock: lock, timestamp: timestamp }]);

  if (error) {
    throw error;
  }
  return data;
};

const getAllHistory = async () => {
  const { data, error } = await supabase
    .from("history")
    .select("*")
    .order("id", { ascending: false })
    .range(1, 12);

  if (error) {
    throw error;
  }

  return data;
};

module.exports = {
  insertHistory,
  getAllHistory,
};
