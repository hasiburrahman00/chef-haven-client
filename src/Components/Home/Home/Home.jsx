import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Banner from '../Banner/Banner';
import RecipeCategory from '../RecipeCategory/RecipeCategory';
import Subscribe from '../../Subscribe/Subscribe';
import { BeatLoader } from 'react-spinners';
const ExpChef = React.lazy(() => import("../ExpChef/ExpChef"))
// import ExpChef from '../ExpChef/ExpChef'

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <Banner></Banner>
            <RecipeCategory></RecipeCategory>
            <Subscribe></Subscribe>
            <Suspense fallback={<BeatLoader color="#36d7b7" />}>
                <ExpChef></ExpChef>
            </Suspense>

        </div>
    );
};

export default Home;