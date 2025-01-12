import { useEffect, useState } from "react";
import { city } from "../Models/AllModel";
import axios from "axios";
import { NavLink } from "react-router-dom";

function City(){
    const[cities, setCities]=useState<city[]>([])
    const getCities = async()=>{
        const response = await axios.get(`https://localhost:7090/api/City/all`)
        setCities(response.data)
    }

    useEffect(()=>{
        getCities();
    }, [])

    const handleDeleteCity = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/City/delete/${id}`)
                getCities()
            
        }
    }
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
            <div className="col-3"></div>
                    <div className="col-6">
                    <div className="d-flex justify-content-end">
                            <NavLink to='/create-city' className="btn btn-primary mb-3">Create</NavLink>
                        </div>
                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cities?.map((c)=>(
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>
                                            {c.countryId}
                                        </td>
                                        <td>{c.name}</td>
                                        
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteCity(c.id)}>Delete</button>
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
export default City;