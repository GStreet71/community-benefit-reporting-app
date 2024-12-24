import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // Add user state

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData); // Set user data
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null); // Clear user data
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};