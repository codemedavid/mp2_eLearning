import React from 'react';
import Header from '../components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../components/dashhboard/Dashboard';

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
