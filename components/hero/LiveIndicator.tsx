import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const LiveIndicator: FC = () => {
  return (
    <div
      className="absolute top-[-5px] left-[68%] sm:left-1/2 sm:top-0 sm:-translate-x-1/2 sm:-translate-y-1/2 w-fit -rotate-[3.92deg] -mt-2"
      role="presentation"
    >
      <div className="relative border-2 w-fit h-fit border-on-surface/30">
        <div className="w-32 aspect-square rounded-[44px] shadow-xl bg-green text-surface p-4">
          <Icon name="lightning" variant="bold" className="w-full h-full" />
        </div>
        <div className="rounded-full w-2.5 h-2.5 bg-surface shadow absolute -top-1.5 -left-1.5" />
        <div className="rounded-full w-2.5 h-2.5 bg-surface shadow absolute -top-1.5 -right-1.5" />
        <div className="rounded-full w-2.5 h-2.5 bg-surface shadow absolute -bottom-1.5 -left-1.5" />
        <div className="rounded-full w-2.5 h-2.5 bg-surface shadow absolute -bottom-1.5 -right-1.5">
          <div className="relative w-full h-full rotate-[3.92deg] -ml-0.5 hidden md:block">
            {/* cursor svg TODO minify */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_2038_15390)">
                <path
                  d="M14.8356 21.1561C14.2433 22.4651 12.3753 22.4389 11.82 21.1138L5.26813 5.47838C4.69517 4.11105 6.0814 2.74316 7.44098 3.33428L22.5124 9.88709C23.7944 10.4445 23.8408 12.2456 22.5892 12.8682L17.947 15.1775C17.6077 15.3463 17.3372 15.627 17.181 15.9722L14.8356 21.1561Z"
                  fill="#1C1B1E"
                />
                <path
                  d="M14.8356 21.1561C14.2433 22.4651 12.3753 22.4389 11.82 21.1138L5.26813 5.47838C4.69517 4.11105 6.0814 2.74316 7.44098 3.33428L22.5124 9.88709C23.7944 10.4445 23.8408 12.2456 22.5892 12.8682L17.947 15.1775C17.6077 15.3463 17.3372 15.627 17.181 15.9722L14.8356 21.1561Z"
                  stroke="white"
                  stroke-width="1.26479"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_2038_15390"
                  x="0.706793"
                  y="0.0290161"
                  width="27.2214"
                  height="27.7855"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1.26479"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_2038_15390"
                  />
                  <feOffset dy="1.26479" />
                  <feGaussianBlur stdDeviation="1.26479" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2038_15390"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1.26479" />
                  <feGaussianBlur stdDeviation="1.89718" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_2038_15390"
                    result="effect2_dropShadow_2038_15390"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_2038_15390"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="absolute left-5 top-4 whitespace-nowrap bg-[#ffde8a] text-[#4a3305] shadow px-3 py-1.5 rounded-[10px] text-label">
              Curriculum Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveIndicator;
