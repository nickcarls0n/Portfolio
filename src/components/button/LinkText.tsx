import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

interface LinkTextProps {
  isExternal?: boolean;
  text?: string;
  link?: string;
}

const LinkText = (props: LinkTextProps) => {
  const { isExternal, text, link = "/" } = props;
  return (
    <>
      <StyledLink to={link}>
        See More <span>{`>`}</span>
      </StyledLink>
    </>
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
