import React, { useState } from 'react'

function EditUsers({user}) {


    const [Department, setDepartment] = useState(user.department)

    const updateDepartment=async(e)=>{
        e.preventDefault();
        try {
            const body = {Department};
            const res= await fetch(`http://localhost:5000/users/${user.emp_id}`,
            {
                method:"PUT", 
                headers: { "Content-Type":"application/json"},
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
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${user.emp_id}`}>
            Edit
            </button>

            <div className="modal fade" id={`id${user.emp_id}`} onClick={()=>{setDepartment(user.department)}}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Edit Department</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={()=>{setDepartment(user.department)}}>&times;</button>
                </div>

                <div className="modal-body">
                    <input type="text" className="form-control" value={Department} onChange={e=>{setDepartment(e.target.value)}} required />
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" onClick={e=>{updateDepartment(e)}} >Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>{setDepartment(user.department)}}>Close</button>
                </div>
                

                </div>
            </div>
            </div>
        </div>
    )
}

export default EditUsers
