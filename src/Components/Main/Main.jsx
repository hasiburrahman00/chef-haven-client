import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loader from '../Loader/Loader';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
            <Loader></Loader>
        </div>
    );
};

export default Main;