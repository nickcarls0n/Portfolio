import React from "react";
import Navbar from "../components/navagation/Navbar";
import { NavLink as Link } from "react-router-dom";
import Image from "../components/image/Image";
import styled from "styled-components";
import GalleryImage from "../components/image/GalleryImage";
import Footer from "../components/footer/Footer";

const Design = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Case Studies</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Image
              src="img/design/Cinic-Web-Mockup.jpg"
              alt="Cinic Bike Gear web mockup"
            />
            <h3>Cinic Bike Gear</h3>
            <ul>
              <li>E-commerce</li>
              <li>Brand Identity</li>
              <li>UI/UX Design</li>
              <li>Wordpress Development</li>
            </ul>
            <Link to="">See More &#8594;</Link>
          </div>
          <div className="col-md-4">
            <Image
              src="img/design/cha-install-mockup.jpg"
              alt="Commercial Home web mockup"
            />
            <h3>Commercial Home</h3>
            <ul>
              <li>Business Website</li>
              <li>UI/UX Design</li>
              <li>Development</li>
              <li>Email Marketing</li>
            </ul>
            <Link to="">See More &#8594;</Link>
          </div>
          <div className="col-md-4">
            <Image
              src="img/design/qualarc-mockup.jpg"
              alt="Prestige Plaques web mockup"
            />
            <h3>Qualarc Mfg</h3>
            <ul>
              <li>E-commerce</li>
              <li>UI/UX Design</li>
              <li>Wordpress Development</li>
            </ul>
            <Link to="">See More &#8594;</Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Design</h2>
            <hr />
          </div>
        </div>
        <GalleryRow>
          <div className="col-lg-8">
            <GalleryImage img="url(img/design/cha-lights.jpg)" />
          </div>
          <div className="col-lg-4">
            <GalleryImage img="url(img/design/ecc-card-mockup.jpg)" />
          </div>
        </GalleryRow>
        <GalleryRow>
          <div className="col-lg-5">
            <GalleryImage img="url(img/design/Hang-Ten-Mock-up.jpg)" />
          </div>
          <div className="col-lg-7">
            <GalleryImage img="url(img/design/Jackie-Fight-Car.jpg)" />
          </div>
        </GalleryRow>
        <GalleryRow>
          <div className="col-lg-8">
            <GalleryImage img="url(img/design/winfield-header-trimed.jpg)" />
          </div>
          <div className="col-lg-4">
            <GalleryImage img="url(img/design/prestige-plaques-mockup.jpg)" />
          </div>
        </GalleryRow>
        <GalleryRow>
          <div className="col-lg-4">
            <GalleryImage img="url(img/design/mailkeeper-web-mockup.jpg)" />
          </div>
          <div className="col-lg-8">
            <GalleryImage img="url(img/design/prestige-plaques-hero.jpg)" />
          </div>
        </GalleryRow>
      </div>
      <Footer />
    </>
  );
};

const GalleryRow = styled.div.attrs({
  className: "row",
})`
  margin-bottom: 30px;
`;

export default Design;
