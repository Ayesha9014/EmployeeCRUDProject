import { useEffect, useState } from "react"
import { employee } from "../Models/AllModel"
import axios from "axios"
import { NavLink } from "react-router-dom"

function Employee()
{
    const[employees, setEmployees]=useState<employee[]>([])
    const getEmployees = async()=>{
        const response = await axios.get(`https://localhost:7090/api/Employee/all`)
        setEmployees(response.data)
    }

    useEffect(()=>{
        getEmployees();
    }, [])

    const handleDeleteEmployee = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/Employee/delete/${id}`)
                getEmployees()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-1"></div>
                    <div className="col-10">
                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-employee' className="btn btn-primary mb-3">Create</NavLink>
                        </div>
                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Civil Id</th>
                                    <th>File Number</th>
                                    <th>Job Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees?.map((e)=>(
                                    <tr>
                                        <td>
                                            <img src="/src/assets/employee.png" width="50px" height="50px"/>
                                        </td>
                                        <td>{e.name}</td>
                                        <td>{e.civilId}</td>
                                        <td>{e.fileNumber}</td>
                                        <td>{e.jobName}</td>
                                        <td>{e.address}</td>
                                        <td>{e.telephoneNumber}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteEmployee(e.id)}>Delete</button>
                                        </td>
                                    </tr>             
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </>
    );
}
export default Employee;