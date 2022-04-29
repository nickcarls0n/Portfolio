import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/forms/ContactForm";
import AboutSection from "../components/home/AboutSection";
import DandDSection from "../components/home/DandDSection";
import IntroSection from "../components/home/IntroSection";
import Navbar from "../components/navigation/Navbar";
import Spacer from "../components/spacer/Spacer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Main>
        <IntroSection />
        <Spacer height="200px" />
        <DandDSection />
        <Spacer height="160px" />
        <AboutSection />
        <Spacer height="220px" />
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

const TreeBackground = styled.img`
  position: absolute;
  max-height: 600px;
  top: -60px;
  right: 0;
  opacity: 0.86;
`;

export default HomePage;
