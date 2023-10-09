import React from "react";

interface MedTyreProps {
    width: string;
    height: string;
  }

  const MedTyre: React.FC<MedTyreProps> = ({ width, height }) => {
  return (
    <svg   
    width={width}
    height={height}
     xmlns="http://www.w3.org/2000/svg" 
     xmlSpace="preserve" 
     overflow="hidden">
  <g transform="translate(-1054 -568)">
    <g>
      <path
        d="M1061 715C1061 638.232 1123.23 576 1200 576 1276.77 576 1339 638.232 1339 715 1339 791.767 1276.77 854 1200 854 1123.23 854 1061 791.767 1061 715Z"
        stroke="#FF0000"
        strokeWidth="10.3125"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="8"
        strokeOpacity="1"
        fill="#000000"
        fillRule="evenodd"
        fillOpacity="1"
      />
      <path
        d="M1120.5 716C1120.5 672.093 1156.09 636.5 1200 636.5 1243.91 636.5 1279.5 672.093 1279.5 716 1279.5 759.907 1243.91 795.5 1200 795.5 1156.09 795.5 1120.5 759.907 1120.5 716Z"
        stroke="#767171"
        strokeWidth="4.58333"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="8"
        strokeOpacity="1"
        fill="#000000"
        fillRule="evenodd"
        fillOpacity="1"
      />
    </g>
  </g>
</svg>

  );
};

export default MedTyre;
