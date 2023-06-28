import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css"
const Home = () => {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://6498ffdf79fbe9bcf83e8e72.mockapi.io/staffManagement"); 
      if (response.status === 200) {
        console.log(response)
        const data = response.data;
        setInfo(data);
      }
    } catch (error) {
      console.log(`Error when calling API at Home.js: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='home'>
      <ul className='home-info'>
        {info.map((staff) => (
          <li key={staff.id}>
            <div className="staff-info">
              <img src={staff.avatar} alt={staff.name} />
              <h2>{staff.name}</h2>
              <p>Age: {staff.age}</p>
              <p>Address: {staff.address}</p>
              <Link to={`/detail/${staff.id}`}>
                <button>Details</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
