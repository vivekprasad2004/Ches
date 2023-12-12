/* eslint-disable react-refresh/only-export-components */
// import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";

// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";

function HomeE() {
  return (
    <>
      <section className="relative w-full h-[80vh] mx-auto">
        <div className="absolute top-[7rem] w-full">
          <h1>Hi</h1>
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
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(HomeE, "HomeE");
