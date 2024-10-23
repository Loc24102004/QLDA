import React, { useState, useEffect } from 'react';
import "./profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  location: string;
  status: string;
  userName: string;
  email: string;
  phoneNumber: string;
}

export default function User_Profile() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    status: '',
    userName: '',
    email: '',
    phoneNumber: '',
  });

  // Giả lập việc lấy dữ liệu từ database (API call hoặc fetch từ server)
  useEffect(() => {
    // Giả sử đây là dữ liệu lấy về từ database
    const fetchedData: FormData = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      location: 'New York',
      status: 'Active',
      userName: 'johndoe123',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    };
    setFormData(fetchedData);
  }, []);

  return (
    <div className="profile-page container d-flex justify-content-start align-items-start mt-5">
      <div className="profile-sidebar mt-2 p-3 col-md-3 text-center">
        <img src="#" alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
        <p className=" p-1">{formData.userName}</p>
        <button className="btn btn-danger w-auto">Become an Author</button>
      </div>
  
      <div className="profile-settings col-md-9">
        <h2 className='mb-4'>User Profile</h2>
        <div className="p-3" style={{ border: '1px solid #ccc' }}>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <p className="border rounded p-2">{formData.userName}</p>
          </div>
  
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">First Name</label>
              <p className="border rounded p-2">{formData.firstName}</p>
            </div>
            <div className="col">
              <label className="form-label">Last Name</label>
              <p className="border rounded p-2">{formData.lastName}</p>
            </div>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <p className="border rounded p-2">{formData.gender}</p>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <p className="border rounded p-2">{formData.phoneNumber}</p>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Email</label>
            <p className="border rounded p-2">{formData.email}</p>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <p className="border rounded p-2">{formData.dateOfBirth}</p>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Status</label>
            <p className="border rounded p-2">{formData.status}</p>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Location</label>
            <p className="border rounded p-2">{formData.location}</p>
          </div>
  
          <div className="d-flex justify-content-start mt-4">
            <button type="button" className="btn btn-secondary w-auto">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}
