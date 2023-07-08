import React from 'react';
import Header from '../components/mainComponents/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../components/mainComponents/dashhboard/Dashboard'

const MainDashboard = () => {
  return (
    <div>
       <Header></Header>
      <Dashboard />
      <br />
    </div>
  );
};

export default MainDashboard;
