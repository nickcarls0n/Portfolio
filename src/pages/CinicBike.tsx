import React, { useState } from "react";
import Image from "../components/image/Image";
import Spacer from "../components/spacer/Spacer";
import Navbar from "../components/navagation/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";

const CinicBike = () => {
  return (
    <>
      <Navbar />
      <Spacer height="100px" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="accent-onlight">Cinic Bike Gear</h1>
            <hr />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-8">
            <Image src="img/design/cinic/cinic-web-mockup-2.jpg" alt="" />
          </div>
          <div className="col-lg-4">
            <h2 className="accent-onlight">The Challenge</h2>
            <p className="dark-text">
              Cinic Bike Gear is a small mountain bike start up with ambitions
              to grow big. The brand needed a logo, web and e-commerce platform
              as well as printed material and apparel designs.
            </p>
            <PhoneMockup src="img/design/cinic/cinic-phone-mockup.png" />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-4">
            <h2 className="accent-onlight">Logo & Style</h2>
            <p className="dark-text">
              After researching the current mountain biking industries as well
              as a range of action sports such as motocross and skate boarding.
              I designed a number of logo iterations that were narrowed down to
              a single logo type that would be fitting on a wide range of
              products. I also came up with a color pallet that could be used
              online as well as on the first season of apparel.
            </p>
          </div>
          <div className="col-lg-8">
            <Image src="img/design/cinic/cinic-web-style.jpg" alt="" />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-8">
            <Image src="img/design/cinic/cinic-wireframe.jpg" alt="" />
          </div>
          <div className="col-lg-4">
            <h2 className="accent-onlight">Ui/UX</h2>
            <p className="dark-text">
              As a small startup Cinic needed an online store that would be give
              them room for product growth as well as offer the ability to
              become an information hub for the company. I built a custom theme
              for WordPress. I am using a plugin to handdle the transaction and
              I have included a blog section that is linked to Cinic’s social
              media for product updates for a one stop marketing hub.{" "}
            </p>
            <h2 className="accent-onlight">Tools</h2>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Premiere</li>
              <li>Adobe AfterEffects</li>
              <li>Wordpress</li>
              <li>HTML/css</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-6">
            <iframe
              src="https://www.youtube.com/embed/dmfVhVT1jjw?controls=0"
              frameBorder={0}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
          <div className="col-lg-6">
            <Image
              src="img/design/cinic/disobey-shirt-fb-ad.jpg"
              alt="Cinic Facebook shirt ad"
            />
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
    top: 400px;
    right: 40%;
    width: 120%;
    max-width: 488px;
  }
`;

export default CinicBike;
