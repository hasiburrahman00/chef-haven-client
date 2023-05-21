import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { BeatLoader } from 'react-spinners';
import AcitiveLink from '../ActiveLink/AcitiveLink';

const Header = () => {

    const { user, logout, loading } = useContext(AuthContext);
    const logoutUser = () => {
        logout();
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><AcitiveLink to="/">Home</AcitiveLink></li>
                            <li><AcitiveLink to="/blog">Blog</AcitiveLink></li>
                            <li><AcitiveLink to="/all-chefs">Chefs</AcitiveLink></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-2xl" to="/">chef Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><AcitiveLink to="/">Home</AcitiveLink></li>
                        <li><AcitiveLink to="/blog">Blog</AcitiveLink></li>
                        <li><AcitiveLink to="/all-chefs">Chefs</AcitiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        loading ? <BeatLoader color="#36d7b7" /> : user ? <> {user.photoUrl}<div className="tooltip tooltip-left" data-tip={user.displayName ? user.displayName : ''}><img className={`h-12 w-12 rounded-full tooltip`} src={user?.photoURL} alt="" /></div> <Link className='btn btn-warning ms-2' to="/login" onClick={logoutUser}>Logout</Link></> :
                            <><Link className='btn btn-warning' to="/login">Login</Link>
                                <Link className="btn ms-2 btn-error" to="/register">Register</Link></>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;