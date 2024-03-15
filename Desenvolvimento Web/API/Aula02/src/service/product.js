const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllProduct(){
    const connection = await mysql.createConnection(databaseConfig);
    const [rows] = await connection.query("SELECT * FROM product");

    await connection.end();
    return rows;
}

module.exports = {
    getAllProduct,
};