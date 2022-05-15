const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MistyMtns0522!?',
    database: 'copmpany'
});

module.exports = db;