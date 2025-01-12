import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// Define interfaces
interface Department {
    id: number;
    name: string;
    branches: Branch[];
}

interface Branch {
    id: number;
    name: string;
    departmentId: number;
}

const CreateBranch = () => {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [formData, setFormData] = useState<Branch>({
        id: 0, // Assuming backend auto-generates the `id`
        name: '',
        departmentId: 0
    });
    const [message, setMessage] = useState<string | null>(null);

    // Fetch general departments
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('https://localhost:7090/api/Department/all');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'departmentId' ? Number(value) : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7090/api/Branch/add', formData);
            setMessage('Branch created successfully!');
            setFormData({
                id: 0,
                name: '',
                departmentId: 0
            }); // Reset form
        } catch (error) {
            console.error('Error creating branch:', error);
            setMessage('Failed to create branch. Please try again.');
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
                    <label className='form-label'>Branch Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Branch name"
                        required
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Department</label>
                    <select
                        name="departmentId"
                        value={formData.departmentId}
                        onChange={handleChange}
                        required
                        className='form-control mb-2'
                    >
                        <option value="">
                            Select a Department
                        </option>
                        {departments.map((gd) => (
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

export default CreateBranch;
