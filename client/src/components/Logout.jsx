import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://libraryapi-server3.onrender.com/auth/logout', { withCredentials: true })
      .then(res => {
        if (res.data.logout) {
          setRole('');
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }, [navigate, setRole]);

  return null; // Or a loading spinner/message if you prefer
};

export default Logout;
