/* eslint-disable react/require-default-props */
import { useEffect, useState } from 'react';

interface SpinnerProps {
  color?: string;
  size?: number;
  duration?: number;
  spinWidth?: number;
}

export const LoaderSpin = ({
  color = '#fff',
  duration = 0.9,
  size = 100,
  spinWidth = 1
}: SpinnerProps) => {
  const [width, setWidth] = useState(1);

  useEffect(() => {
    if (spinWidth >= 1 && spinWidth <= 5) {
      setWidth(spinWidth);
    } else if (spinWidth > 5) {
      setWidth(5);
    }
  }, [spinWidth]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -2 42 42"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="loading-spinner"
    >
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%">
          <stop stopColor={color} stopOpacity="0" offset="0%" />
          <stop stopColor={color} stopOpacity=".631" offset="63.146%" />
          <stop stopColor={color} offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
          <path
            d="M36 18c0-9.94-8.06-18-18-18"
            stroke={color}
            strokeWidth={width}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};
