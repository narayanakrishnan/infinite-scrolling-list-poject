import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import profile from '../photos/th (1).jpg'

import { Spinner } from 'react-bootstrap';
import axios from "axios";
const Home = () => {
  const [array, setArray] = useState([]);
  
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=500`)
      if (response) {
        console.log('getData [response]-->', response.data.results)
        const data = await response.data.results;

        setArray((prevData) => [...prevData, ...data]);
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('getData [error]-->', error)
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, [])
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;

    if (scrollTop + windowHeight >= documentHeight - 200 && !isLoading) {
      getData();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div className="dashboard">
      <header className='header'>
  
        <Link className='logout'
          to='/login'
        >
          Log out
        </Link> 
      </header>
      <div>

        <div>
          
          <div className='row'>
            {array?.map((data) => (
              <div>
                <div className='card'>
                  <img src={profile} className='icon' alt="icon" />
                  <p>Name: {data.name.title + data.name.first + data.name.last}</p>
                  <p>Gender: {data.gender}</p>
                  <p>State: {data.state}</p>
                  <p>Email ID: {data.email}</p>
                </div>
                </div>
            
            ))}
          </div>
          {isLoading && <div><Spinner animation="border" /></div>}
        </div>
      </div>
    </div>
  );
};

export default Home;

