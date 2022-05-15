INSERT INTO department
    (name)
VALUES
    ('finance'),
    ('engineering'),
    ('sales');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Finance manager', 100000, 1),
    ('Financial analyst', 60000, 1),
    ('Engineering manager', 100000, 2),
    ('Engineer', 70000, 2),
    ('Sales manager', 100000, 3),
    ('Salesperson', 50000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Aaa', 'Aaa', 1, NULL),
    ('Bbb', 'Bbb', 2, 1),
    ('Ccc', 'Ccc', 2, 1),
    ('Ddd', 'Ddd', 2, 1),
    ('Eee', 'Eee', 3, NULL),
    ('Fff', 'Fff', 4, 5),
    ('Ggg', 'Ggg', 4, 5),
    ('Hhh', 'Hhh', 4, 5),
    ('Iii', 'Iii', 5, NULL),
    ('Jjj', 'Jjj', 6, 9),
    ('Lll', 'Lll', 6, 9),
    ('Mmm', 'Mmm', 6, 9);