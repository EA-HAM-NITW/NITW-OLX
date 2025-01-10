
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContexts';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { userLoggedIn } = useAuth();

    return userLoggedIn ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
