import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// Define interfaces
interface Country {
    id: number;
    name: string;
    cities: City[];
}

interface City {
    id: number;
    name: string;
    countryId: number;
}

const CreateCity = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [formData, setFormData] = useState<City>({
        id: 0, // Assuming backend auto-generates the `id`
        name: '',
        countryId: 0
    });
    const [message, setMessage] = useState<string | null>(null);

    // Fetch general departments
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://localhost:7090/api/Country/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching Countries:', error);
            }
        };

        fetchCountries();
    }, []);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'countryId' ? Number(value) : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7090/api/City/add', formData);
            setMessage('City created successfully!');
            setFormData({
                id: 0,
                name: '',
                countryId: 0
            }); // Reset form
        } catch (error) {
            console.error('Error creating city:', error);
            setMessage('Failed to create city. Please try again.');
        }
    };

    return (
        <div  className='container-fluid mt-4'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <div className='card border-success'>
                   <div className='card-header'>
                        <h4>Create City</h4>
                   </div>
                <div className='card-body'>
                {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
            <div className='form-group'>
                    <label className='form-label'>Coutry</label>
                    <select
                        name="countryId"
                        value={formData.countryId}
                        onChange={handleChange}
                        required
                        className='form-control'
                    >
                        <option value="">
                            Select a Country
                        </option>
                        {countries.map((gd) => (
                            <option key={gd.id} value={gd.id}>
                                {gd.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <label className='form-label'>City Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter city name"
                        required
                        className='form-control mb-2'
                    />
                </div>
                
                <NavLink type='button' className='btn btn-secondary float-end ms-2'  to='/city'>Cancel</NavLink>
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

export default CreateCity;
