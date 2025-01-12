import axios from "axios"
import { useEffect, useState } from "react"
import { town } from "../Models/AllModel"
import { NavLink } from "react-router-dom"

function Town()
{
    const[towns, setTowns]=useState<town[]>([])
    const getTowns = async()=>{
        const response = await axios.get(`https://localhost:7090/api/Town/all`)
        setTowns(response.data)
    }

    useEffect(()=>{
        getTowns();
    }, []);

    const handleDeleteTown = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/Town/delete/${id}`)
                getTowns()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
            <div className="col-3"></div>
                    <div className="col-6">
                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-town' className="btn btn-primary mb-3">Create</NavLink>
                        </div>
                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>City</th>
                                    <th>Town</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {towns?.map((c)=>(
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>
                                            {c.cityId}
                                        </td>
                                        <td>{c.name}</td>
                                        
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteTown(c.id)}>Delete</button>
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
export default Town;