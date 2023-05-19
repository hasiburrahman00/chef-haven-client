import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {

    const chefData = useLoaderData();
    console.log(chefData);

    return (
        <div>
            <img className='h-60 w-60 ' src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="" />
        </div>
    );
};

export default ChefDetails;