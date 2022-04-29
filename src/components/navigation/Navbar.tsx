import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import NavSidebar from "./NavSidebar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavBar>
      <div className="container">
        <div className="row">
          <NavContent>
            <NavHomeLink to="/">Nick Carlson</NavHomeLink>
            <HamburgerMenu onClick={() => setShowNav(!showNav)}>
              {showNav ? String.fromCharCode(10005) : String.fromCharCode(9776)}
            </HamburgerMenu>
            <NavSidebar height={showNav ? "260px" : "0px"} />
          </NavContent>
        </div>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background: rgb(0, 0, 0);
  color: white;
  position: fixed;
  width: -webkit-fill-available;
  z-index: 99;
`;

const NavContent = styled.div.attrs({
  className: "col",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavHomeLink = styled(Link)`
  font-size: 18px;
  color: white;
  transition: all 300ms ease-out;

  &:hover {
    color: #66fcf1;
  }
`;

const HamburgerMenu = styled.span`
  font-size: 30px;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    color: #66fcf1;
  }
`;

export default Navbar;
