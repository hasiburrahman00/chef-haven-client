import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { BeatLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location)

    if (loading) {
        return <BeatLoader color="#36d7b7" />
    }
    if (user) {
        return <div>{children}</div>
    }

    return <Navigate state={{from:location}} to='/login' replace></Navigate>

    
};

export default PrivateRoute;