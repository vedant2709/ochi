import React from "react";
import { gsap } from "gsap";

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      className="w-full h-[60vh] bg-zinc-900 flex items-center gap-5 px-32 main-card"
    >
      <div className="cardcontainer w-1/2">
        <div className="card w-full h-[60vh] rounded-xl bg-[#004D43] flex items-center justify-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-5 bottom-5 px-5 py-1 rounded-full border-[2px] border-white text-white uppercase text-xs">
            &copy; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 flex gap-5">
        <div className="card w-full rounded-xl h-[60vh] bg-[#212121] flex items-center justify-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-5 bottom-5 px-5 py-1 rounded-full border-[2px] border-white text-white uppercase text-xs">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card w-full rounded-xl h-[60vh] bg-[#212121] flex items-center justify-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-5 bottom-5 px-5 py-1 rounded-full border-[2px] border-white text-white uppercase text-xs w-40">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
