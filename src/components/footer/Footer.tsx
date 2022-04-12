import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrap>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <FooterHeader>Connect With Me</FooterHeader>
                        <FooterList>
                            <li>Nicholas Carlson</li>
                            <li>Folsom, CA</li>
                            <li>Ph: 916-936-6238</li>
                            <li>contactncarlson@gmail.com</li>
                         </FooterList>
                         <a href="https://www.linkedin.com/in/ncarlsondesign/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <FooterHeader>Navigation</FooterHeader>
                        <FooterList>
                            <li><FooterLink to="/home">Home</FooterLink></li>
                            <li><FooterLink to="/design">Design</FooterLink></li>
                            <li><FooterLink to="/development">Development</FooterLink></li>
                            <li><FooterLink to="/about">About</FooterLink></li>
                        </FooterList>
                    </div>
                    <div className="col-lg-4">
                        <FooterHeader>Good Design</FooterHeader>
                        <p>Good design is a matter of discipline. It starts by looking at the problem and collecting all the available information about it. If you understand the problem, you have the solution. It’s really more about logic than imagination.</p>
                        <strong>-Massimo Vignelli</strong>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <p>&copy; <span id="ncd-year">{new Date().getFullYear()}</span> Nicholas Carlson Design & Photography</p>
                    </div>
                    <div className="col-lg-2">
                        <FooterLink to=""><p>Site Map</p></FooterLink>
                    </div>
                </div>
            </div>
        </FooterWrap>
    )
}

const FooterWrap = styled.footer`
    background-color: #202833;
    color: white;
    padding: 80px 0px;
`

const FooterHeader = styled.h4`
    padding-bottom: 37px;
    color: white;
`

const FooterList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    line-height: 1.8;        
`

const FooterLink = styled(Link)`
    color: white;
    transition: all 300ms ease-out;

    &:hover {
        color: #66FCF1;
    }
`

export default Footer;