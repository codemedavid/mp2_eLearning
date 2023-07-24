import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAdminUser } from '../utils/auth';

const ProtectedRoute = ({ path, element: Element }) => {
  return isAdminUser() ? <Route path={path} element={<Element />} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
