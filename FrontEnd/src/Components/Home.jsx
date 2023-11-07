/* eslint-disable react-refresh/only-export-components */
import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function Home() {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div className="absolute top-[7rem] w-full">
          <motion.div variants={fadeIn("left", "tween", 0.1, 1)}>
            <h3 className={styles.sectionHeadText}>We Are</h3>
            <p className="mt-2 text-4xl sm:text-6xl max-w-3xl ">
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
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(Home, "Home");
