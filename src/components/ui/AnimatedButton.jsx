import React from 'react';

const AnimatedButton = ({ text = "Book a Call" }) => {
  return (
    <button className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
      <span className="whitespace-nowrap">{text}</span>
      <span className="relative mt-px">
        <svg 
          aria-hidden="true"
          className="overflow-visible pointer-events-none"
          width="35" 
          height="12"
        >
          <g 
            transform="translate(0 .6)" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            fillRule="evenodd" 
            strokeLinecap="round"
            className="transition-opacity duration-300 group-hover:opacity-0"
          >
            <line x1="34.5" y1="4.9" x2="29.7" />
            <line x1="34.5" y1="4.9" x2="29.7" y2="10" />
            <line x1=".5" y1="4.9" x2="34.5" y2="4.9" />
          </g>
        </svg>
        <svg 
          aria-hidden="true"
          className="overflow-visible pointer-events-none absolute left-0 top-0"
          width="70" 
          height="12"
        >
          <g 
            transform="translate(0 .6)" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            fillRule="evenodd" 
            strokeLinecap="round"
          >
            <line 
              x1="34.5" y1="4.9" x2="29.7"
              className="origin-right transition-all duration-300 group-hover:[stroke-dashoffset:0]"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
            <line 
              x1="34.5" y1="4.9" x2="29.7" y2="10"
              className="origin-right transition-all duration-300 group-hover:[stroke-dashoffset:0]"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
            <line 
              x1=".5" y1="4.9" x2="34.5" y2="4.9"
              className="origin-right transition-all duration-300 group-hover:[stroke-dashoffset:0]"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
          </g>
        </svg>
      </span>
    </button>
  );
};

export default AnimatedButton;