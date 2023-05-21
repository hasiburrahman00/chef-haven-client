import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className=' banner'>
            <div className='float-right md:pe-40 text-left'>
                <h2 className='banner-title'>It is even better than <br /> an expensive cookery book</h2>
                <h5 className='banner-subtitle mt-8'>Learn how to make your favorite restaurant’s dishes</h5>
                <div className='banner-button-search'>
                    <input className='banner-input' type="text" name="" id=""  placeholder='I want to make ...'/>
                    <button className='banner-button'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

