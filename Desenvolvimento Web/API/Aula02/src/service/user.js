const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllUser(){
    const connection = await mysql.createConnection(databaseConfig);
    const [rows] = await connection.query("SELECT * FROM user");

    await connection.end();
    return rows;
}

async function createUser(name, email, password){
    const connection = await mysql.createConnection(databaseConfig);

    const insertUser = 'INSERT INTO user(name, email, password) VALUES(?, ?, ?)';

    await connection.query(insertUser, [name, email, password])

    await connection.end();
}

module.exports = {
    getAllUser,
    createUser,
};