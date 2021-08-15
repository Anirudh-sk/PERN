const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

app.use(cors())
app.use(express.json())

//create user 
app.post("/users",async (req,res)=>{
    try {
        console.log(req.body);
        const newUser= await pool.query("INSERT INTO employees (EmpName, Age, Department) VALUES($1, $2, $3) RETURNING *",[req.body.EmpName,req.body.Age, req.body.Department]);
        const newDept= await pool.query("INSERT INTO department (Department) VALUES($1) RETURNING *",[req.body.Department]);
        res.json(newUser)
        // res.json(newDept)
        
    } catch (error) {
        console.error(error);
    }
})

//get all users
app.get("/users",async(req,res)=>{
    try {
        const allUsers = await pool.query("SELECT * FROM employees");
        res.json(allUsers.rows)
        // res.send(allUsers);
    } catch (error) {
        console.error(error);
    }
})

//get all departments
app.get("/department",async(req,res)=>{
    try {
        const allUsers = await pool.query("SELECT * FROM department");
        res.json(allUsers.rows)
        // res.send(allUsers);
    } catch (error) {
        console.error(error);
    }
})

//get specific users
app.get("/users/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const SpecificUser = await pool.query("SELECT * FROM employees WHERE Emp_ID = $1",[id]);
        res.json(SpecificUser.rows)
        // res.send(allUsers);
    } catch (error) {
        console.error(error);
    }
})

//update a user department
app.put("/users/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const {Department}=req.body;
        const update= await pool.query("UPDATE employees SET Department = $1 WHERE Emp_ID = $2",[Department,id])
        res.json("Department Updated Successfully")

        
    } catch (error) {
        console.error(error);
    }
})


//delete a user 
app.delete("/users/:id",async(req,res)=>{
    const {id}=req.params;
    const deleteUser= await pool.query("DELETE FROM employees where Emp_ID = $1",[id]);
    res.json("User Deleted")
})

app.listen(5000, ()=>{
    console.log("server on http://localhost:5000");
})