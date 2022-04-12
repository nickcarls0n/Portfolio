import React from "react";
import Navbar from "../components/navagation/Navbar";
import IntroSection from "../components/home/IntroSection";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import Button from "../components/button/Button";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main style={{ backgroundImage: `url(/img/background-dots.png)` }}>
        <IntroSection />
        <HomeSection>
          <ImgSection src="/img/design-home.png" alt="Design examples" />
          <div className="container">
            <div className="row">
              <TextSection>
                <h3>Design</h3>
                <p>
                  For over five years, I have been designing and developing
                  UI/UX, web and print solutions for small to medium-sized
                  businesses. I work hard to create visual experiences that flow
                  seamlessly from screen to page. If you are looking for a
                  designer that can offer diverse range of solutions, from UI/UX
                  design to print, please contact me.
                </p>
                <Button to="/design" text="See More" />
              </TextSection>
            </div>
          </div>
        </HomeSection>
      </main>
      <Footer />
    </>
  );
};

const HomeSection = styled.div`
  margin: 133px 0 158px 0;
  position: relative;
  height: 36.5%;
  width: 100%;
`;

const ImgSection = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
`;

const TextSection = styled.div.attrs({
  className: "col-7 offset-md-1",
})`
  background: rgba(0, 0, 0, 0.66);
`;

export default HomePage;
