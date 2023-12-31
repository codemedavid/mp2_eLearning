import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MainDashboard from '../pages/MainDashboard';
import Topics from '../pages/Topics';
import Lessons from '../pages/Lessons'
import AdminDashboard from '../pages/AdminDashboard';
import UpdateCoursePage from '../pages/UpdateCoursePage';
import AddTopicPage from '../pages/AddTopicPage';
import LoginPage from '../pages/LoginPage';
import Logout from '../pages/Logout';
import EnrollTopics from '../pages/EnrollTopics';
function Router() {
  return (
    <Routes>
    <Route path='/logout' element={<Logout />} />
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/enrolltopic/:id' element={<EnrollTopics />}/>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/topics/:id" element={<Topics/>} />
        <Route path='/lessons/:course_id/:id' element={<Lessons />}/>
        <Route path='/admin' element={<AdminDashboard />}/>
        <Route path='/admin/edit/:id' element={<UpdateCoursePage />}/>
        <Route path='/admin/addTopic/:id' element={<AddTopicPage />}/>
    
    </Routes>
  );
}

export default Router;
