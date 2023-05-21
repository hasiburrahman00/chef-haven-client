import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { loginUser, loginUsingGoogle, loginUsingGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname;
    console.log(from);


    const handleLogin = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                navigate(from || '/');
                toast("Login Successfully");
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const googleLogin = () => {
        loginUsingGoogle()
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                navigate(from || '/');
                toast("Login Account Successfully");
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const githubLogin = () => {
        loginUsingGithub()
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                navigate(from || '/');
                toast("Login Account Successfully");
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className='bg-[url("../../../public/images/login_page.jpg")] bg-cover py-20 opacity-95 rounded-lg text-center'>
            <div className='bg-transparent border-2 w-96 rounded-lg mx-auto  py-12 my-20 bg-cover bg-center bg-slate-900'>
                <h2 className='text-center text-3xl text-white font-bold my-4'>Sign in to Account </h2>
                <form onSubmit={handleLogin}>
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="email" name="email" id="" placeholder='Enter Email' required />
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="password" name="password" id="" placeholder='Enter Password' required />
                    <input type="submit" value="Login" className='btn w-56 my-2' />
                </form>
                <p className='text-red-800 font-bold'>{error}</p>

                <p className='text-white'>Not registered yet? <Link className='text-green-400' to="/register">create account</Link></p>
                <div className='my-6'>
                    <p className='text-white'>OR</p>
                    <button onClick={googleLogin} className="btn btn-error  rounded-xl text-white py-2 px-12 my-2">Login with Google</button>
                    <button onClick={githubLogin} className="btn btn-warning rounded-xl text-white py-2 px-12 my-2">Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;