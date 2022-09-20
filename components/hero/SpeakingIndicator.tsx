import { FC } from 'react';

const SpeakingIndicator: FC = () => {
  return (
    <>
      <svg
        viewBox="0 0 294 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-40%] top-[-40%] -z-1 w-[180%] animate-[spin_5s_linear_infinite] pointer-events-none"
      >
        <path
          opacity="0.5"
          d="M215.56 19.2353C291.355 55.6383 302.622 152.841 286.885 222.388C271.149 291.934 159.528 330.116 83.7331 293.713C7.9382 257.31 -16.6678 183.091 12.4078 90.5606C41.4834 -1.96954 139.765 -17.1677 215.56 19.2353Z"
          fill="url(#paint0_linear_2038_15063)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2038_15063"
            x1="225.112"
            y1="25.3864"
            x2="74.1803"
            y2="287.563"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#55EFAE" />
            <stop offset="1" stop-color="#9FC7E2" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="absolute left-[-47%] top-[-47%] -z-1 w-[194%] animate-[reverse-spin_5s_linear_infinite] pointer-events-none"
        viewBox="0 0 311 313"
      >
        <path
          fill="url(#a)"
          d="M221 28c93 66 107 128 71 203-36 76-119 95-203 72C5 279-19 175 17 100 54 24 127-38 221 28Z"
          opacity="0.5"
        />
        <defs>
          <linearGradient
            id="a"
            x1="230.138"
            x2="79.2056"
            y1="34.3634"
            y2="296.54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F5DC56" />
            <stop offset="1" stop-color="#9FC7E2" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default SpeakingIndicator;
