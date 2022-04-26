import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { Link } from "react-scroll";

const IntroSection = () => {
  const activeDate = () => {
    return new Date().getFullYear() - 2016;
  };
  return (
    <IntroWrap>
      <TreeBackground src="/img/home-tree.jpg" alt="background image" />
      <div className="container">
        <div className="row">
          <TextWrapper>
            <div>
              <h1>
                Nick
                <br />
                Carlson
              </h1>
              <h4 className="white-text">UI/UX, Web, Front-end Development</h4>
              <p>
                I am a talented front-end developer and designer with over{" "}
                {activeDate()} years of experience creating successful websites
                that are fast, easy to use and built with the best practices.
              </p>
              <div>
                <WebIcon data-tip="HTML 5" icon={faHtml5} />

                <WebIcon data-tip="css 3" icon={faCss3Alt} />
                <WebIcon data-tip="JavaScript" icon={faJs} />
                <WebIcon data-tip="React" icon={faReact} />
                <WebIcon data-tip="WordPress" icon={faWordpress} />
                <ReactTooltip
                  place="top"
                  backgroundColor="#66fcf1"
                  textColor="#090a0d"
                />
              </div>
            </div>
            <VerticalText>
              <p>
                Front-end Developer <span className="highlight-text">/</span>{" "}
                Designer{" "}
              </p>
            </VerticalText>
            <ScrollDown>
              <Link to="dev-section" smooth>
                <b>
                  {" "}
                  <BlinkArrow>{`<`}</BlinkArrow> Scroll{" "}
                  <span className="highlight-text">Down</span>
                </b>
              </Link>
            </ScrollDown>
          </TextWrapper>
        </div>
      </div>
    </IntroWrap>
  );
};

const IntroWrap = styled.div`
  background-color: #202833;
  height: 600px;
  z-index: -1;
`;

const TextWrapper = styled.div.attrs({
  className: "col-md-8 offset-md-1",
})`
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  top: 40px;
  padding: 40px 40px 60px 40px;
`;

const WebIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  color: white;
`;

const VerticalText = styled.div`
  position: absolute;
  left: -280px;
  top: 260px;
  transform: rotate(-90deg);
  font-size: 23px;
`;

const ScrollDown = styled.div`
  display: none;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 524px;
  transform: rotate(-90deg);
  z-index: 300;

  a {
    color: white;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;

const BlinkArrow = styled.span`
animation: blinker 1.8s ease-out infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.2;
  }
`;

const TreeBackground = styled.img`
  position: absolute;
  max-height: 600px;
  top: 100px;
  right: 0;
  opacity: 0.86;
`;

export default IntroSection;
