import React, { useState } from 'react'

function InputUsers() {

    const [EmpName, setName] = useState("")
    const [Age, setAge] = useState(0)
    const [Department, setDepartment] = useState("")

    const onsubmitform = async(e)=>{
        e.preventDefault();
        try {
            const body = {
                EmpName,
                Age,
                Department
            }
            console.log(body);
            const res= await fetch("http://localhost:5000/users",{
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(res);
            window.location="/"
        } catch (error) {
            console.error(error);
        }


    }

    return (
        <div>
            <h1 className="text-center mt-4">Employee Management PERN</h1>
            <form className=' mt-4' onSubmit={onsubmitform}>
                <input type="text" placeholder="Name of Employee" className="form-control mt-4" value={EmpName} onChange={e=>{setName(e.target.value)}} required/>
                <input type="text" placeholder="Age of Employee" className="form-control mt-4" value={Age} onChange={e=>{setAge(e.target.value)}} required/>
                <input type="text" placeholder="Department of Employee" className="form-control mt-4" value={Department} onChange={e=>{setDepartment(e.target.value)}} required/>
                <button className="btn btn-success mt-4" style={{width:'100%'}} type="submit"  >Add</button>
            </form>
        </div>
    )
}

export default InputUsers
