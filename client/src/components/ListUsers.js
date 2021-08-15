import React, { useEffect, useState } from 'react'

import  EditUsers from "./EditUsers";


function ListUsers() {

    const [Users, setUsers] = useState([])                
    const [Department, setDepartment] = useState([])                
    const [Search, setSearch] = useState("")


    
    useEffect(() => {
        const getUsers=async()=>{
            try {
    
                const res= await fetch("http://localhost:5000/users")
                const jsonData= await res.json()
                console.log(jsonData);
                setUsers(jsonData)
                console.log(Users);

                const res2= await fetch("http://localhost:5000/department")
                const jsonData2= await res2.json()
                console.log(jsonData2);
                setDepartment(jsonData2)
                console.log(Department);
                
            } catch (error) {
                console.error(error);
            }
        }
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, [])

    const deleteUser= async(id)=>{
        try {
            const deleteuser=await fetch(`http://localhost:5000/users/${id}`, {method:"DELETE"});
            console.log(deleteuser);
            setUsers(Users.filter(user=>user.emp_id !== id))
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1 className="text-center mt-4">List of Employees</h1>
            {/* <SearchUsers/> */}
            <input placeholder="Search for Employee" value={Search} onChange={(e)=>{setSearch(e.target.value)}} type="text" className="form-control" />

            <table className="table mt-4 text-center">
                <thead>
                <tr>
                    <th>Emp_ID</th>
                    <th>Employee Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Edit Department</th>
                    <th>Delete</th>
                    {/* <th>Department ID</th> */}
                </tr>
                </thead>
                <tbody>
                    {Users.filter((val)=>{
                        if (Search===""){
                            return val
                        }
                        else if (val.empname.toLowerCase().includes(Search.toLocaleLowerCase())){
                            return val
                        }
                        else if (val.emp_id==Search){
                            return val
                        }
                        else if (val.department.toLowerCase().includes(Search.toLocaleLowerCase())){
                            return val
                        }
                        else if (val.age==Search){
                            return val
                        }
                    }).map((user)=>(
                        <tr key={user.emp_id}>
                            <td>{user.emp_id}</td>
                            <td>{user.empname}</td>
                            <td>{user.age}</td>
                            <td>{user.department}</td>
                            <td><EditUsers user={user}/></td>
                            <td><button className="btn btn-danger" onClick={()=>deleteUser(user.emp_id)}>Delete</button></td>
                        </tr>
                    ))}
                {/* <tr>
                    <td>1</td>
                    <td>Doe</td>
                    <td>21</td>
                    <td>CSE</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr> */}
                
                </tbody>
            </table>
        </div>
    )
}

export default ListUsers
