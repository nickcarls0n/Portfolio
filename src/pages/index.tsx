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
      <main
        style={{
          backgroundImage: `url(/img/background-dots.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <IntroSection />
      </main>
      <HomeSection img="/img/design-home.png">
        <div className="container">
          <div className="row">
            <TextSection>
              <h3>Design</h3>
              <p>
                For over five years, I have been designing and developing UI/UX,
                web and print solutions for small to medium-sized businesses. I
                work hard to create visual experiences that flow seamlessly from
                screen to page. If you are looking for a designer that can offer
                diverse range of solutions, from UI/UX design to print, please
                contact me.
              </p>
              <Button to="/design" text="See More" />
            </TextSection>
          </div>
        </div>
      </HomeSection>
      <HomeSection img="/img/development-home.png">
        <div className="container">
          <div className="row">
            <TextSectionTwo>
              <h3>Design</h3>
              <p>
                For over five years, I have been designing and developing UI/UX,
                web and print solutions for small to medium-sized businesses. I
                work hard to create visual experiences that flow seamlessly from
                screen to page. If you are looking for a designer that can offer
                diverse range of solutions, from UI/UX design to print, please
                contact me.
              </p>
              <Button to="/design" text="See More" />
            </TextSectionTwo>
          </div>
        </div>
      </HomeSection>
      <Footer />
    </>
  );
};

const HomeSection = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-position: right;
  background-repeat: no-repeat;
  margin: 133px 0 158px 0;
  position: relative;
  width: 100%;
  height: calc(0.5 * 100vw);

  @media (min-width: 768px) {
    background-size: contain;
    height: calc(0.365 * 100vw);
  }
`;

const TextSection = styled.div.attrs({
  className: "col-md-7 offset-md-1",
})`
  position: relative;
  margin-top: 18%;
  background: rgba(0, 0, 0, 0.66);
  padding: 40px 40px 60px 40px;

  @media (min-width: 768px) {
  }
`;

const TextSectionTwo = styled.div.attrs({
  className: "col-md-7 offset-md-4",
})`
  position: relative;
  margin-top: 18%;
  background: rgba(0, 0, 0, 0.66);
  padding: 40px 40px 60px 40px;

  @media (min-width: 768px) {
  }
`;

export default HomePage;
