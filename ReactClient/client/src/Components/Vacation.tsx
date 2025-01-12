import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


export interface VacationType {
    id: number;
    name: string;
    Vacations: Vacation[];
}

export interface Vacation {
    id: number;
    employeeId: number;
    startDate: Date;
    numberOfDays: number;
    endDate: Date;
    VacationTypeId: number;
}

function Vacation() {
    const [Vacations, setVacations] = useState<Vacation[]>([]);

    const getVacations = async () => {
        const response = await axios.get<Vacation[]>(`https://localhost:7090/api/Vacation/all`);
        const vacations = response.data.map((vacation) => ({
            ...vacation,
            startDate: new Date(vacation.startDate),
            endDate: new Date(vacation.endDate),
        }));
        setVacations(vacations);
    };

    useEffect(() => {
        getVacations();
    }, []);

    const handleDeleteVacation = async (id: number) => {
        if (window.confirm('Are you sure to delete?')) {
            await axios.delete(`https://localhost:7090/api/Vacation/delete/${id}`);
            getVacations();
        }
    };

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end">
                            <NavLink to="/Vacation-type" className="btn btn-primary mb-3">
                                Vacation Type
                            </NavLink>
                        </div>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    
                                    <th>Employee Id</th>
                                    <th>Start Date</th>
                                    <th>Number of Days</th>
                                    <th>End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Vacations?.map((c) => (
                                    <tr>
                                        <td>{c.employeeId}</td>
                                        <td>{c.startDate.toLocaleDateString()}</td>
                                        <td>{c.numberOfDays}</td>
                                        <td>{c.endDate.toLocaleDateString()}</td>
                                        
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteVacation(c.id)}
                                            >
                                                Delete
                                            </button>
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

export default Vacation;
