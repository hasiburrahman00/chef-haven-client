import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import './ExpChef.css';
import { Link } from 'react-router-dom';

const ExpChef = () => {
    const [experianceChef, setExperianceChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/experianced')
            .then(res => res.json())
            .then(data => setExperianceChef(data))
    }, [])

    return (
        <div className='py-20'>
            <h2 className='chef-title'>Top Six Chefs in South Koria </h2>
            <p className='chef-sub-title md:w-1/2'>Chef Park Min-ji, hailed as a culinary prodigy, has taken the South Korean culinary scene by storm with her exceptional talent and unique approach to cooking.</p>
            <div className='md:grid md:grid-cols-3 gap-12 w-10/12 mx-auto mt-8'>
                {
                    experianceChef.map((chef) => <ChefCard
                        id={chef?.id}
                        chef={chef}

                    />)
                }
            </div>
            <div className='text-center mt-8'>
                <Link className="btn btn-warning">Load More</Link>
            </div>
        </div>
    );
};

export default ExpChef;