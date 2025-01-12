import axios from "axios";
import { useEffect, useState } from "react";

export interface Health{
    id:number;
    employeeId:number;
    date:Date;
    medicalDiagnose:string;
    medicalRecommendation:string;
}

function Health() {
    const [Healths, setHealths] = useState<Health[]>([]);

    const getHealths = async () => {
        try {
            const response = await axios.get<Health[]>(`https://localhost:7090/api/Doctor/all`);
            const parsedHealths = response.data.map((Health) => ({
                ...Health,
                date: new Date(Health.date)
            }));
            setHealths(parsedHealths);
        } catch (error) {
            console.error("Error fetching Healths:", error);
        }
    };

    useEffect(() => {
        getHealths();
    }, []);

    const handleDeleteHealth = async (id: number) => {
        if (window.confirm("Are you sure to delete?")) {
            try {
                await axios.delete(`https://localhost:7090/api/Doctor/delete/${id}`);
                getHealths();
            } catch (error) {
                console.error("Error deleting Health:", error);
            }
        }
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Date</th>
                                <th>Medical Diagnose</th>
                                <th>Medical Recommendation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Healths.map((c) => (
                                <tr key={c.id}>
                                    <td>{c.employeeId}</td>
                                    <td>{c.date.toLocaleDateString()}</td>
                                    <td>{c.medicalDiagnose}</td>
                                    <td>{c.medicalRecommendation}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteHealth(c.id)}
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

export default Health;
