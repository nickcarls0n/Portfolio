import React from "react";
import NavSidebar from "./NavSidebar";
import styled from 'styled-components'
import { useState } from "react";



const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    return(
        <NavBar>
            <div className="container">
                <NavContent>
                    <p>Nick Carlson</p>
                    <img src="/img/hal.png" alt="Hal is watching you" width={30} height={30} />
                    <HamburgerMenu onClick={() => setShowNav(!showNav)}>&#9776;</HamburgerMenu>
                    {showNav && <NavSidebar />}
                </NavContent>
            </div>
        </NavBar>
    )
}

export default Navbar;

const NavBar = styled.nav`
    background: rgb(0, 0, 0);
    color: white;
`

const NavContent = styled.div.attrs({
    className: "row"
})`
    justify-content: space-between;
    align-items: center;
`

const HamburgerMenu = styled.span`
    font-size: 30px;
    cursor: pointer;
    transition: all 200ms ease-out;

    &:hover {
        color: #66FCF1;
    }
`