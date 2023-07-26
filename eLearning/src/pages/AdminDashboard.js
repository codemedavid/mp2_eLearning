import React, { useEffect } from 'react';
import AdminHeader from '../components/adminComponents/AdminHeader/AdminHeader';
import AddCourse from '../components/adminComponents/AddCourses/AddCourse';
import CourseListCard from '../components/adminComponents/UI/CourseListCard/CourseListCard';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check the userType in localStorage
    const userType = localStorage.getItem('userType');

    // If userType is not "admin", redirect to the logout page or any other appropriate page
    if (userType !== 'instructor') {
      navigate('/login'); // Replace '/logout' with the appropriate logout page URL
    }
  }, []);

  return (
    <div>
      <AdminHeader />
      <AddCourse />

      <Container>
        <CourseListCard />
        <br />
      </Container>
    </div>
  );
}

export default AdminDashboard;
