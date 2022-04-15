import React from "react";
import styled from "styled-components";

interface ModalProps {
  showModal?: boolean;
  img?: string;
  title?: string;
  about?: string;
  link?: string;
  linkText?: string;
  onClick?: () => void;
}

const Modal = ({
  showModal,
  img = "img/design/mailkeeper-web-mockup.jpg",
  title,
  about,
  link,
  linkText,
  onClick,
}: ModalProps) => {
  return (
    <ModalWrapper
      style={{ display: showModal ? "block" : "none" }}
      onClick={onClick}
    >
      <div className="container">
        <div className="row">
          <ModalCol>
            <Close>&#x02A2F;</Close>
            <ModalImg src={img} alt="Some alt text" />
            <h4>{title}</h4>
            <p>{about}</p>
            <ModalLink href={link}>{linkText}</ModalLink>
          </ModalCol>
        </div>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  z-index: 3;
  padding: 100px 0px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);

  @media (min-width: 768px) {
    padding: 100px 60px 60px 60px;
  }
`;

const ModalCol = styled.div.attrs({
  className: "col",
})`
  display: flex;
  flex-direction: column;
`;

const Close = styled.span.attrs({
  className: "white-text",
})`
  font-size: 30px;
  align-self: flex-end;
  cursor: pointer;
`;

const ModalImg = styled.img`
  align-self: center;
  width: 100%;

  @media (min-width: 768px) {
    max-height: 400px;
    width: auto;
  }
`;

const ModalLink = styled.a`
  color: #66fcf1;
  transition: all 300ms ease-out;

  &:hover {
    color: #46a29f;
  }
`;

export default Modal;
