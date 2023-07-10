import React from 'react'
import AdminHeader from '../components/adminComponents/AdminHeader/AdminHeader'
import AddCourse from '../components/adminComponents/AddCourses/AddCourse'
import CourseListCard from '../components/adminComponents/UI/CourseListCard/CourseListCard'
import { Container } from 'react-bootstrap'
function AdminDashboard() {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <AddCourse />

      <Container>
      <CourseListCard />
      </Container>
    </div>
  )
}

export default AdminDashboard
