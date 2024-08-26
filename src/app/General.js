
"use client";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './General.css'; // Import custom styles

const initialData = [
  // Example data structure

  {
    id: 1,
    name: 'John Doe',
    gender: 'Male',
    age: 30,
    motherTongue: 'Kannada',
    caste: 'OBC',
    religion: 'Christian',
    maritalStatus: 'Single',
    qualification: 'Bachelor\'s',
    occupation: 'Engineer',
    city: 'Hyderabad',
    state: 'NY',
    email: 'john.doe@example.com',
    mobileNumber: '123-456-7890',
    subscriptionType: 'Monthly',
    expectations: 'Looking for a serious relationship',
    subscriptionDate: '2023-06-01',
    revenue: 100,
    tax: 15
  },
  {
    id: 2,
    name: 'Jane Smith',
    gender: 'Female',
    age: 28,
    motherTongue: 'Telugu',
    caste: 'General',
    religion: 'Hindu',
    maritalStatus: 'Married',
    qualification: 'Master\'s',
    occupation: 'Teacher',
    city: 'Bangalore',
    state: 'CA',
    email: 'jane.smith@example.com',
    mobileNumber: '987-654-3210',
    subscriptionType: 'Annual',
    expectations: 'Seeking partnership for family',
    subscriptionDate: '2022-12-15',
    revenue: 500,
    tax: 75
  },
  {
    id: 3,
    name: 'Michael Brown',
    gender: 'Male',
    age: 35,
    motherTongue: 'French',
    caste: 'General',
    religion: 'Hindu',
    maritalStatus: 'Divorced',
    qualification: 'PhD',
    occupation: 'Research Scientist',
    city: 'Hyderabad',
    state: 'IL',
    email: 'michael.brown@example.com',
    mobileNumber: '456-789-1234',
    subscriptionType: 'Monthly',
    expectations: 'Looking for companionship and support',
    subscriptionDate: '2023-04-10',
    revenue: 150,
    tax: 22
  },
  {
    id: 4,
    name: 'Emily Davis',
    gender: 'Female',
    age: 32,
    motherTongue: 'Kannada',
    caste: 'OBC',
    religion: 'Christian',
    maritalStatus: 'Single',
    qualification: 'Bachelor\'s',
    occupation: 'Graphic Designer',
    city: 'San Francisco',
    state: 'CA',
    email: 'emily.davis@example.com',
    mobileNumber: '321-654-9870',
    subscriptionType: 'Annual',
    expectations: 'Interested in long-term relationship',
    subscriptionDate: '2023-01-20',
    revenue: 600,
    tax: 90
  },
  {
    id: 5,
    name: 'David Wilson',
    gender: 'Male',
    age: 40,
    motherTongue: 'Italian',
    caste: 'General',
    religion: 'Buddhist',
    maritalStatus: 'Widowed',
    qualification: 'Master\'s',
    occupation: 'Businessman',
    city: 'Houston',
    state: 'TX',
    email: 'david.wilson@example.com',
    mobileNumber: '654-321-9870',
    subscriptionType: 'Monthly',
    expectations: 'Looking for friendship and support',
    subscriptionDate: '2023-03-05',
    revenue: 200,
    tax: 30
  },
  {
    id: 6,
    name: 'Sophia Johnson',
    gender: 'Female',
    age: 27,
    motherTongue: 'Telugu',
    caste: 'General',
    religion: 'Hindu',
    maritalStatus: 'Engaged',
    qualification: 'PhD',
    occupation: 'Software Developer',
    city: 'Bangalore',
    state: 'WA',
    email: 'sophia.johnson@example.com',
    mobileNumber: '789-123-4560',
    subscriptionType: 'Annual',
    expectations: 'Seeking a serious relationship',
    subscriptionDate: '2022-11-30',
    revenue: 550,
    tax: 80
  },
  {
    id: 7,
    name: 'Daniel Martinez',
    gender: 'Male',
    age: 29,
    motherTongue: 'Portuguese',
    caste: 'OBC',
    religion: 'Hindu',
    maritalStatus: 'Single',
    qualification: 'Bachelor\'s',
    occupation: 'Architect',
    city: 'Boston',
    state: 'MA',
    email: 'daniel.martinez@example.com',
    mobileNumber: '234-567-8901',
    subscriptionType: 'Monthly',
    expectations: 'Looking for a meaningful connection',
    subscriptionDate: '2023-07-12',
    revenue: 120,
    tax: 18
  },
  {
    id: 8,
    name: 'Olivia Taylor',
    gender: 'Female',
    age: 31,
    motherTongue: 'Japanese',
    caste: 'General',
    religion: 'Shinto',
    maritalStatus: 'Married',
    qualification: 'Master\'s',
    occupation: 'Journalist',
    city: 'Miami',
    state: 'FL',
    email: 'olivia.taylor@example.com',
    mobileNumber: '567-890-1234',
    subscriptionType: 'Annual',
    expectations: 'Looking for a partner to share life experiences',
    subscriptionDate: '2023-02-28',
    revenue: 700,
    tax: 100
  },
  {
    id: 9,
    name: 'James Anderson',
    gender: 'Male',
    age: 38,
    motherTongue: 'Arabic',
    caste: 'General',
    religion: 'Muslim',
    maritalStatus: 'Single',
    qualification: 'Master\'s',
    occupation: 'Consultant',
    city: 'Philadelphia',
    state: 'PA',
    email: 'james.anderson@example.com',
    mobileNumber: '678-901-2345',
    subscriptionType: 'Monthly',
    expectations: 'Seeking long-term relationship with shared values',
    subscriptionDate: '2023-05-23',
    revenue: 180,
    tax: 25
  },
  {
    id: 10,
    name: 'Isabella Lee',
    gender: 'Female',
    age: 26,
    motherTongue: 'Korean',
    caste: 'OBC',
    religion: 'Christian',
    maritalStatus: 'Single',
    qualification: 'Bachelor\'s',
    occupation: 'Marketing Specialist',
    city: 'Denver',
    state: 'CO',
    email: 'isabella.lee@example.com',
    mobileNumber: '890-123-4567',
    subscriptionType: 'Annual',
    expectations: 'Looking for a committed relationship',
    subscriptionDate: '2023-08-15',
    revenue: 450,
    tax: 65
  }
];




