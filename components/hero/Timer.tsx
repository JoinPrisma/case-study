import { Icon } from '@joinprisma/components';
import { FC } from 'react';

const Timer: FC = () => {
  return (
    <div
      className="absolute top-[6%] right-[-5%] rotate-[2.7deg] flex items-center bg-surface shadow-lg px-[18px] py-[22px] rounded-[26px]"
      role="presentation"
    >
      <div className="text-display-sm text-on-suface">02</div>
      <div className="mx-1 font-normal text-display-sm text-outline">:</div>
      <div className="text-display-sm text-on-suface">47</div>
      <div className="mt-3 ml-2 mr-4 text-label text-on-suface-variant">
        mins
      </div>
      <div className="relative w-16 h-16 p-4 shadow bg-tertiary-container text-on-tertiary-container rounded-4">
        <Icon name="playback" variant="pause" className="w-full h-full" />
        <div className="absolute left-11 top-12">
          <div className="relative w-full h-full -rotate-[2.7deg] -ml-0.5">
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
            <div className="absolute left-5 top-4 whitespace-nowrap bg-coach-container text-on-coach-container shadow px-3 py-1.5 rounded-[10px] text-label">
              Coach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
