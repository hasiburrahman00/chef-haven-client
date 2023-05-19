import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Banner from '../Banner/Banner';

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;