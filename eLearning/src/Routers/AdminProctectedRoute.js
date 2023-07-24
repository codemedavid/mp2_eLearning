import React from 'react';
import { Navigate } from 'react-router-dom';

// Import the isAdminUser function from your auth.js file
import { isAdminUser } from '../utils/auth';

const AdminProtectedRoute = ({ element: Element }) => {
  return isAdminUser() ? <Element /> : <Navigate to="/login" />;
};

export default AdminProtectedRoute;
