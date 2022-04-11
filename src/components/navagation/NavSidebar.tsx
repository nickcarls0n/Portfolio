import React from "react";
import { NavLink as Link } from "react-router-dom";
import HomeIcon from "../../Svg/HomeIcon"
import DesignIcon from "../../Svg/DesignIcon";
import DevelopmentIcon from "../../Svg/DevelopmentIcon";
import AboutIcon from "../../Svg/AboutIcon"

const NavSidebar = () => {
    return (
        <div>
            <Link to="/home"><HomeIcon width={20} />Home</Link>
            <Link to="/design"><DesignIcon width={20} />Design</Link>
            <Link to="/development"><DevelopmentIcon width={20} />Development</Link>
            <Link to="/about"><AboutIcon width={20} />About</Link>
        </div>
    )
}

export default NavSidebar;