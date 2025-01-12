import  { useState, useEffect } from "react";
import axios from "axios";
import Branch from './../Components/Branch';
import { NavLink } from "react-router-dom";

export interface GeneralDepartment{
    id:number;
    name:string;
    departments:Department[];
}

export interface Department{
    id:number;
    name:string;
    generalDepartmentId:number;
    branches:Branch[];
}

export interface Branch{
    id:number;
    name:string;
    departmentId:number;
    employees:Employee[]
}

export interface Country{
    id:number;
    name:string;
    cities:City[];
}

export interface City{
    id:number;
    name:string;
    countryId:number;
    towns:Town[];
}

export interface Town{
    id:number;
    name:string;
    cityId:number;
    employees:Employee[]
}

export interface Employee{
    id:number;
    name:string;
    civilId:string;
    fileNumber:string;
    jobName:string;
    address:string;
    telephoneNumber:string;
    photo:File|null;
    other:string;
    branchId:number;
    townId:number;
    cityId:number;
    countryId:number;
    generalDepartmentId:number;
    departmentId:number;
}


const CreateEmployee = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [towns, setTowns] = useState<Town[]>([]);
    const [generalDepartments, setGeneralDepartments] = useState<GeneralDepartment[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [branches, setBranches] = useState<Branch[]>([]);

    const [formData, setFormData] = useState<Omit<Employee, "id">>({
        name: "",
        civilId: "",
        fileNumber: "",
        jobName: "",
        address: "",
        telephoneNumber: "",
        photo: null,
        other: "",
        branchId: 0,
        townId: 0,
        cityId:0,
        countryId:0,
        generalDepartmentId:0,
        departmentId:0,
    });

    // Fetch countries
    useEffect(() => {
        axios
            .get("https://localhost:7090/api/Country/all")
            .then((response) => setCountries(response.data))
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);

    // Fetch general departments
    useEffect(() => {
        axios
            .get("https://localhost:7090/api/GeneralDepartment/all")
            .then((response) => setGeneralDepartments(response.data))
            .catch((error) => console.error("Error fetching general departments:", error));
    }, []);

    // Fetch cities based on selected country
    useEffect(() => {
        if (formData.countryId) {
            axios
                .get("https://localhost:7090/api/City/all")
                .then((response) => {
                    const filteredCities = response.data.filter(
                        (city: City) => city.countryId === Number(formData.countryId)
                    );
                    setCities(filteredCities);
                })
                .catch((error) => console.error("Error fetching cities:", error));
        }
    }, [formData.countryId]);

    // Fetch towns based on selected city
    useEffect(() => {
        if (formData.cityId) {
            axios
                .get("https://localhost:7090/api/Town/all")
                .then((response) => {
                    const filteredTowns = response.data.filter(
                        (town: Town) => town.cityId === Number(formData.cityId)
                    );
                    setTowns(filteredTowns);
                })
                .catch((error) => console.error("Error fetching towns:", error));
        }
    }, [formData.cityId]);

    // Fetch departments based on selected general department
    useEffect(() => {
        if (formData.generalDepartmentId) {
            axios
                .get("https://localhost:7090/api/Department/all")
                .then((response) => {
                    const filteredDepartments = response.data.filter(
                        (department: Department) => department.generalDepartmentId === Number(formData.generalDepartmentId)
                    );
                    setDepartments(filteredDepartments);
                })
                .catch((error) => console.error("Error fetching departments:", error));
        }
    }, [formData.generalDepartmentId]);

    // Fetch branches based on selected department
    useEffect(() => {
        if (formData.departmentId) {
            axios
                .get("https://localhost:7090/api/Branch/all")
                .then((response) => {
                    const filteredBranches = response.data.filter(
                        (branch: Branch) => branch.departmentId === Number(formData.departmentId)
                    );
                    setBranches(filteredBranches);
                })
                .catch((error) => console.error("Error fetching branches:", error));
        }
    }, [formData.departmentId]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files; // Access files property once
        if (files && files.length > 0) {
            setFormData((prev) => ({ ...prev, photo: files[0] })); // Use the first file
        } else {
            setFormData((prev) => ({ ...prev, photo: null })); // Handle case when no file is selected
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("civilId", formData.civilId);
        data.append("fileNumber", formData.fileNumber);
        data.append("jobName", formData.jobName);
        data.append("address", formData.address);
        data.append("telephoneNumber", formData.telephoneNumber);
        data.append("other", formData.other);
        data.append("branchId", formData.branchId.toString());
        data.append("townId", formData.townId.toString());
        if (formData.photo) {
            data.append("photo", formData.photo);
        }

        try {
            await axios.post("https://localhost:7090/api/Employee/add", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Employee created successfully!");
        } catch (error) {
            console.error("Error creating employee:", error);
        }
    };

    return (
        <div className="container-fluid mt-4">
                    <div className="card border-success">
                        <div className="card-header">
                            <h4 className="text-secondary">Create Employee</h4>
                        </div>
                        <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                            <div className="col-5">
                                        <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-control"
                                        />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Civil Id</label>
                                    <input
                                        type="text"
                                        name="civilId"
                                        placeholder="Civil ID"
                                        value={formData.civilId}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />

                                </div>
                                <div className="form-group">
                                    <label className="form-label">File Number</label>
                                    <input
                                        type="text"
                                        name="fileNumber"
                                        placeholder="File Number"
                                        value={formData.fileNumber}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                   <label className="form-label">Job Name</label>
                                   <input
                                        type="text"
                                        name="jobName"
                                        placeholder="Job Name"
                                        value={formData.jobName}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                     />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        name="telephoneNumber"
                                        placeholder="Telephone Number"
                                        value={formData.telephoneNumber}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Photo</label>
                                    <input
                                        type="file"
                                        name="photo"
                                        onChange={handleFileChange}
                                        required
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5">
                                <div className="form-group">
                                    <label className="form-label">Country</label>
                                    <select name="countryId" value={formData.countryId} onChange={handleChange} required className="form-control">
                                        <option value="">Select Country</option>
                                        {countries.map((country) => (
                                            <option key={country.id} value={country.id}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <select name="cityId" value={formData.cityId} onChange={handleChange} required className="form-control">
                                        <option value="">Select City</option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Town</label>
                                    <select name="townId" value={formData.townId} onChange={handleChange} required className="form-control">
                                        <option value="">Select Town</option>
                                        {towns.map((town) => (
                                            <option key={town.id} value={town.id}>
                                                {town.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">General Department</label>
                                    <select
                                        name="generalDepartmentId"
                                        value={formData.generalDepartmentId}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                    >
                                        <option value="">Select General Department</option>
                                        {generalDepartments.map((dept) => (
                                            <option key={dept.id} value={dept.id}>
                                                {dept.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Department</label>
                                    <select name="departmentId" value={formData.departmentId} onChange={handleChange} required className="form-control">
                                        <option value="">Select Department</option>
                                        {departments.map((dept) => (
                                            <option key={dept.id} value={dept.id}>
                                                {dept.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Branch</label>
                                    <select name="branchId" value={formData.branchId} onChange={handleChange} required className="form-control">
                                        <option value="">Select Branch</option>
                                        {branches.map((branch) => (
                                            <option key={branch.id} value={branch.id}>
                                                {branch.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Other</label>
                                        <textarea
                                        name="other"
                                        placeholder="Other Information"
                                        value={formData.other}
                                        onChange={handleChange}
                                        className="form-control mb-2"
                                    />
                                </div>
                            </div>
                          </div>
                          <NavLink type='button' className='btn btn-secondary float-end ms-2'  to='/employee'>Cancel</NavLink>
                            <button type="submit" className="btn btn-primary float-end">Create</button>
                       </form>
                        </div>
                        <div className="card-footer"></div>
                    </div>
        </div>
    );
};

export default CreateEmployee;
