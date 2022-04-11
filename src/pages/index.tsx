import React from 'react';
import Navbar from '../components/navagation/Navbar';

const HomePage = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="row">
                <h2>This is the Home Page</h2>
            </div>
        </div>
        </>
    )
};

export default HomePage;