// const dbConnection = require("../config/dbConfig");

// const insertHistory = async (uid, status, lock, timestamp) => {
//   const sql = `INSERT INTO history(uid, status, lock, timestamp)
//     VALUES (?, ?, ?, ?)`;
//   const values = [uid, status, lock, timestamp];

//   try {
//     const [result] = await dbConnection.query(sql, values);
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// const getAllHistory = async () => {
//   const query =
//     "SELECT * FROM history WHERE id < (SELECT MAX(id) FROM history) ORDER BY id DESC LIMIT 4";

//   try {
//     const [results] = await dbConnection.query(query);
//     return results;
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {
//   insertHistory,
//   getAllHistory,
// };

const supabase = require("../config/supabaseConfig");

const insertHistory = async (uid, status, lock, timestamp) => {
  const { data, error } = await supabase
    .from("history")
    .insert([{ uid, status, lock, timestamp }]);

  if (error) {
    throw error;
  }

  return data;
};

// const getAllHistory = async () => {
//   const { data, error } = await supabase
//     .from("history")
//     .select("*")
//     .order("id", { ascending: false })
//     .range(1, null);

//   if (error) {
//     throw error;
//   }

//   return data;
// };

const getAllHistory = async () => {
  const { data, error } = await supabase
    .from("history")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    throw error;
  }

  // Menghilangkan data terakhir dari hasil
  const allDataExceptLast = data.slice(1, data.length);

  return allDataExceptLast;
};

module.exports = {
  insertHistory,
  getAllHistory,
};
