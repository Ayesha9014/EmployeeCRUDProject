import { useEffect, useState } from "react"
import { branch } from "../Models/AllModel"
import axios from "axios"
import { NavLink } from "react-router-dom"

function Branch()
{
    const[branches, setBranches]=useState<branch[]>([])
    const getBranches = async()=>{
        const response = await axios.get(`https://localhost:7090/api/Branch/all`)
        setBranches(response.data)
    }

    useEffect(()=>{
        getBranches();
    }, [])

    const handleDeleteBranch = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/Branch/delete/${id}`)
                getBranches()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-3"></div>
                    <div className="col-6">
                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-branch' className="btn btn-primary mb-3">Create</NavLink>
                        </div>
                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Department</th>
                                    <th>Branch</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {branches?.map((c)=>(
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>
                                            {c.departmentId}
                                        </td>
                                        <td>{c.name}</td>
                                        
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteBranch(c.id)}>Delete</button>
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
export default Branch;