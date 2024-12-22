import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import your AuthContext hook

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Access authentication state

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render the child components if authenticated
};

export default PrivateRoute;