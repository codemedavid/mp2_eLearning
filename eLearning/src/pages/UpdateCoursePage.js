import React, {useEffect} from 'react'
import AdminHeader from '../components/adminComponents/AdminHeader/AdminHeader'
import UpdateCourse from '../components/adminComponents/EditCourse/UpdateCourse'
import { useNavigate } from 'react-router-dom';
function UpdateCoursePage() {
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
      <AdminHeader></AdminHeader>
      <UpdateCourse></UpdateCourse>
    </div>
  )
}

export default UpdateCoursePage
