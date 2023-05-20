import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[url("./images/footer.jpg")] text-white py-20'>
            <div className='md:flex w-10/12 mx-auto justify-between	'>
                <div className='md:w-2/6 mb-12 md:mb-0'>
                    <h2 className='text-2xl font-bold mb-2 md:mb-8'>Subscribe</h2>
                    <p className='text-[#B5B7BA]'>Register and get notified about all the news & updates before it gets too late.</p>
                    <div className='flex gap-2 mt-4 md:mt-12'>
                        <input type="text" placeholder="Your Email" className="input input-bordered input-secondary w-2/3 focus:outline-0 max-w-xs" />
                        <button className="btn btn-warning">Sign Up</button>
                    </div>
                </div>
                <div className='mb-12 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2 md:mb-8'>Explore</h3>
                    <ul className='text-[#B5B7BA]'>
                        <li className='my-2'><Link>Browse Recipe</Link></li>
                        <li className='my-2'><Link>Submit Recipe</Link></li>
                        <li className='my-2'><Link>Out Chefs</Link></li>
                        <li className='my-2'><Link>Letest News</Link></li>
                        <li className='my-2'><Link>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-2 md:mb-8'>Contact</h2>
                    <p className='text-[#B5B7BA] my-4 flex gap-2 items-center'><MdLocationOn className='text-xl text-[#fbbd23ff]'/> 787 Mark View Street,
                        New Town, California</p>
                    <p className='text-[#B5B7BA] my-4 flex gap-2 items-center'><CiMail className='text-[#fbbd23ff] text-xl'/> needhelp@chefhaven.com</p>
                    <p className='text-[#B5B7BA] my-2 flex gap-2 items-center'><BsTelephone className='text-xl text-[#fbbd23ff]' /> 01518982779</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;