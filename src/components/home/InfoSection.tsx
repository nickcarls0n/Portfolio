import React from "react";
import styled from "styled-components";
import Spacer from "../../components/spacer/Spacer";
import Button from "../button/Button";

interface InfoSectionProps {
  img: string;
  title: string;
  text: string;
  buttonText: string;
  id?: string;
}

const InfoSection = (props: InfoSectionProps) => {
  const { img, title, text, buttonText, id } = props;
  return (
    <HomeSection img={img} id={id}>
      <div className="container">
        <div className="row">
          <TextSection>
            <h3 style={{ marginBlockStart: " 0px" }}>{title}</h3>
            <p>{text}</p>
            <Button to="/projects" text={buttonText} />
          </TextSection>
        </div>
      </div>
    </HomeSection>
  );
};

const HomeSection = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: right;
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
  background: rgba(0, 0, 0, 0.8);
  padding: 40px 40px 60px 40px;

  @media (min-width: 768px) {
    margin-bottom: -60px;
  }
`;

export default InfoSection;
