import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <FooterHeader>Connect With Me</FooterHeader>
            <FooterList>
              <li>
                <MailLink href="mailto:contactncarlson@gmail.com">
                  contactncarlson@gmail.com
                </MailLink>
              </li>
            </FooterList>
            <a
              href="https://www.linkedin.com/in/ncarlsondesign/"
              target="_blank"
            >
              <SocialIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/nickcarls0n" target="_blank">
              <SocialIcon icon={faGithubSquare} />
            </a>
          </div>
          <div className="col-lg-4">
            <FooterHeader>Navigation</FooterHeader>
            <FooterList>
              <li>
                <FooterLink to="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink to="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink to="/projects">Projects</FooterLink>
              </li>
            </FooterList>
          </div>
          <div className="col-lg-4">
            <FooterHeader>Good Design</FooterHeader>
            <p>
              Good design is a matter of discipline. It starts by looking at the
              problem and collecting all the available information about it. If
              you understand the problem, you have the solution. It’s really
              more about logic than imagination.
            </p>
            <strong>-Massimo Vignelli</strong>
          </div>
        </div>
        <div className="row">
          <FooterCopyright>
            <p>
              &copy; <span id="ncd-year">{new Date().getFullYear()}</span>{" "}
              Nicholas Carlson
            </p>
          </FooterCopyright>
        </div>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  background-color: #202833;
  color: white;
  padding: 80px 0px 20px 0px;
`;

const FooterHeader = styled.h4`
  color: white;
`;

const FooterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.8;
`;

const MailLink = styled.a`
  color: white;
  transition: all 300ms ease-out;

  &:hover {
    color: #66fcf1;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  transition: all 300ms ease-out;

  &:hover {
    color: #66fcf1;
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 29px;
  padding: 18px 18px 0px 0px;
  color: white;
  transition: all 300ms ease-out;

  &:hover {
    color: #66fcf1;
  }
`;

const FooterCopyright = styled.div.attrs({
  className: "col",
})`
  margin-top: 60px;
  text-align: center;
  font-size: 12px;
`;

export default Footer;
