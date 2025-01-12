import axios from "axios";
import { useEffect, useState } from "react";
import { country } from "../Models/AllModel";
import { NavLink } from "react-router-dom";

function Country(){
    const [countries, setCountries]=useState<country[]>([])
    const getCountries = async()=>{
        const response = await axios.get(`https://localhost:7090/api/Country/all`)
        setCountries(response.data)
    }

    useEffect(()=>{
        getCountries();
    }, [])

    const handleDeleteCountry = async(id:number)=>{
        if (window.confirm('Are you sure to delete?')){
            
                await axios.delete(`https://localhost:7090/api/Country/delete/${id}`)
                getCountries()
            
        }
    }
    return(
        <>
            <div className="container-fluid mt-5">
            <div className="row">
            <div className="col-3"></div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end">
                            <NavLink to='/create-country' className="btn btn-primary mb-3">Create</NavLink>
                        </div>
                                <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Country</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countries?.map((c)=>(
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>{c.name}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>handleDeleteCountry(c.id)}>Delete</button>
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
export default Country;