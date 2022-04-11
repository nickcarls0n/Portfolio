import * as React from "react";

interface HomeIconProps {
  width?: number
}

const HomeIcon = (props: HomeIconProps) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 60 32.73"
    width={props.width}
  >
    <defs>
      <style>
        {
          "\n      .cls-1,.cls-2{fill:none;stroke:#66fcf1;stroke-miterlimit:10;}.cls-2{stroke-width:2.05px;}.cls-3{fill:url(#linear-gradient);}\n    "
        }
      </style>
      <linearGradient
        id="linear-gradient"
        x1={37.37}
        y1={17.71}
        x2={37.37}
        y2={31.71}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#66fcf1" />
        <stop offset={0.11} stopColor="#66fcf1" stopOpacity={0.84} />
        <stop offset={0.29} stopColor="#66fcf1" stopOpacity={0.59} />
        <stop offset={0.47} stopColor="#66fcf1" stopOpacity={0.38} />
        <stop offset={0.63} stopColor="#66fcf1" stopOpacity={0.21} />
        <stop offset={0.78} stopColor="#66fcf1" stopOpacity={0.1} />
        <stop offset={0.91} stopColor="#66fcf1" stopOpacity={0.03} />
        <stop offset={1} stopColor="#66fcf1" stopOpacity={0} />
      </linearGradient>
    </defs>
    <title>{"home-icon"}</title>
    <polygon
      className="cls-1"
      points="53.91 9.07 53.91 31.71 4.82 31.71 4.82 10.13 18.88 7.65 18.88 1.71 53.91 9.07"
    />
    <line className="cls-2" x1={15.61} y1={1} x2={57.23} y2={9.77} />
    <line className="cls-2" x1={21.78} y1={7.6} x2={0.34} y2={11.08} />
    <rect className="cls-3" x={32.63} y={17.71} width={9.47} height={14} />
    <line className="cls-2" y1={31.71} x2={60} y2={31.71} />
  </svg>
);

export default HomeIcon;
