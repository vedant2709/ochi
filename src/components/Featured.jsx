import React from "react";
import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full py-10"
    >
      <div className="w-full px-20 border-b-2 border-zinc-700 pb-16">
        <h1 className="text-6xl font-['Neue_Montreal_Regular']">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-5 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[75vh] rounded-xl relative"
          >
            <div className="card w-full h-full rounded-xl ">
              <h1 className="text-[#CDEA68] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 absolute text-7xl font-['Neue_Montreal_Regular'] z-[99] flex overflow-hidden">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-1/2 h-[75vh] rounded-xl relative"
          >
            <div className="card w-full h-full rounded-xl ">
              <h1 className="text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 absolute text-7xl font-['Neue_Montreal_Regular'] flex overflow-hidden">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

//
