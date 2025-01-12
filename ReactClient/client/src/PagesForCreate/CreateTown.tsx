import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// Define interfaces
interface City {
    id: number;
    name: string;
    towns: Town[];
}

interface Town {
    id: number;
    name: string;
    cityId: number;
}

const CreateTown = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [formData, setFormData] = useState<Town>({
        id: 0, // Assuming backend auto-generates the `id`
        name: '',
        cityId: 0
    });
    const [message, setMessage] = useState<string | null>(null);

    // Fetch general departments
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get('https://localhost:7090/api/City/all');
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching Cities:', error);
            }
        };

        fetchCities();
    }, []);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'cityId' ? Number(value) : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7090/api/Town/add', formData);
            setMessage('City created successfully!');
            setFormData({
                id: 0,
                name: '',
                cityId: 0
            }); // Reset form
        } catch (error) {
            console.error('Error creating Town:', error);
            setMessage('Failed to create Town. Please try again.');
        }
    };

    return (
        <div  className='container-fluid mt-4'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <div className='card border-success'>
                   <div className='card-header'>
                        <h4>Create Town</h4>
                   </div>
                <div className='card-body'>
                {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
            <div className='form-group'>
                    <label className='form-label'>City</label>
                    <select
                        name="cityId"
                        value={formData.cityId}
                        onChange={handleChange}
                        required
                        className='form-control'
                    >
                        <option value="">
                            Select a City
                        </option>
                        {cities.map((gd) => (
                            <option key={gd.id} value={gd.id}>
                                {gd.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Town Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Town name"
                        required
                        className='form-control mb-2'
                    />
                </div>
                
                <NavLink type='button' className='btn btn-secondary float-end ms-2'  to='/town'>Cancel</NavLink>
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

export default CreateTown;
