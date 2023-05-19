import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <h2>This is home component </h2>
            <h2>
                <p>hello </p>
                <img src={`https://lh3.googleusercontent.com/a/AGNmyxYw3uEDw5KfgXIwnedM_luZVREEjbxbQ1Yxm6Cl=s96-c`} alt="" />
            </h2>
        </div>
    );
};

export default Home;