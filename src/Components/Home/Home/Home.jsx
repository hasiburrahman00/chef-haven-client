import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Banner from '../Banner/Banner';
import RecipeCategory from '../RecipeCategory/RecipeCategory';

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <Banner></Banner>
            <RecipeCategory></RecipeCategory>
        </div>
    );
};

export default Home;