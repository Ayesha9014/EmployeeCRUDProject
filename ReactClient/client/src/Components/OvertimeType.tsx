import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export interface OvertimeType{
    id:number;
    name:string;
}

function OvertimeType()
{
    const [Overtimes, setOvertimes]=useState<OvertimeType[]>([])
    const getOvertimes = async()=>{
        const response = await axios.get(`https://localhost:7090/api/OvertimeType/all`)
        setOvertimes(response.data)
    }

    useEffect(()=>{
        getOvertimes();
    }, [])

    const handleDeleteOvertimeType = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/OvertimeType/delete/${id}`)
                getOvertimes()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
            <div className="col-3"></div>
                    <div className="col-6">

                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-Overtime-type' className="btn btn-primary mb-3">Create</NavLink>
                        </div>

                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Overtime Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Overtimes?.map((gd)=>(
                                    <tr>
                                        <td>{gd.id}</td>
                                        <td>{gd.name}</td>
                                        <td>
                                            <NavLink className="btn btn-primary me-2" to={'/edit-Overtime-type/:departmentId'}>Edit</NavLink>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteOvertimeType(gd.id)}>Delete</button>
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
export default OvertimeType;