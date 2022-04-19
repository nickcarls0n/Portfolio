import React from "react";
import Navbar from "../components/navagation/Navbar";
import Footer from "../components/footer/Footer";

const About = () => {
  const activeDate = () => {
    return new Date().getFullYear() - 2016;
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="accent-onlight">About Me</h1>
            <p className="dark-text">
              I'm Nicholas Carlson, a California based front-end developer and
              designer. For over {activeDate()} years I have been involved in
              and lead projects in user interface design, web application
              development, e-commerce design and implementation as well as
              creative direction and planning.
            </p>
            <p className="dark-text">
              I studied art and design at California State East Bay. The design
              curriculum included studies in web design and front-end
              development. Since graduating I have continued learning and keep
              my skills sharp and up to date with resources such as Free Code
              Camp, LinkedIn learning and Treehouse.
            </p>
            <p className="dark-text">
              When I am not in front of a computer you can find me outside or on
              at the gym. I am an avid mountain biker and I also have a brown
              belt in Brazilian Jujitsu.
            </p>
            <div className="row">
              <div className="col-md-6">
                <h3 className="accent-onlight">Development</h3>
                <ul>
                  <li>HTML/css</li>
                  <li>PHP/Wordpress Development</li>
                  <li>javaScript</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Electron</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="accent-onlight">Design</h3>
                <ul>
                  <li>UX Design</li>
                  <li>PhotoShop</li>
                  <li>Illustrator</li>
                  <li>Figma</li>
                  <li>Adobe CC</li>
                  <li>Adobe XD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
