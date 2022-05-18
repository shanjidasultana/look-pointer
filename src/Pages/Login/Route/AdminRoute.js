import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth();
    let location=useLocation();
    if(isLoading){
        return <CircularProgress></CircularProgress>
    }
    if(user.email){
        return children;
    }
    return <Navigate to='/login' state={{form:location }}/>
};

export default AdminRoute;