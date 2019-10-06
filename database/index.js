const mysql = require("mysql");
const { dbpassword } = require("../config.js");
console.log(dbpassword);
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: dbpassword,
  database: "farm"
});

db.connect(err => {
  if (err) {
    console.log("database not connected", err);
  } else {
    console.log("database connected");
  }
});

module.exports = db;
