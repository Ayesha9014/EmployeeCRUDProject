import axios from "axios";
import { useEffect, useState } from "react";
import { generalDepartment } from './../Models/AllModel';
import { NavLink } from "react-router-dom";
function GeneralDepartment()
{
    const [generalDepartments, setGeneralDepartments]=useState<generalDepartment[]>([])
    const getGeneralDepartments = async()=>{
        const response = await axios.get(`https://localhost:7090/api/GeneralDepartment/all`)
        setGeneralDepartments(response.data)
    }

    useEffect(()=>{
        getGeneralDepartments();
    }, [])

    const handleDeleteGDepartment = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/GeneralDepartment/delete/${id}`)
                getGeneralDepartments()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
            <div className="col-3"></div>
                    <div className="col-6">

                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-gdepartment' className="btn btn-primary mb-3">Create</NavLink>
                        </div>

                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>General Department</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generalDepartments?.map((gd)=>(
                                    <tr>
                                        <td>{gd.id}</td>
                                        <td>{gd.name}</td>
                                        <td>
                                            <NavLink className="btn btn-primary me-2" to={'/edit-gdepartment/:departmentId'}>Edit</NavLink>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteGDepartment(gd.id)}>Delete</button>
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
export default GeneralDepartment;