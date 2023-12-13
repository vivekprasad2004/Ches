/* eslint-disable react-refresh/only-export-components */
// import Typewriter from "typewriter-effect";
import { SectionWrapper } from "../hoc";


import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function HomeE() {
  return (
    <>
      <section className="relative w-full h-[80vh] mx-auto">
        <div className="absolute top-[3.5rem] w-full">
          {/* <h1 className="" > </h1> */}
          { <motion.div className="mt-[5rem]" variants={textVariant(0.5)}>
              <h1 className=" text-text-100 font-bold md:text-[75px] sm:text-[60px] text-[55px] font-OpenSans">Eureka </h1>
              <ul>
                <li className="pt-2 ">
                  <motion.p className="mt-4  max-w-3xl leading-[30px]" variants={textVariant(0.75)}>
                  Eureka is a research-based event that aims to guide participants 
                  through the vast realms of Chemical Engineering and unlock truth 
                  within thier imagination. It consists of several stages, It consists  
                  It consists of several stages, including issue statement creation, 
                  team discussion, portal update, video presentation,ppt presentaion,
                  and poster presentaion.

                  </motion.p>
                </li>
                {/* <li className="pt-2 ">
                  <motion.p variants={textVariant(0.75)}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </motion.p>
                </li>
                <li className="pt-2 ">
                  <motion.p variants={textVariant(0.75)}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </motion.p>
                </li> */}

                

                
              </ul>

             

            </motion.div> }
        </div>
      </section>
    </>
  );
}

export default SectionWrapper(HomeE, "HomeE");
