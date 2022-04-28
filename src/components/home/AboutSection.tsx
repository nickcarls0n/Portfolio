import React from "react";
import Button from "../button/Button";
import Spacer from "../../components/spacer/Spacer";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <TextSection>
            <h3>About</h3>
            <p>
              I’m Nick Carlson, a designer and front end developer. Throughout
              my career, I have lead projects in user interface design, web
              application design and development, brand identity, e-commerce
              design and implementation, illustration and art & creative
              direction.
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
    </>
  );
};

const TextSection = styled.div.attrs({
  className: "col-md-10 offset-md-1",
})`
  position: relative;
  background: rgba(0, 0, 0, 0.66);
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
