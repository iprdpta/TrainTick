const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ip123",
  database: "trainticket_db"
});
connection.connect();
module.exports = connection;
