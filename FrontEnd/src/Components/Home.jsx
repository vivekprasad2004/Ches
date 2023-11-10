/* eslint-disable react-refresh/only-export-components */
import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Home() {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div className="absolute top-[7rem] w-full">
          <motion.div variants={fadeIn("right", "tween ", 0.2, 1)}>
            <h3 className="text-text-100 font-bold md:text-[75px] sm:text-[60px] text-[55px] font-OpenSans">
              We Are
            </h3>
            <div className="mt-2 text-4xl sm:text-6xl max-w-3xl ">
              <Typewriter
                options={{
                  strings: [
                    " ChES",
                    "Chemical Engineering Society.",
                    "AIChE SVNIT Student Chapter.",
                    "The Future",
                  ],
                  pauseFor: 1500,
                  delay: 130,
                  deleteSpeed: 30,

                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Home, "Home");
