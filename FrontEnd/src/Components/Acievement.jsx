/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Achievements } from "../constants";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ChesLogo } from "../assets";

const ServiceCard = ({ content, index }) => {
  return (
    <Tilt
      className="sm:w-[280px] w-full"
      tiltMaxAngleX={20}
      scale={1.02}
      tiltMaxAngleY={20}
      transitionSpeed={1950}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full  p-[1px] rounded-[10px]  ">
        <div className=" hover:shadow-lg hover:shadow-text-500/60  backdrop-blur-[10px] bg-background-900/70 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={ChesLogo}
            alt="About Icon"
            className="w-16 h-16 object-contain"
          />

          <h3 className=" text-sm my-4 ">{content}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  max-w-3xl leading-[30px]">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-8">
        {Achievements.map((Achievements, index) => (
          <ServiceCard
            key={Achievements.content}
            index={index}
            {...Achievements}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
