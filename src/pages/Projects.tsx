import React, { useState } from "react";
import Navbar from "../components/navagation/Navbar";
import { NavLink as Link } from "react-router-dom";
import Image from "../components/image/Image";
import styled from "styled-components";
import GalleryImage from "../components/image/GalleryImage";
import Modal from "../components/modal/Modal";
import Spacer from "../components/spacer/Spacer";
import Footer from "../components/footer/Footer";
import LinkText from "../components/button/LinkText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faWordpress,
  faPython,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import ReactTooltip from "react-tooltip";

const Projects = () => {
  const [viewModal, setViewModal] = useState(0);
  return (
    <>
      <Navbar />
      <Spacer height="100px" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="accent-onlight">Projects</h1>
            <Hr />
            <p className="dark-text">
              Over the past 6 years I have worked on a diverse range of projects
              from conception to final implementation. I am comfortable working
              in React, WorkPress, php and vanilla JavaScript, and have done
              testing in Ghost, Sage and running headless cms with React as a
              front-end. I have designed projects using the Adobe Creative Suite
              (Photoshop, Illustrator, Xd) and Figma.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h3 className="accent-onlight">Devlopment Tools</h3>
            <ul>
              <li>HTML/css</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>php</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3 className="accent-onlight">Design Tools</h3>
            <ul>
              <li>PhotoShop</li>
              <li>Illustrator</li>
              <li>Adobe Xd</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="accent-onlight">This Site</h3>
            <p className="dark-text">
              Was built with React using Create ReactApp. It is using React
              Router to handle the multiple page format and Styled Components
              for styling.
            </p>
            <LinkText
              text="View Site Code"
              link="https://github.com/nickcarls0n/Portfolio"
              style={{ marginTop: "20px" }}
              isExternal
            />
          </div>
        </div>
        <Spacer height="60px" />
        <div className="row">
          <div className="col">
            <h2 className="accent-onlight">Case Studies</h2>
            <Hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Image
              src="img/design/Cinic-Web-Mockup.jpg"
              alt="Cinic Bike Gear web mockup"
            />
            <h3 className="accent-onlight">Cinic Bike Gear</h3>
            <ul>
              <li>E-commerce</li>
              <li>Brand Identity</li>
              <li>UI/UX Design</li>
              <li>Wordpress Development</li>
            </ul>
            <div>
              <ProjectIcon data-tip="WordPress" icon={faWordpress} />
              <ProjectIcon data-tip="Python" icon={faPython} />
              <ProjectIcon data-tip="Sass" icon={faSass} />
            </div>
            <LinkText text="Project Details" link="/cinicbike" />
          </div>
          <div className="col-md-4">
            <Image
              src="img/design/cha-install-mockup.jpg"
              alt="Commercial Home web mockup"
            />
            <h3 className="accent-onlight">Commercial Home</h3>
            <ul>
              <li>Business Website</li>
              <li>UI/UX Design</li>
              <li>Development</li>
              <li>Email Marketing</li>
            </ul>
            <ProjectIcon data-tip="HTML 5" icon={faHtml5} />
            <ProjectIcon data-tip="css 3" icon={faCss3Alt} />
            <ProjectIcon data-tip="JavaScript" icon={faJs} />
            <ProjectIcon data-tip="Bootstrap" icon={faBootstrap} />
            <LinkText text="Project Details" link="/cha" />
          </div>
          <div className="col-md-4">
            <Image
              src="img/design/qualarc-mockup.jpg"
              alt="Prestige Plaques web mockup"
            />
            <h3 className="accent-onlight">Qualarc Mfg</h3>
            <ul>
              <li>Site Redesign</li>
              <li>E-commerce</li>
              <li>UI/UX Design</li>
              <li>Wordpress Development</li>
            </ul>
            <ProjectIcon data-tip="WordPress" icon={faWordpress} />
            <ProjectIcon data-tip="Python" icon={faPython} />
            <ProjectIcon data-tip="Sass" icon={faSass} />
            {/* This is the tooltip for all the above ProjectIcons */}
            <ReactTooltip
              place="top"
              backgroundColor="#46a29f"
              textColor="#090a0d"
            />
            <LinkText text="Project Details" link="/qualarc" />
          </div>
        </div>
        <Spacer height="60px" />
        <div className="row">
          <div className="col">
            <h2 className="accent-onlight">Design and Development</h2>
            <Hr />
          </div>
        </div>
        <GalleryRow>
          <div className="col-lg-4">
            <GalleryImage
              img="url(img/design/mailkeeper-web-mockup.jpg)"
              onClick={() => setViewModal(7)}
            />
            <Modal
              showModal={viewModal == 7}
              img="img/design/mailkeeper-web-mockup.jpg"
              title="MailKeeper Website Design and Development"
              about="This projects was a completed redesign of an old very dated website. I used Adobe xd for the design portion and HTML/css and javaScript while  leveraging Bootstrap for the site layout."
              link="https://themailkeeper.com/"
              linkText="https://themailkeeper.com/"
              onClick={() => setViewModal(0)}
            />
          </div>
          <div className="col-lg-8">
            <GalleryImage
              img="url(img/design/cha-lights.jpg)"
              onClick={() => setViewModal(4)}
            />
            <Modal
              showModal={viewModal == 4}
              img="img/design/cha-lights.jpg"
              title="Ad banner design"
              about="This was part of a larger marketing push to create assets that would generate traffic to the companies e-commerce site."
              onClick={() => setViewModal(0)}
            />
          </div>
        </GalleryRow>
        <GalleryRow>
          <div className="col-lg-8">
            <GalleryImage
              img="url(img/design/winfield-header-trimed.jpg)"
              onClick={() => setViewModal(5)}
            />
            <Modal
              showModal={viewModal == 5}
              img="img/design/winfield-header-trimed.jpg"
              title="Ad banner design"
              about="This was part of a larger marketing push to help generate interest in a new line of mailboxes."
              onClick={() => setViewModal(0)}
            />
          </div>
          <div className="col-lg-4">
            <GalleryImage
              img="url(img/design/prestige-plaques-mockup.jpg)"
              onClick={() => setViewModal(6)}
            />
            <Modal
              showModal={viewModal == 6}
              img="img/design/prestige-plaques-mockup.jpg"
              title="Prestige Plaques Website Design and Development"
              about="This projects was a design and implementation of a website where users can select from a number of product options and make a purchase. I used Adobe xd for the design portion and created a custom e-commerce WordPress template using sass and php."
              link="https://prestigeplaques.com/"
              linkText="https://prestigeplaques.com/"
              onClick={() => setViewModal(0)}
            />
          </div>
        </GalleryRow>
        <GalleryRow>
          <div className="col-lg-4">
            <GalleryImage
              img="url(img/design/Hang-Ten-Mock-up.jpg)"
              onClick={() => setViewModal(3)}
            />
            <Modal
              showModal={viewModal == 3}
              img="img/design/Hang-Ten-Mock-up.jpg"
              title="Web Design and Development"
              about="This was a pet project to redesign and develop an existing website."
              // link="/projects"
              // linkText="Coming Soon"
              onClick={() => setViewModal(0)}
            />
          </div>
          <div className="col-lg-8">
            <GalleryImage
              img="url(img/design/prestige-plaques-hero.jpg)"
              onClick={() => setViewModal(8)}
            />
            <Modal
              showModal={viewModal == 8}
              img="img/design/prestige-plaques-hero.jpg"
              title="Prestige Plaques Branding"
              about="This project required developing a brand identity for a company that builds luxury custom engraved plaques."
              onClick={() => setViewModal(0)}
            />
          </div>
        </GalleryRow>
      </div>
      <Spacer height="100px" />
      <Footer />
    </>
  );
};

const Hr = styled.hr`
  margin-bottom: 37px;
`;

const ProjectIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  margin-bottom: 1em;
  color: #090a0d;
`;

const CaseStudyLink = styled(Link)`
  text-decoration: none;
  color: #46a29f;
  transition: all 300ms ease-out;

  span {
    transition: all 300ms ease-out;
  }

  &:hover {
    color: #66fcf1;

    span {
      margin-left: 6px;
    }
  }
`;

const GalleryRow = styled.div.attrs({
  className: "row",
})`
  margin-bottom: 30px;
`;

export default Projects;
