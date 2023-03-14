import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
            {/* <h1>This is main</h1> */}
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;