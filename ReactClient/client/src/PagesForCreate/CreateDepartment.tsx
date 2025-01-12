import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// Define interfaces
interface GeneralDepartment {
    id: number;
    name: string;
    departments: Department[];
}

interface Department {
    id: number;
    name: string;
    generalDepartmentId: number;
}

const CreateDepartment = () => {
    const [generalDepartments, setGeneralDepartments] = useState<GeneralDepartment[]>([]);
    const [formData, setFormData] = useState<Department>({
        id: 0, // Assuming backend auto-generates the `id`
        name: '',
        generalDepartmentId: 0
    });
    const [message, setMessage] = useState<string | null>(null);

    // Fetch general departments
    useEffect(() => {
        const fetchGeneralDepartments = async () => {
            try {
                const response = await axios.get('https://localhost:7090/api/GeneralDepartment/all');
                setGeneralDepartments(response.data);
            } catch (error) {
                console.error('Error fetching general departments:', error);
            }
        };

        fetchGeneralDepartments();
    }, []);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'generalDepartmentId' ? Number(value) : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7090/api/Department/add', formData);
            setMessage('Department created successfully!');
            setFormData({
                id: 0,
                name: '',
                generalDepartmentId: 0
            }); // Reset form
        } catch (error) {
            console.error('Error creating department:', error);
            setMessage('Failed to create department. Please try again.');
        }
    };

    return (
        <div  className='container-fluid mt-4'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <div className='card border-success'>
                   <div className='card-header'>
                        <h4>Create Department</h4>
                   </div>
                <div className='card-body'>
                {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='form-label'>Department Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter department name"
                        required
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>General Department</label>
                    <select
                        name="generalDepartmentId"
                        value={formData.generalDepartmentId}
                        onChange={handleChange}
                        required
                        className='form-control mb-2'
                    >
                        <option value="">
                            Select a General Department
                        </option>
                        {generalDepartments.map((gd) => (
                            <option key={gd.id} value={gd.id}>
                                {gd.name}
                            </option>
                        ))}
                    </select>
                </div>
                <NavLink type='button' className='btn btn-secondary float-end ms-2'  to='/department'>Cancel</NavLink>
                <button type="submit" className='btn btn-primary float-end'>Submit</button>
                <br/>
                <br/>
            </form>
            <div className='card-footer'></div>
                </div>
           
                </div>
                <div  className='col-3'></div>
                </div>
            </div>
        </div>
    );
};

export default CreateDepartment;
