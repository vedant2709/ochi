import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.25"
      className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-['Neue_Montreal_Regular'] font-medium"
    >
      <h1 className="font-['Neue_Montreal_Regular'] text-[4vw] leading-[4.5vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-8 flex">
        <div className="w-1/2">
          <h1 className="text-5xl">Our Approach:</h1>
          <button className="px-8 py-4 uppercase bg-zinc-900 rounded-full text-white mt-10 flex items-center gap-10 ">
            read more
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-700 rounded-3xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
