import React from "react";
import Button from "../button/Button";
import Spacer from "../../components/spacer/Spacer";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <>
      <HomeSection img="/img/development-home.png" imgSide="left">
        <div className="container" id="dev-section">
          <div className="row">
            <TextSectionTwo>
              <h3>Development</h3>
              <p>
                As a front-end developer I have worked on everything from ground
                up ecommerce website revamps to desktop app updates. I am
                experienced in HTML/css, JavaScript, php and have worked on
                projects in React, WordPress and vanilla JavaScript using both
                Foundation and Bootstrap frameworks. I strive to create code
                that is easy to maintain and easily understandable by others.
              </p>
              <Button to="/projects" text="View Projects" />
            </TextSectionTwo>
          </div>
        </div>
      </HomeSection>
    </>
  );
};

const HomeSection = styled.div<{ img: string; imgSide: string }>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: ${(props) => props.imgSide};
  position: relative;
  display: flex;
  align-items: end;
  width: 100%;

  @media (min-width: 768px) {
    background-size: contain;
    height: calc(0.365 * 100vw);
  }
`;

const TextSection = styled.div.attrs({
  className: "col-md-7 offset-md-1",
})`
  position: relative;
  background: rgba(0, 0, 0, 0.66);
  padding: 40px 40px 60px 40px;

  @media (min-width: 768px) {
    margin-bottom: -60px;
  }
`;

const TextSectionTwo = styled.div.attrs({
  className: "col-md-7 offset-md-4",
})`
  position: relative;
  background: rgba(0, 0, 0, 0.66);
  padding: 40px 40px 60px 40px;

  @media (min-width: 768px) {
    margin-bottom: -60px;
  }
`;

export default AboutSection;
