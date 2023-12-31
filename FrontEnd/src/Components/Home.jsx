/* eslint-disable react-refresh/only-export-components */
import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function Home() {
  return (
    <>
      <section className="relative w-full h-[80vh] mx-auto">
        <div className="absolute top-[7rem] w-full">
          <motion.div variants={fadeIn("right", "tween ", 0.2, 1)}>
            <h3 className="text-text-100 font-bold md:text-[75px] sm:text-[60px] text-[55px] font-OpenSans">
              We Are
            </h3>
            <div className="mt-2 text-4xl sm:text-[2.8rem] max-w-3xl ">
              <Typewriter
                options={{
                  strings: [
                    "ChES",
                    "Chemical Engineering Society",
                    "AIChE SVNIT Student Chapter",
                    "The Future",
                  ],
                  pauseFor: 1500,
                  delay: 130,
                  deleteSpeed: 30,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* <motion.div className="mt-[5rem]" variants={textVariant(0.5)}>
              <h1 className="text-2xl underline">Updates:</h1>
              <ul>
                <li className="pt-2 ">
                  <motion.p variants={textVariant(0.75)}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </motion.p>
                </li>
                <li className="pt-2 ">
                  <motion.p variants={textVariant(0.75)}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </motion.p>
                </li>
                <li className="pt-2 ">
                  <motion.p variants={textVariant(0.75)}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </motion.p>
                </li>
              </ul>
            </motion.div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Home, "Home");
