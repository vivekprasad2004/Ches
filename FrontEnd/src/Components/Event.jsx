/* eslint-disable react-refresh/only-export-components */
import Modal from "./Modal";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

function Event() {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Events.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4  max-w-3xl leading-[30px]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-8">
          <Modal />
          <Modal />
          <Modal />
          <Modal />
        </div>
        <Modal />
      </div>
    </>
  );
}

export default SectionWrapper(Event, "Event");
