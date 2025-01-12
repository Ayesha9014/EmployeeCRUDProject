import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export interface OvertimeType {
    id: number;
    name: string;
    Overtimes: Overtime[];
}

export interface Overtime {
    id: number;
    employeeId: number;
    startDate: Date;
    endDate: Date;
    numberOfDays: number;
    OvertimeTypeId: number;
}

function Overtime() {
    const [Overtimes, setOvertimes] = useState<Overtime[]>([]);

    const getOvertimes = async () => {
        try {
            const response = await axios.get<Overtime[]>(`https://localhost:7090/api/Overtime/all`);
            const parsedOvertimes = response.data.map((overtime) => ({
                ...overtime,
                startDate: new Date(overtime.startDate),
                endDate: new Date(overtime.endDate),
            }));
            setOvertimes(parsedOvertimes);
        } catch (error) {
            console.error("Error fetching overtimes:", error);
        }
    };

    useEffect(() => {
        getOvertimes();
    }, []);

    const handleDeleteOvertime = async (id: number) => {
        if (window.confirm("Are you sure to delete?")) {
            try {
                await axios.delete(`https://localhost:7090/api/Overtime/delete/${id}`);
                getOvertimes();
            } catch (error) {
                console.error("Error deleting overtime:", error);
            }
        }
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <NavLink to="/Overtime-type" className="btn btn-primary mb-3">
                            Overtime Type
                        </NavLink>
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Overtime Type</th>
                                <th>Employee ID</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Number of Days</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Overtimes.map((c) => (
                                <tr key={c.id}>
                                    <td>{c.OvertimeTypeId}</td>
                                    <td>{c.employeeId}</td>
                                    <td>{c.startDate.toLocaleDateString()}</td>
                                    <td>{c.endDate.toLocaleDateString()}</td>
                                    <td>{c.numberOfDays}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteOvertime(c.id)}
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
    );
}

export default Overtime;
