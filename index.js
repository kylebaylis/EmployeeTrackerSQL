// For mysql2
const db = require('./db/connection');
// For Inquirer
const inquirer = require('inquirer');
// For console.table
const cTable = require('console.table');

// Tests connection to database
/*
db.query(`SELECT * FROM employee`, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.table(result);
}); */

const employeeTracker = () => {
    return inquirer.prompt([
    {
        name: 'start',
        message: 'What would you like to do?',
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees',
                 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }
    ])
    .then((answer) => {
        if(answer.start == 'View all departments') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.table(result);
            });
        }
        if(answer.start == 'View all roles')  {
            db.query(`SELECT * FROM role`, (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.table(result);
            });
        }
        if(answer.start == 'View all employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.table(result);
            });
        }
    });
};

employeeTracker();
