import React, { useEffect, useState } from 'react'


function ListDepartments() {

    const [Department, setDepartment] = useState([])                
    const [Search, setSearch] = useState("")


    
    useEffect(() => {
        const getUsers=async()=>{
            try {

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

 

    return (
        <div>
            <h1 className="text-center mt-4">List of Departments</h1>
            {/* <SearchUsers/> */}
            <input placeholder="Search for Department" value={Search} onChange={(e)=>{setSearch(e.target.value)}} type="text" className="form-control " />

            <table className="table mt-4 text-center table-dark ">
                <thead>
                <tr>
                    <th>Department_ID</th>
                    <th>Department Name</th>
                    
                    {/* <th>Department ID</th> */}
                </tr>
                </thead>
                <tbody>
                    {Department.filter((val)=>{
                        if (Search===""){
                            return val
                        }
                        else if (val.department.toLowerCase().includes(Search.toLocaleLowerCase())){
                            return val
                        }
                        else if (val.dept_id==Search){
                            return val
                        }
                       
                    }).map((user)=>(
                        <tr key={user.dept_id}>
                            <td>{user.dept_id}</td>
                            <td>{user.department}</td>
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

export default ListDepartments
