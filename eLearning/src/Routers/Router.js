import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDashboard from '../pages/MainDashboard';
import Topics from '../pages/Topics';
import Lessons from '../pages/Lessons'
import AdminHeader from '../components/adminComponents/AdminHeader/AdminHeader';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />
      <Route path="/topics/:courseId" element={<Topics/>} />
      <Route path='/lessons/:topicId' element={<Lessons />}/>
      <Route path='/admin' element={<AdminHeader />}/>
    </Routes>
  );
}

export default Router;
