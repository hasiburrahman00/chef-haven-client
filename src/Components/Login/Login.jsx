import React from 'react';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }



    return (
        <div className='bg-[url("../../../public/images/login_page.jpg")] bg-cover py-20 opacity-95'>
            <div className='bg-transparent border-2 w-96 rounded-lg mx-auto  py-12 my-20 bg-cover bg-center'>
                <h2 className='text-center text-3xl text-white font-bold my-4'>Login </h2>
                <form onSubmit={handleLogin}>
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="email" name="email" id="" placeholder='Enter Email' required />
                    <input className='my-2 px-6 py-2 rounded-md outline-0 text-black' type="password" name="password" id="" placeholder='Enter Password' required />
                    <input type="submit" value="Login" className='btn w-56 my-2' />
                </form>
            </div>
        </div>
    );
};

export default Login;