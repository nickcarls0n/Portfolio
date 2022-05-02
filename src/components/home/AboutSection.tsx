import React from "react";
import styled from "styled-components";
import Button from "../button/Button";

const AboutSection = () => {
  return (
    <div className="container">
      <div className="row">
        <TextSection>
          <h3 style={{ marginBlockStart: " 0px" }}>About</h3>
          <p>
            Throughout my career, I have lead projects in user interface design,
            web application design and development, brand identity, e-commerce
            design and implementation, illustration and art & creative
            direction.
          </p>
          <div className="row">
            <div className="col">
              <h5>I am Skilled in:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <AboutList>
                <li>Web App Development</li>
                <li>HTML / css / JavaScript</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Php</li>
              </AboutList>
            </div>
            <div className="col-6">
              <AboutList>
                <li>UI Design</li>
                <li>Brand Design</li>
                <li>Adobe Xd</li>
                <li>Photoshop</li>
                <li>Figma</li>
              </AboutList>
            </div>
          </div>
          <Button to="/about" text="More About Me" />
        </TextSection>
      </div>
    </div>
  );
};

const TextSection = styled.div.attrs({
  className: "col-md-10 offset-md-1",
})`
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  padding: 40px 40px 60px 40px;

  @media (min-width: 768px) {
    margin-bottom: -60px;
  }
`;

const AboutList = styled.ul`
  padding-left: 24px;
  color: white;
  line-height: 1.6;
`;

export default AboutSection;
