import React from 'react';
import Header from '../components/mainComponents/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../components/mainComponents/dashhboard/Dashboard'
import { useNavigate } from 'react-router-dom';

const MainDashboard = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');

  if(!token){
    navigate('/login')
  }
  return (
    <div>
       <Header></Header>
      <Dashboard />
      <br />
    </div>
  );
};

export default MainDashboard;
