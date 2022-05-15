// For mysql2
const db = require('./db/connection');
// For Inquirer
const inquirer = require('inquirer');
// For console.table
const cTable = require('console.table');

// Tests connection to database
db.query(`SELECT * FROM employee`, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.table(result);
});
