import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MainDashboard from '../pages/MainDashboard';
import Topics from '../pages/Topics';
import Lessons from '../pages/Lessons'
import AdminDashboard from '../pages/AdminDashboard';
import UpdateCourse from '../components/adminComponents/EditCourse/UpdateCourse'
function Router() {
  return (
    <Routes>
  
        <Route path="/" element={<MainDashboard />} />
        <Route path="/topics/:courseId" element={<Topics/>} />
        <Route path='/lessons/:topicId' element={<Lessons />}/>
        <Route path='/admin' element={<AdminDashboard />}/>
        <Route path='/admin/edit/:id' element={<AdminDashboard />}/>
    
    </Routes>
  );
}

export default Router;
