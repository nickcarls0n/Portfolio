import * as React from "react";

interface DesignIconProps {
    width?: number;
}

const SVGComponent = (props: DesignIconProps ) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 58.48 43.8"
    width={props.width}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:none;}.cls-2,.cls-3{stroke:#66fcf1;stroke-miterlimit:10;}.cls-3{fill:#66fcf1;stroke-width:0.62px;}"
        }
      </style>
      <linearGradient
        id="linear-gradient"
        x1={35.3}
        y1={24.98}
        x2={35.3}
        y2={58.63}
        gradientTransform="translate(-8.76 8.1) rotate(-14.35)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.65} stopColor="#66fcf1" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
    <title>{"design-icon"}</title>
    <path
      className="cls-1"
      d="M45.68,41.35h0l-.4,13.41L34.76,57.49,27.9,45.94h0l1.52-12.5,1.18-9.62,1-.26s2.92,15,3.92,20.11a2,2,0,0,0-.41,1.81,2.07,2.07,0,1,0,2.8-2.42c-1.59-4.93-6.31-19.5-6.31-19.5l1-.27,5.69,7.85Z"
      transform="translate(-0.76 -13.69)"
    />
    <line className="cls-2" x1={0.29} y1={2.27} x2={58.19} y2={2.27} />
    <path
      className="cls-2"
      d="M1.26,45.8C1.26,29.38,14.13,16.07,30,16.07S58.74,29.38,58.74,45.8"
      transform="translate(-0.76 -13.69)"
    />
    <rect className="cls-3" x={27.14} y={0.31} width={4.21} height={4.21} />
  </svg>
);

export default SVGComponent;
