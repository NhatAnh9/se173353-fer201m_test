import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [staff, setStaff] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(`https://6498ffdf79fbe9bcf83e8e72.mockapi.io/staffManagement/${id}`);
        if (response.status === 200) {
          const data = response.data;
          setStaff(data);
        }
      } catch (error) {
        console.log(`Error when calling API at Detail.js: ${error}`);
      }
    };

    fetchStaff();
  }, [id]);

  if (!staff) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <h2>{staff.name}</h2>
      <p>Age: {staff.age}</p>
      <p>Address: {staff.address}</p>
      <p>Created Date: {staff.createdAt}</p>
      <img src={staff.image} alt={staff.name} />
    </div>
  );
};

export default Detail;
