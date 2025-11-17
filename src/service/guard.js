import { Navigate, useLocation } from 'react-router-dom';
import ApiService from './APIService';

// Route for normal authenticated users
export const ProtectedRoute = ({ children }) => {
  const location = useLocation();

// If user is authenticated, show the protected page; else redirect to login
  return ApiService.isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};


// Route for admin users
export const AdminRoute = ({ children }) => {
  const location = useLocation();

  // If user is admin, show the admin page; else redirect to login
  return ApiService.isAdmin() ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};