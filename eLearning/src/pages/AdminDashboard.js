import React from 'react'
import AdminHeader from '../components/adminComponents/AdminHeader/AdminHeader'
import AddCourse from '../components/adminComponents/AddCourses/AddCourse'
function AdminDashboard() {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <AddCourse />
    </div>
  )
}

export default AdminDashboard
