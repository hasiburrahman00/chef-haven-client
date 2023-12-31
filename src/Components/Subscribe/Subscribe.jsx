import React from 'react';
import './Subscribe.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const subscribeMsg = () => {
    toast("Subscribe Successfully")
}

const Subscribe = () => {
    return (
        <div className='py-20 text-center subscribe'>
            <div className=' md:w-1/2 mx-auto '>
                <h2 className='subscribe-title'>Subscribe to our Newsletter</h2>
                <p className='subscribe-sub-title mb-8'>Fusce id velit placerat, efficitur libero placerat, sodales ante. Curabitur sed erosat
                    orci congue vestibulum. Pellentesque habitant morbi tristique senectus.</p>
                <button onClick={subscribeMsg} className='subscribe-btn rounded-full'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;