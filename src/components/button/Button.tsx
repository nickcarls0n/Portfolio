import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  to?: string;
  text?: string;
  type?: "button" | "reset" | "submit";
  style?: {};
}

const Button = (props: ButtonProps) => {
  const { to = "/", text, type, style } = props;
  return (
    <>
      {type ? (
        <StyledButton as="button" style={style} type={type}>
          {text}
        </StyledButton>
      ) : (
        <StyledButton to={to} style={style}>
          {text}
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled(Link)`
  position: relative;
  display: inline-block;
  background: none;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
  margin-top: 1em;
  border: 0.2em solid #66fcf1;
  padding: 0.5em 1em;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #4d4d4d;
    height: 0.3em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #4d4d4d;
    height: 0.3em;
    left: 20%;
    bottom: -0.25em;
    transform: skewX(45deg);
    -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover {
    color: #46a29f;
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }
`;

export default Button;
