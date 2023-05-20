import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Banner from '../Banner/Banner';
import RecipeCategory from '../RecipeCategory/RecipeCategory';
import ExpChef from '../ExpChef/ExpChef';
import Subscribe from '../../Subscribe/Subscribe';

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <Banner></Banner>
            <RecipeCategory></RecipeCategory>
            <Subscribe></Subscribe>
            <ExpChef></ExpChef>
        </div>
    );
};

export default Home;