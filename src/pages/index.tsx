import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/forms/ContactForm";
import AboutSection from "../components/home/AboutSection";
import IntroSection from "../components/home/IntroSection";
import Navbar from "../components/navigation/Navbar";
import Spacer from "../components/spacer/Spacer";
import InfoSection from "../components/home/InfoSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Main>
        <IntroSection />
        <Spacer height="200px" />

        <InfoSection
          img="/img/development-home-right.png"
          title="Development"
          text="As a front-end developer I have worked on everything from ground up ecommerce website revamps to desktop app updates. I am experienced in HTML/css, JavaScript, php and have worked on projects in React, WordPress and vanilla JavaScript using both Foundation and Bootstrap frameworks. I strive to create code that is easy to maintain and easily understandable by others."
          buttonText="View Projects"
        />
        <Spacer heightSm="100px" heightLg="160px" />
        <InfoSection
          img="/img/design-home.png"
          title="Design"
          text="I have created designs for both screen and print. I work hard to create a visual experience that flows from screen to print. As a designer I have created website layouts, email campaigns, printed advertising material including flyers mailers and catalogs."
          buttonText="View Projects"
        />
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
