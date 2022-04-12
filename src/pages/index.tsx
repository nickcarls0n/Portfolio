import React from 'react';
import Navbar from '../components/navagation/Navbar';
import styled from 'styled-components';
import Footer from '../components/footer/Footer'

const HomePage = () => {
    return (
        <>
        <Navbar />
        <main  style={{backgroundImage: `url(/img/background-dots.png)`}}>
            <IntroSection>
            <TreeBackground src="/img/home-tree.jpg" alt="background image" />
                <div className="container">
                    <div className="row">
                        <TextWrapper className="col-9 offset-md-1">
                            <div>
                                <h1>Nick<br />Carlson</h1>
                                <h4 className="white-text">Designing for the Future - <span className="highlight-text">UI/UX, Web, Development</span></h4>
                                <p>Your story has a future, the only way to know what the future will hold is to create it. I strive to connect clients with their customer base through UI/UX design, web design, photography, email marketing, print advertising and brand development, but most of all. I truly feel that the work I do for people is the most important part of their story.  Together, we can create a story worth telling.</p>
                            </div>
                            <VerticalText>
                                <p>Designer <span className="highlight-text">/</span> Developer <span className="highlight-text">/</span> Photographer</p>
                            </VerticalText>
                            <ScrollDown>
                                <a href="#scroll">
                                    <b> &larr; Scroll <span className="highlight-text">Down</span></b>
                                </a>
                            </ScrollDown>
                        </TextWrapper>
                    </div>
                </div>
                
            </IntroSection>
        </main>
        <Footer />
        </>
    )
}

const IntroSection = styled.div`
    background-color: #202833;
    z-index: -1;
`

const TextWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5);
    height: 625px;
    position: relative;
    top: 37px;
    padding: 37px;
`

const VerticalText = styled.div`
    position: absolute;
    left: -280px;
    top: 420px;
    transform: rotate(-90deg);
    font-size: 23px;
`

const ScrollDown = styled.div`
    position: absolute;
    left: 10px;
    top: 550px;
    transform: rotate(-90deg);
    z-index: 300;

    a {
        color: white;
        text-decoration: none;
    }
`

const TreeBackground = styled.img`
    position: absolute;
    top: 133px;
    right: 0;
    opacity: 0.86;
`

export default HomePage;