import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export interface SanctionType {
    id: number;
    name: string;
    sanctions: Sanction[];
}

export interface Sanction {
    id: number;
    employeeId: number;
    date: Date;
    punishment: string;
    punishmentDate: Date;
    sanctionTypeId: number;
}

function Sanction() {
    const [sanctions, setSanctions] = useState<Sanction[]>([]);

    const getSanctions = async () => {
        try {
            const response = await axios.get<Sanction[]>(`https://localhost:7090/api/Sanction/all`);
            const parsedSanctions = response.data.map((sanction) => ({
                ...sanction,
                date: new Date(sanction.date),
                punishmentDate: new Date(sanction.punishmentDate),
            }));
            setSanctions(parsedSanctions);
        } catch (error) {
            console.error("Error fetching sanctions:", error);
        }
    };

    useEffect(() => {
        getSanctions();
    }, []);

    const handleDeleteSanction = async (id: number) => {
        if (window.confirm("Are you sure to delete?")) {
            try {
                await axios.delete(`https://localhost:7090/api/Sanction/delete/${id}`);
                getSanctions();
            } catch (error) {
                console.error("Error deleting sanction:", error);
            }
        }
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <NavLink to="/sanction-type" className="btn btn-primary mb-3">
                            Sanction Type
                        </NavLink>
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Sanction Type</th>
                                <th>Employee Id</th>
                                <th>Date</th>
                                <th>Punishment</th>
                                <th>Punishment Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sanctions.map((c) => (
                                <tr key={c.id}>
                                    <td>{c.sanctionTypeId}</td>
                                    <td>{c.employeeId}</td>
                                    <td>{c.date.toLocaleDateString()}</td>
                                    <td>{c.punishment}</td>
                                    <td>{c.punishmentDate.toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteSanction(c.id)}
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

export default Sanction;
