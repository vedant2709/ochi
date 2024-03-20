import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
      data-scroll
      data-scroll-section
      data-scroll-speed=".075"
    >
      <div className="text border-t-2 border-b-2 border-[#2A6B62] flex whitespace-nowrap font-semibold overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[19vw] uppercase font-['Neue_Montreal_Regular'] leading-none pt-2 -mt-[2vw]  pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[19vw] uppercase font-['Neue_Montreal_Regular'] leading-none pt-2 -mt-[2vw]  pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
