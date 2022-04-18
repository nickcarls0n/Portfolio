import React, { useState } from "react";
import Image from "../components/image/Image";
import Spacer from "../components/spacer/Spacer";
import Navbar from "../components/navagation/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";

const QualArc = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="accent-onlight">QUALARC MFG</h1>
            <hr />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-8">
            <Image src="img/design/qualarc/qualarc-home-full.jpg" alt="" />
          </div>
          <div className="col-lg-4">
            <h2 className="accent-onlight">The Challenge</h2>
            <p className="dark-text">
              When I joined the QualArc team I found a very out dated website,
              dated product photos and marketing material. The company needed a
              marketing face lift that would bring it’s product offering update
              without losing the brand awareness that the owner had built.
            </p>
            <PhoneMockup src="img/design/qualarc/qualarc-mobile-mockup.png" />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-4">
            <h2 className="accent-onlight">The Website</h2>
            <p className="dark-text">
              QualArc.com had not been updated in at least a decade. The
              original site was little more than an online brochure that had a
              list of product images and descriptions. My challenge was to
              create a mobile friendly e-commerce platform that would show case
              a wide verity of products while offering an easy to navigate
              interface with a seamless flow from product selection to checkout.
            </p>
          </div>
          <div className="col-lg-8">
            <Image src="img/design/qualarc/qualarc-style-guide.jpg" alt="" />
          </div>
        </div>
        <Spacer height="40px" />
        <div className="row">
          <div className="col-lg-8">
            <Image src="img/design/qualarc/qualarc-web-flow.jpg" />
          </div>
          <div className="col-lg-4">
            <h2 className="accent-onlight">UI/UX</h2>
            <p className="dark-text">
              Researching QualArc’s client base I found a wide verity of
              clientele, which made finding a specific audience difficult. The
              metrics for the original QualArc site showed most users accessed
              the site from a desktop device, but this may have more to do with
              the old site being totally unusable on a mobile device. I set out
              designing a site that used widely accepted design norms for both
              desktop and mobile devices as to not alienate any user group. The
              color pallet and typography I chose are understated in an effort
              to optimize readability while also not detracting from the product
              images. I chose to organize products and product categories
              according to product usage, this allows for intuitive navigation
              while also allowing for an expanding product line.
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

export default QualArc;
