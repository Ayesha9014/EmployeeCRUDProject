import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface GeneralDepartment {
    id: number;
    name: string;
}

const EditGeneralDepartment: React.FC = () => {
    const { departmentId } = useParams<{ departmentId: string }>();
    const [department, setDepartment] = useState<GeneralDepartment | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<string>("");

    // Fetch department data
    useEffect(() => {
        const fetchDepartment = async () => {
            if (!departmentId) return;
            try {
                const response = await axios.get(
                    `https://localhost:7090/api/GeneralDepartment/single/${departmentId}`
                );
                setDepartment(response.data);
            } catch (error) {
                setMessage("Failed to load department details.");
                console.error("API Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartment();
    }, [departmentId]);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (department) {
            const { name, value } = e.target;
            setDepartment({
                ...department,
                [name]: name === "id" ? Number(value) : value,
            });
        }
    };

    // Submit updated data
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!department) return;
            await axios.put("https://localhost:7090/api/GeneralDepartment/all", department, {
                headers: { "Content-Type": "application/json" },
            });
            setMessage("Department updated successfully!");
        } catch (error) {
            setMessage("Failed to update department.");
            console.error("API Error:", error);
        }
    };

    // Loading state
    if (loading) {
        return <p>Loading department details...</p>;
    }

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Edit General Department</h2>
            {message && <p>{message}</p>}
            {department ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">Department ID:</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={department.id}
                            disabled
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Department Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={department.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Update Department</button>
                </form>
            ) : (
                <p>No department data found.</p>
            )}
        </div>
    );
};

export default EditGeneralDepartment;
