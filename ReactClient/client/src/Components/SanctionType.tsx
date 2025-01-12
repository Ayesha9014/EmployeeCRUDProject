import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export interface SanctionType{
    id:number;
    name:string;
}

function SanctionType()
{
    const [sanctions, setSanctions]=useState<SanctionType[]>([])
    const getSanctions = async()=>{
        const response = await axios.get(`https://localhost:7090/api/SanctionType/all`)
        setSanctions(response.data)
    }

    useEffect(()=>{
        getSanctions();
    }, [])

    const handleDeleteSanctionType = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/SanctionType/delete/${id}`)
                getSanctions()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
            <div className="col-3"></div>
                    <div className="col-6">

                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-sanction-type' className="btn btn-primary mb-3">Create</NavLink>
                        </div>

                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Sanction Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sanctions?.map((gd)=>(
                                    <tr>
                                        <td>{gd.id}</td>
                                        <td>{gd.name}</td>
                                        <td>
                                            <NavLink className="btn btn-primary me-2" to={'/edit-sanction-type/:departmentId'}>Edit</NavLink>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteSanctionType(gd.id)}>Delete</button>
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
export default SanctionType;