export default function General() {
  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState(null);
  
  // Filter state
  const [filters, setFilters] = useState({
    city: '',
    motherTongue: '',
    gender: '',
    maritalStatus: '',
    age: '',
    caste: '',
    religion: '',
    qualification: '',
    occupation: '',
    subscriptionType: '',
    subscriptionDateFrom: '',
    subscriptionDateTo: '',
    revenueFrom: '',
    revenueTo: '',
    taxFrom: '',
    taxTo: ''
  });

  // Handle filter change
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [id]: value
    }));
  };

  // Filter data based on the criteria
  const filteredData = initialData.filter(data => {
    return (
      (!filters.city || data.city.toLowerCase() === filters.city.toLowerCase()) &&
      (!filters.motherTongue || data.motherTongue.toLowerCase() === filters.motherTongue.toLowerCase()) &&
      (!filters.gender || data.gender === filters.gender) &&
      (!filters.maritalStatus || data.maritalStatus === filters.maritalStatus) &&
      (!filters.age || data.age === Number(filters.age)) &&
      (!filters.caste || data.caste.toLowerCase() === filters.caste.toLowerCase()) &&
      (!filters.religion || data.religion.toLowerCase() === filters.religion.toLowerCase()) &&
      (!filters.qualification || data.qualification.toLowerCase() === filters.qualification.toLowerCase()) &&
      (!filters.occupation || data.occupation.toLowerCase() === filters.occupation.toLowerCase()) &&
      (!filters.subscriptionType || data.subscriptionType === filters.subscriptionType) &&
      (!filters.subscriptionDateFrom || new Date(data.subscriptionDate) >= new Date(filters.subscriptionDateFrom)) &&
      (!filters.subscriptionDateTo || new Date(data.subscriptionDate) <= new Date(filters.subscriptionDateTo)) &&
      (!filters.revenueFrom || data.revenue >= Number(filters.revenueFrom)) &&
      (!filters.revenueTo || data.revenue <= Number(filters.revenueTo)) &&
      (!filters.taxFrom || data.tax >= Number(filters.taxFrom)) &&
      (!filters.taxTo || data.tax <= Number(filters.taxTo))
    );
  });

  const handleProfileClick = (profile) => {
    setProfileData(profile);
    setShowModal(true);
  };

  return (
    <div className="container dashboard-container">
        <h1 style={{textAlign:"center",fontSize:"50px",color:"blueviolet"}}>Report</h1>
      <div className="row">
        {/* Filter Form */}
        <div className="col-md-3 mb-4">
          <div className="card border border-primary card-border-custom">
            <div className="card-header card-header-custom">
              <h5 className="mb-0">Filters</h5>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select id="city" className="form-control" onChange={handleFilterChange}>
                    <option value="">Select City</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="hyderabad">Hyderabad</option>
                    {/* Add options dynamically */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="motherTongue">Mother Tongue</label>
                  <select id="motherTongue" className="form-control" onChange={handleFilterChange}>
                    <option value="">Select Mother Tongue</option>
                    <option value="telugu">Telugu</option>
                    <option value="kannada">Kannada</option>
                    {/* Add options dynamically */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" className="form-control" onChange={handleFilterChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <select id="maritalStatus" className="form-control" onChange={handleFilterChange}>
                    <option value="">Select Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Engaged">Engaged</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" id="age" className="form-control" placeholder="Enter Age" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="caste">Caste</label>
                  <input type="text" id="caste" className="form-control" placeholder="Enter Caste" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="religion">Religion</label>
                  <select id="religion" className="form-control" onChange={handleFilterChange}>
                    <option value="">Select Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="christian">Christian</option>
                    <option value="muslim">Muslim</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="shinto">Shinto</option>
                    {/* Add options dynamically */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="qualification">Qualification</label>
                  <input type="text" id="qualification" className="form-control" placeholder="Enter Qualification" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <input type="text" id="occupation" className="form-control" placeholder="Enter Occupation" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subscriptionType">Type of Subscription</label>
                  <select id="subscriptionType" className="form-control" onChange={handleFilterChange}>
                    <option value="">Select Subscription Type</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Annual">Annual</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subscriptionDateFrom">Subscription Date From</label>
                  <input type="date" id="subscriptionDateFrom" className="form-control" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subscriptionDateTo">Subscription Date To</label>
                  <input type="date" id="subscriptionDateTo" className="form-control" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="revenueFrom">Revenue From</label>
                  <input type="number" id="revenueFrom" className="form-control" placeholder="Min Amount" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="revenueTo">Revenue To</label>
                  <input type="number" id="revenueTo" className="form-control" placeholder="Max Amount" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="taxFrom">Tax From</label>
                  <input type="number" id="taxFrom" className="form-control" placeholder="Min Tax" onChange={handleFilterChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="taxTo">Tax To</label>
                  <input type="number" id="taxTo" className="form-control" placeholder="Max Tax" onChange={handleFilterChange} />
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={() => setFilters(filters)}>Apply Filters</button>
              </form>
            </div>
          </div>
        </div>

        {/* Report Table */}
        <div className="col-md-9">
          <div className="card border border-secondary card-border-custom">
            <div className="card-header card-header-custom">
              <h5 className="mb-0">Report Table</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                  <thead className="table-header-custom">
                    <tr>
                      <th>Sl. No</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Mother Tongue</th>
                      <th>Caste</th>
                      <th>Religion</th>
                      <th>Marital Status</th>
                      <th>Qualification</th>
                      <th>Occupation</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Email ID</th>
                      <th>Mobile Number</th>
                      <th>Type of Subscription</th>
                      <th>Expectations and Preferences</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((data, index) => (
                      <tr key={data.id}>
                        <td>{index + 1}</td>
                        <td>
                          <a
                            href="#"
                            className="text-primary"
                            onClick={(e) => {
                              e.preventDefault();
                              handleProfileClick(data);
                            }}
                          >
                            {data.name}
                          </a>
                        </td>
                        <td>{data.gender}</td>
                        <td>{data.age}</td>
                        <td>{data.motherTongue}</td>
                        <td>{data.caste}</td>
                        <td>{data.religion}</td>
                        <td>{data.maritalStatus}</td>
                        <td>{data.qualification}</td>
                        <td>{data.occupation}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.email}</td>
                        <td>{data.mobileNumber}</td>
                        <td>{data.subscriptionType}</td>
                        <td>{data.expectations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <nav aria-label="Page navigation" className="mt-4">
                <ul className="pagination pagination-custom">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Profile Details */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content modal-content-custom">
              <div className="modal-header modal-header-custom">
                <h5 className="modal-title">Profile Details</h5>
                <button type="button" className="close text-white" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {profileData && (
                  <div>
                    <p><strong>Name:</strong> {profileData.name}</p>
                    <p><strong>Gender:</strong> {profileData.gender}</p>
                    <p><strong>Age:</strong> {profileData.age}</p>
                    <p><strong>Mother Tongue:</strong> {profileData.motherTongue}</p>
                    <p><strong>Caste:</strong> {profileData.caste}</p>
                    <p><strong>Religion:</strong> {profileData.religion}</p>
                    <p><strong>Marital Status:</strong> {profileData.maritalStatus}</p>
                    <p><strong>Qualification:</strong> {profileData.qualification}</p>
                    <p><strong>Occupation:</strong> {profileData.occupation}</p>
                    <p><strong>City:</strong> {profileData.city}</p>
                    <p><strong>State:</strong> {profileData.state}</p>
                    <p><strong>Email ID:</strong> {profileData.email}</p>
                    <p><strong>Mobile Number:</strong> {profileData.mobileNumber}</p>
                    <p><strong>Type of Subscription:</strong> {profileData.subscriptionType}</p>
                    <p><strong>Expectations and Preferences:</strong> {profileData.expectations}</p>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
