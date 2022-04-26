import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

interface LinkTextProps {
  isExternal?: boolean;
  text?: string;
  link?: string;
  style?: any;
}

const LinkText = (props: LinkTextProps) => {
  const { isExternal, text, link = "/", style } = props;
  return (
    <div style={style}>
      {isExternal ? (
        <StyledLink as="a" href={link} target="_blank">
          {text} <span>{`>`}</span>
        </StyledLink>
      ) : (
        <StyledLink to={link}>
          {text} <span>{`>`}</span>
        </StyledLink>
      )}
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #46a29f;
  transition: all 300ms ease-out;

  span {
    transition: all 300ms ease-out;
  }

  &:hover {
    color: #66fcf1;

    span {
      margin-left: 6px;
    }
  }
`;

export default LinkText;
