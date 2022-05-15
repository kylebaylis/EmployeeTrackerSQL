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

// main function
const employeeTracker = () => {
    return inquirer.prompt([
    {
        name: 'start',
        message: 'What would you like to do?',
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees',
                 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }
    ])
    .then((answer) => {
        if(answer.start == 'View all departments') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.table(result);
                employeeTracker();
            });
        }
        if(answer.start == 'View all roles')  {
            db.query(`SELECT * FROM role`, (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.table(result);
                employeeTracker();
            });
        }
        if(answer.start == 'View all employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if(err) {
                    console.log(err);
                }
                console.table(result);
                employeeTracker();
            });
        }
        if(answer.start == 'Add a department') {
            inquirer.prompt([
                {
                    name: 'department',
                    message: 'What is the department name?',
                    type: 'input'
                }
            ])
            .then((answer) => {
                const sql = `INSERT INTO department (name) VALUES (?)`;
                const params = [answer.department];
                db.query(sql, params, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    console.table(result);
                    db.query(`SELECT * FROM department`, (err, result) => {
                        if(err) {
                            console.log(err);
                        }
                        console.table(result);
                        employeeTracker();
                    });
                });
            })
        }
        if(answer.start == 'Add a role') {
            inquirer.prompt([
                {
                    name: 'roleName',
                    message: 'What is the role?',
                    type: 'input'
                },
                {
                    name: 'roleSalary',
                    message: 'What is the salary for this role?',
                    type: 'input'
                },
                {
                    name: 'roleDepartment',
                    message: 'What is the department number for this role?',
                    type: 'input'
                }
            ])
            .then((answer) => {
                const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
                const params = [answer.roleName, answer.roleSalary, answer.roleDepartment];
                db.query(sql, params, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    console.table(result);
                    db.query(`SELECT * FROM role`, (err, result) => {
                        if(err) {
                            console.log(err);
                        }
                        console.table(result);
                        employeeTracker();
                    });
                });
            })
        }
        if(answer.start == 'Add an employee') {
            inquirer.prompt([
                {
                    name: 'employeeFirst',
                    message: "What is the employee's first name?",
                    type: 'input'
                },
                {
                    name: 'employeeLast',
                    message: "What is the employee's last name?",
                    type: 'input'
                },
                {
                    name: 'employeeRole',
                    message: "What is the employee's role ID number?",
                    type: 'input'
                },
                {
                    name: 'employeeMgr',
                    message: "What is ID number of the employee's manager?",
                    type: 'input'
                }
            ])
            .then((answer) => {
                const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
                const params = [answer.employeeFirst, answer.employeeLast, answer.employeeRole, answer.employeeMgr];
                db.query(sql, params, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    console.table(result);
                    db.query(`SELECT * FROM employee`, (err, result) => {
                        if(err) {
                            console.log(err);
                        }
                        console.table(result);
                        employeeTracker();
                    });
                });
            })
        }
        if(answer.start == 'Update an employee role') {
            inquirer.prompt([
                {
                    name: 'employeeID',
                    message: "What is the employee's ID number?",
                    type: 'input'
                },
                {
                    name: 'employeeRole',
                    message: "What is the employee's new role?",
                    type: 'input'
                }
            ])
            .then((answer) => {
                const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
                const params = [answer.employeeRole, answer.employeeID];
                db.query(sql, params, (err, result) => {
                    if(err) {
                        console.log(err);
                    }
                    console.table(result);
                    db.query(`SELECT * FROM employee`, (err, result) => {
                        if(err) {
                            console.log(err);
                        }
                        console.table(result);
                        employeeTracker();
                    });
                });
            })
        }
        if(answer.start == 'Exit') {
            console.log('Press ctrl+C to return the the bash prompt');
            return;
        }
    });
};

employeeTracker();
