import React, { useState } from "react";
import Image from "../components/image/Image";
import Spacer from "../components/spacer/Spacer";
import Navbar from "../components/navagation/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import LinkText from "../components/button/LinkText";

const Cha = () => {
  return (
    <>
      <Navbar />
      <Spacer height="100px" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="accent-onlight">COMMERCIAL & HOME ACCESSORIES</h1>
            <hr />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-8">
            <Image src="img/design/cha/cha-full-site.jpg" alt="" />
          </div>
          <div className="col-lg-4">
            <h2 className="accent-onlight">The Challenge</h2>
            <p className="dark-text">
              Commercial & Home Accessories, an online retailer of mailbox,
              street signs and outdoor home items, needed a way to inform and
              advertise their expanding installation services to Northern
              California clients. The company also needed me to design and
              develop a series of email marketing campaigns.{" "}
              <span className="accent-onlight">PLEASE NOTE:</span> I am no
              longer maintaining this site and there maybe changes from the
              images on this page.
            </p>
            <LinkText
              text="The Site"
              link="https://mailboxspecialties.com/"
              style={{ marginTop: "20px" }}
              isExternal
            />
            <PhoneMockup src="img/design/cha/cha-install-iphone-mockup.png" />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-4">
            <h2 className="accent-onlight">Style</h2>
            <p className="dark-text">
              As an existing e-retailer, Commercial & Home Accessories had a
              number of established style points that needed to be adhered to.
              In designing the website I needed to create a site that is
              visually appealing and showcases the high level of quality that
              Commercial & Home Accessories is known for. I worked directly with
              the owner to come up with a number of design iterations that fit
              the company needs. Important considerations included a list of
              services, an image gallery of completed work as well as a frequent
              asked question page. Developing the site I chose to not use a CMS
              in order to avoid maintenance cost and security issues that come
              with using a CMS. I was able to develop a fast performing
              application that is easily searched.
            </p>
          </div>
          <div className="col-lg-8">
            <Image src="img/design/cha/cha-styletile.jpg" alt="" />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-4">
            <Image src="img/design/cha/cha-drawing-mockup.png" />
          </div>
          <div className="col-lg-4">
            <Image src="img/design/cha/cha-mockup-1.jpg" />
          </div>
          <div className="col-lg-4">
            <Image src="img/design/cha/cha-mockup-2.jpg" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Image src="img/design/cha/upgrade-icon.png" />
          </div>
          <div className="col-lg-4">
            <Image src="img/design/cha/service-map.png" />
          </div>
          <div className="col-lg-4">
            <Image src="img/design/cha/planning-icon.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <h2 className="accent-onlight">Email Marketing</h2>
            <p className="dark-text">
              In addition to designing and developing the Commercial & Home
              Accessories’ website I also was involved in a number of email
              marketing campaigns. Using the style guide from their website, I
              designed and developed various email advertising blasts. The
              interactive links in the emails allow the user to access products
              on the main site while also being readable should the user chose
              not to load images.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Image src="img/design/cha/cha-branded-plaques.jpg" />
          </div>
          <div className="col-lg-4">
            <Image src="img/design/cha/cha-catalog.jpg" />
          </div>
          <div className="col-lg-4">
            <Image src="img/design/cha/cha-mailbox.jpg" />
          </div>
        </div>
      </div>

      <Spacer height="100px" />
      <Footer />
    </>
  );
};

const PhoneMockup = styled.img`
  width: 100%;

  @media (min-width: 992px) {
    position: absolute;
    top: 460px;
    right: 40%;
    width: 120%;
    max-width: 488px;
  }
`;

export default Cha;
