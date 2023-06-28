import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/detail.css';

const Detail = () => {
  const { id } = useParams();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    const fetchStaffDetails = async () => {
      try {
        const response = await axios.get(`https://6498ffdf79fbe9bcf83e8e72.mockapi.io/staffManagement/${id}`);
        if (response.status === 200) {
          console.log(response);
          const staffData = response.data;
          setStaff(staffData);
        }
      } catch (error) {
        console.log(`Error when calling API at Detail.js: ${error}`);
      }
    };

    fetchStaffDetails();
  }, [id]);

  if (!staff) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      
      <div className="staff-details">
        <img src={staff.avatar} alt={staff.name} />
        <h2>{staff.name}</h2>
        <p>Age: {staff.age}</p>
        <p>Address: {staff.address}</p>
        <p>Created At: {staff.createdAt}</p>
      </div>
    </div>
  );
};

export default Detail;
