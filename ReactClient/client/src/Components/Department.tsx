import { useEffect, useState } from "react"
import { department } from "../Models/AllModel"
import axios from "axios"
import { NavLink } from "react-router-dom"

function Department()
{
    const[departments, setDepartments]=useState<department[]>([])
    const getDepartments = async()=>{
        const response = await axios.get(`https://localhost:7090/api/Department/all`)
        setDepartments(response.data)
    }

    useEffect(()=>{
        getDepartments();
    }, [])

    const handleDeleteDepartment = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/Department/delete/${id}`)
                getDepartments()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
            <div className="col-3"></div>
                    <div className="col-6">
                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-department' className="btn btn-primary mb-3">Create</NavLink>
                        </div>
                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>General Department</th>
                                    <th>Department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {departments?.map((c)=>(
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>
                                            {c.generalDepartmentId}
                                        </td>
                                        <td>{c.name}</td>
                                        
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteDepartment(c.id)}>Delete</button>
                                        </td>
                                    </tr>             
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3"></div>
            </div>
            </div>
        </>
    );
}
export default Department;