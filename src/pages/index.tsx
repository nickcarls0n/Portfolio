import React from 'react';
import Navbar from '../components/navagation/Navbar';
import styled from 'styled-components';
import Footer from '../components/footer/Footer'

const HomePage = () => {
    return (
        <>
        <Navbar />
        <main  style={{backgroundImage: `url(/img/background-dots.png)`}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>This is the Home Page</h2>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

const StyledMain = styled.main`

`

export default HomePage;