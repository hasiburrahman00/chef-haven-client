import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Home/ChefCard/ChefCard';

const AllChefs = () => {
    const allChefs = useLoaderData();
    console.log(allChefs);
    return (
        <div>
            <div className='bg-[url("/images/banner.jpg")] py-20'>
                <h2 className='chef-title text-white'>Top All Chefs in South Koria </h2>
                <p className='chef-sub-title md:w-1/2 text-white '>Chef Park Min-ji, hailed as a culinary prodigy, has taken the South Korean culinary scene by storm with her exceptional talent and unique approach to cooking.</p>
            </div>
            <div className='md:grid md:grid-cols-3 gap-12 w-10/12 mx-auto mt-8'>
                {
                    allChefs.map(chef =>
                        <ChefCard
                            key={chef.id}
                            chef={chef}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default AllChefs;