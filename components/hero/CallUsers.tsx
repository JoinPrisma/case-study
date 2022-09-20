import { FC } from 'react';

const CallUsers: FC = () => {
  return (
    <div className="w-fit absolute top-[440px] sm:top-auto sm:bottom-[3.5%] md:bottom-[8%] lg:bottom-[19%] left-1/2 -translate-x-1/2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-1.5 lg:gap-3">
      <div className="w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15" />
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <div
          className="absolute -top-8 -left-12 lg:-top-3 lg:-right-2 rotate-[5.52deg] scale-50 lg:scale-100"
          style={{ fontSize: 52 }}
        >
          👍
        </div>
      </div>
      <div className="w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15" />
      <div className="relative w-20 rounded-full shadow-md lg:w-40 aspect-square bg-on-surface/15">
        <svg
          viewBox="0 0 294 308"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-1 w-[180%]"
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
          viewBox="0 0 311 313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-1 w-[194%]"
        >
          <path
            opacity="0.5"
            d="M220.585 28.2131C314.436 93.9371 328.313 155.57 291.91 231.365C255.507 307.16 172.879 326.214 88.7577 302.691C4.63625 279.168 -18.9707 175.333 17.4323 99.5384C53.8354 23.7435 126.733 -37.5109 220.585 28.2131Z"
            fill="url(#paint0_linear_2038_15064)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2038_15064"
              x1="230.138"
              y1="34.3634"
              x2="79.2056"
              y2="296.54"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F5DC56" />
              <stop offset="1" stop-color="#9FC7E2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 z-10 w-full h-full rounded-full bg-surface" />
      </div>
    </div>
  );
};

export default CallUsers;
