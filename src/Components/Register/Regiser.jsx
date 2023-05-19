import React, { useContext, useState } from 'react';
import AuthProvider, { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Regiser = () => {

    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');

    const hangleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6) {
            setError('Your password have to longer then 6 character')
            return
        }


        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                form.reset();
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className='bg-[url("../../../public/images/login_page_2.jpg")] bg-cover py-20 opacity-95 rounded-md'>
            <div className='bg-slate-500  w-96 rounded-lg mx-auto py-12 bg-cover bg-center'>
                <h2 className='text-center text-3xl text-white font-bold mb-8'>Register </h2>
                <form onSubmit={hangleRegister}>
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="text" name="name" id="" placeholder='Enter name' required />
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="email" name="email" id="" placeholder='Enter Email' required />
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="password" name="password" id="" placeholder='Enter Password' required />
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="text" name="photo_url" id="" placeholder='Enter photo url' required />
                    <input type="submit" value="Register" className='btn w-56 my-2' />
                </form>
                <p className='text-red-800 font-bold'>{error}</p>
                <p className='text-white'>Already a user ?  <Link className='underline ' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Regiser;