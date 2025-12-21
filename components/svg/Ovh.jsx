import React from "react";

const Ovh = ({ width = "50", height = "50" }) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="#7e7e7e"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="512" cy="512" r="512" fill="#7e7e7e"></circle>
        <path
          d="m700.2 466.5 61.2-106.3c23.6 41.6 37.2 89.8 37.2 141.1 0 68.8-24.3 131.9-64.7 181.4H575.8l48.7-84.6h-64.4l75.8-131.7 64.3.1zm-55.4-125.2L448.3 682.5l.1.2H290.1c-40.5-49.5-64.7-112.6-64.7-181.4 0-51.4 13.6-99.6 37.3-141.3l102.5 178.2 113.3-197h166.3z"
          fill="#fff"
        ></path>
      </g>
    </svg>
  );
};

export default Ovh;
