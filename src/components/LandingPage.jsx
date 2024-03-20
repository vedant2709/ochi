import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      className="w-full min-h-screen bg-zinc-900 p-1"
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
    >
      <div className="textstructure mt-28 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex gap-2">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[7.5vw] h-[5.7vw] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover relative top-[1.06vw] rounded-md"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] leading-none font-semibold font-['Neue_Montreal_Regular']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full uppercase font-light text-md">
            start the project
          </div>
          <div className="h-10 w-10 rounded-full border-[1px] border-zinc-400 flex justify-center items-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
