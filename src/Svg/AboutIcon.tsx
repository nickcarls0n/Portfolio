import * as React from "react";

interface AboutIconProps {
    width?: number;
}

const SVGComponent = (props: AboutIconProps) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 60 43.36"
    width={props.width}
  >
    <defs>
      <style>
        {".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#66fcf1;}"}
      </style>
      <linearGradient
        id="linear-gradient"
        x1={30}
        y1={8.48}
        x2={30}
        y2={50.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#66fcf1" />
        <stop offset={0.01} stopColor="#66fcf1" stopOpacity={0.97} />
        <stop offset={0.05} stopColor="#66fcf1" stopOpacity={0.79} />
        <stop offset={0.09} stopColor="#66fcf1" stopOpacity={0.62} />
        <stop offset={0.14} stopColor="#66fcf1" stopOpacity={0.47} />
        <stop offset={0.19} stopColor="#66fcf1" stopOpacity={0.34} />
        <stop offset={0.25} stopColor="#66fcf1" stopOpacity={0.24} />
        <stop offset={0.32} stopColor="#66fcf1" stopOpacity={0.15} />
        <stop offset={0.4} stopColor="#66fcf1" stopOpacity={0.08} />
        <stop offset={0.49} stopColor="#66fcf1" stopOpacity={0.03} />
        <stop offset={0.63} stopColor="#66fcf1" stopOpacity={0.01} />
        <stop offset={1} stopColor="#66fcf1" stopOpacity={0} />
      </linearGradient>
    </defs>
    <title>{"about-icon"}</title>
    <path
      className="cls-1"
      d="M17,45l-3.43-6.31h-.95A12,12,0,0,1,.52,26.93V20.27A12,12,0,0,1,12.63,8.48H47.37A12,12,0,0,1,59.48,20.27v6.66A12,12,0,0,1,47.37,38.72H26.12L22.68,45l-2.83,5.21Z"
      transform="translate(0 -7.96)"
    />
    <path
      className="cls-2"
      d="M47.37,9A11.44,11.44,0,0,1,59,20.27v6.66A11.44,11.44,0,0,1,47.37,38.2H25.81l-.29.54-3.3,6-2.37,4.37-2.38-4.37-3.28-6-.3-.54H12.63A11.44,11.44,0,0,1,1,26.93V20.27A11.44,11.44,0,0,1,12.63,9H47.37m0-1H12.63A12.51,12.51,0,0,0,0,20.27v6.66A12.51,12.51,0,0,0,12.63,39.24h.64l3.29,6,3.29,6,3.29-6,3.29-6H47.37A12.51,12.51,0,0,0,60,26.93V20.27A12.51,12.51,0,0,0,47.37,8Z"
      transform="translate(0 -7.96)"
    />
  </svg>
);

export default SVGComponent;
