import * as React from "react";

interface DevelopmentIconProps {
    width?: number;
}

const SVGComponent = (props: DevelopmentIconProps) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 58 58"
    width={props.width}
  >
    <defs>
      <style>
        {
          ".cls-1,.cls-2{stroke:#66fcf1;stroke-miterlimit:10;}.cls-1{fill:url(#radial-gradient);}.cls-2{fill:none;}"
        }
      </style>
      <radialGradient
        id="radial-gradient"
        cx={30}
        cy={30}
        r={28.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#66fcf1" />
        <stop offset={0.12} stopColor="#68fcf1" stopOpacity={0.98} />
        <stop offset={0.23} stopColor="#6ffcf2" stopOpacity={0.94} />
        <stop offset={0.35} stopColor="#7bfcf3" stopOpacity={0.86} />
        <stop offset={0.46} stopColor="#8cfdf4" stopOpacity={0.75} />
        <stop offset={0.57} stopColor="#a1fdf6" stopOpacity={0.61} />
        <stop offset={0.68} stopColor="#bcfef9" stopOpacity={0.44} />
        <stop offset={0.79} stopColor="#dbfefc" stopOpacity={0.24} />
        <stop offset={0.9} stopColor="#feffff" stopOpacity={0.01} />
        <stop offset={0.9} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
    </defs>
    <title>{"photo-icon"}</title>
    <path
      className="cls-1"
      d="M30,1.5A28.5,28.5,0,1,0,58.5,30,28.5,28.5,0,0,0,30,1.5ZM35.79,40H24.21l-5.8-10,5.8-10H35.79l5.8,10Z"
      transform="translate(-1 -1)"
    />
    <line className="cls-2" x1={34.79} y1={39.03} x2={2.32} y2={39.03} />
    <line className="cls-2" x1={34.79} y1={18.97} x2={51.09} y2={47} />
    <line className="cls-2" x1={23.21} y1={18.97} x2={55.68} y2={18.97} />
    <line className="cls-2" x1={17.41} y1={29} x2={33.71} y2={0.89} />
    <line className="cls-2" x1={23.21} y1={39.03} x2={7.02} y2={10.86} />
    <line className="cls-2" x1={40.59} y1={29} x2={24.49} y2={57.14} />
  </svg>
);

export default SVGComponent;
