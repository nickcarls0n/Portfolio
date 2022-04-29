import React from "react";
import { NavLink as Link } from "react-router-dom";
import HomeIcon from "../../Svg/HomeIcon";
import DesignIcon from "../../Svg/DesignIcon";
import DevelopmentIcon from "../../Svg/DevelopmentIcon";
import AboutIcon from "../../Svg/AboutIcon";
import styled from "styled-components";

interface NavSidbarProps {
  height?: string;
}

const NavSidebar = (props: NavSidbarProps) => {
  return (
    <SidebarWrapper height={props.height}>
      <StyledLink to="/">
        <HomeIcon width={20} />
        Home
      </StyledLink>
      <StyledLink to="/about">
        <AboutIcon width={20} />
        About
      </StyledLink>
      <StyledLink to="/projects">
        <DesignIcon width={20} />
        Projects
      </StyledLink>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div<NavSidbarProps>`
  height: ${(props) => props.height};
  width: 300px;
  position: absolute;
  z-index: 99;
  top: 40px;
  right: 0;
  background-color: #111;
  border-bottom: ${(props) => props.height != "0px" && "#66fcf1 solid 4px"};
  overflow-y: hidden;
  transition: 0.5s;

  @media screen and (min-width: 576px) {
    right: 0;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 20px;
  color: #66fcf1;
  text-decoration: none;
  font-size: 30px;
  transition: all 300ms ease-out;

  &:hover {
    color: white;
  }

  svg {
    margin-right: 20px;
  }
`;

export default NavSidebar;
