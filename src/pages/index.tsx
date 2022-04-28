import React from "react";
import Navbar from "../components/navagation/Navbar";
import IntroSection from "../components/home/IntroSection";
import Footer from "../components/footer/Footer";
import DandDSection from "../components/home/DandDSection";
import Spacer from "../components/spacer/Spacer";
import styled from "styled-components";
import Button from "../components/button/Button";
import ContactForm from "../components/forms/ContactForm";
import AboutSection from "../components/home/AboutSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Main>
        <IntroSection />
        <Spacer height="200px" />
        <DandDSection />
        <Spacer height="220px" />
        <AboutSection />
        {/* <div style={{ position: "relative" }}>
          <div className="container">
            <div className="row">
              <AboutImg src="/img/me-snowday.jpg" alt="" />
              <TextSection>
                <h3>About</h3>
                <p>
                  I’m Nick Carlson, a designer and front end developer.
                  Throughout my career, I have lead projects in user interface
                  design, web application design and development, brand
                  identity, e-commerce design and implementation, illustration
                  and art & creative direction.
                </p>
                <div className="row">
                  <div className="col-6">
                    <h4>Design</h4>
                    <AboutList>
                      <li>UI Design</li>
                      <li>Email Design</li>
                      <li>Adobe CC</li>
                      <li>Figma</li>
                      <li>Sketch</li>
                    </AboutList>
                  </div>
                  <div className="col-6">
                    <h4>Development</h4>
                    <AboutList>
                      <li>Web App</li>
                      <li>React</li>
                      <li>HTML / css / JavaScript</li>
                      <li>E-Commerce</li>
                      <li>Email</li>
                    </AboutList>
                  </div>
                </div>
                <Button to="/about" text="More About Me" />
              </TextSection>
            </div>
          </div>
        </div> */}
        <Spacer height="160px" />
        <div style={{ position: "relative" }}>
          <TreeBackground src="/img/home-tree.jpg" alt="background image" />
          <ContactForm />
        </div>
      </Main>

      <Footer />
    </>
  );
};

const Main = styled.main`
  background-image: url(/img/background-dots.png),
    linear-gradient(
      to bottom right,
      rgba(128, 128, 128, 0.42),
      rgba(70, 162, 159, 0.42)
    );
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 140px;
`;

const TextSection = styled.div.attrs({
  className: "col-md-7 offset-md-4",
})`
  position: relative;
  background: rgba(0, 0, 0, 0.66);
  padding: 40px 40px 60px 40px;

  @media (min-width: 768px) {
  }
`;

const AboutImg = styled.img`
  position: absolute;
  height: calc(0.365 * 100vw);
  left: 0;
  top: -60px;
  opacity: 0.89;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const AboutList = styled.ul`
  padding-left: 24px;
  color: white;
  line-height: 1.6;
`;

const TreeBackground = styled.img`
  position: absolute;
  max-height: 600px;
  top: -60px;
  right: 0;
  opacity: 0.86;
`;

export default HomePage;
