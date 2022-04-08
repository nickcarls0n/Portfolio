import React from "react";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <Link to="/design">Design</Link>
            <Link to="/development">Development</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Navbar;