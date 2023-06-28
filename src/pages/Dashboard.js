import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://6498ffdf79fbe9bcf83e8e72.mockapi.io/staffManagement");
      if (response.status === 200) {
        const data = response.data;
        setInfo(data);
      }
    } catch (error) {
      console.log(`Error when calling API at Dashboard.js: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteStaff = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this staff member?');
    if (confirmDelete) {
      try {
        await axios.delete(`https://6498ffdf79fbe9bcf83e8e72.mockapi.io/staffManagement/${id}`);
        setInfo((prevInfo) => prevInfo.filter((staff) => staff.id !== id));
        toast.success('Staff member deleted successfully');
      } catch (error) {
        console.log(`Error when deleting staff member: ${error}`);
        toast.error('An error occurred while deleting staff member');
      }
    }
  };
  
  

  return (
    
    <div className='dashboard'>
      <h1>Staff Members</h1>
      <table className='dashboard-info'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {info.map((staff) => (
            <tr key={staff.id}>
              <td>
                <img src={staff.avatar} alt={staff.name} />
              </td>
              <td>{staff.name}</td>
              <td>{staff.age}</td>
              <td>{staff.address}</td>
              <td>
                <Link to={`/editform/${staff.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDeleteStaff(staff.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer/>
    </div>
    
  );
};

export default Dashboard;
