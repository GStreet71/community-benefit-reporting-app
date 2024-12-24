import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import your AuthContext hook

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth(); // Access authentication state

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return <Outlet />; // Render the child components if authenticated
};

export default PrivateRoute;