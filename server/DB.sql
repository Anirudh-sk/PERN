CREATE DATABASE employee;

CREATE TABLE employees(
    Emp_ID serial primary key UNIQUE,
    EmpName varchar(255),
    Age INT,
    Department VARCHAR(255)
);

CREATE Table department(
    Dept_ID serial PRIMARY key UNIQUE,
    Department VARCHAR(255) UNIQUE
);
