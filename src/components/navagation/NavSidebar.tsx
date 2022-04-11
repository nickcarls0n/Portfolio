import React from "react";
import { NavLink as Link } from "react-router-dom";
import HomeIcon from "../../Svg/HomeIcon"
import DesignIcon from "../../Svg/DesignIcon";
import DevelopmentIcon from "../../Svg/DevelopmentIcon";
import AboutIcon from "../../Svg/AboutIcon"
import styled from "styled-components";

const NavSidebar = () => {
    return (
        <SidebarWrapper>
            <StyledLink to="/home"><HomeIcon width={20} />Home</StyledLink>
            <StyledLink to="/design"><DesignIcon width={20} />Design</StyledLink>
            <StyledLink to="/development"><DevelopmentIcon width={20} />Development</StyledLink>
            <StyledLink to="/about"><AboutIcon width={20} />About</StyledLink>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
    height: 100%
    width: 350px
    position: fixed
    z-index: 100
    top: 0
    left: 0
    background-color: #111
    overflow-x: hidden
    transition: 0.5s
    padding-top: 60px

    @media screen and (min-width: 576px) {
        right: 0;
    }
`

const StyledLink = styled(Link)`
    display: block;
    padding: 20px;
    color: #66FCF1;
    text-decoration: none;
    font-size: 30px;
    transition: all 300ms ease-out;


    &:hover {
        color: white;
    }

    svg {
        margin-right: 20px;
    }
`

export default NavSidebar;