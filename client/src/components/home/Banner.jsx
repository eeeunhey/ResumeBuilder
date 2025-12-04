import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="flex flex-wrap items-center justify-center w-full py-2 font-medium text-sm text-white text-center bg-gradient-to-r from-violet-500 to-purple-100">
        <p>이력서 생성해보세요!</p>
        <a
          href=""
          class="flex items-center gap-1 px-3 py-1 text-xs rounded-md text-violet-400 bg-white hover:bg-slate-200 transition active:scale-95 ml-3"
        >
          Check it out
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.91797 7H11.0846"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 2.9165L11.0833 6.99984L7 11.0832"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Banner;
