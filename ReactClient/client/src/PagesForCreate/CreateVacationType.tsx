import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const apiUrl = "https://localhost:7090/api/VacationType/add";

interface VacationType {
    id: number; 
    name: string;
}

const CreateVacationType = () => {
    const [formData, setFormData] = useState<VacationType>({
        id: 0,   // initialize with default values
        name: ''
    });
    const [message, setMessage] = useState<string | null>(null); // explicit type for message

    // Handle input changes with specific types
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'id' ? Number(value) : value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post(apiUrl, formData);
            setMessage('Vacation Type created successfully!');
            setFormData({ id: 0, name: '' }); // Reset form fields
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Failed to create Vacation Type. Please try again.');
        }
    };

    return (
        <div className='container-fluid mt-4'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                <div className='card border-success'>
                <div className='card-header'>
                    <h4 className='text-secondary'>Create Vacation Type</h4>
                </div>
                <div className='card-body'>
                {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='form-label'>Vacation Type ID</label>
                    <input
                        type="number"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Enter Vacation Type ID (optional)" 
                        className='form-control'
                        disabled
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Vacation Type Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Vacation Type name"
                        className='form-control mb-2'
                    />
                </div>
                <NavLink type='button' className='btn btn-secondary float-end ms-2'  to='/Vacation-type'>Cancel</NavLink>
                <button type="submit" className='btn btn-primary float-end'>Submit</button>

            </form>
                </div>
                <div className='card-footer'>

                </div>
            </div>
            
                </div>
                <div className='col-3'></div>
            </div>
            
            
        </div>
    );
};

export default CreateVacationType;
