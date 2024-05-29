import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoged }) => {
    return isLoged ? <Navigate to="/home" /> : children;
};

export default PrivateRoute;