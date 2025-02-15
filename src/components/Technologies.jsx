import React, { useContext } from "react";

import { RiReactjsLine } from "react-icons/ri";
import { SiLaravel, SiSpringboot, SiQuarkus, SiTensorflow, SiAngular, SiMongodb, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { LanguageContext } from '../context/LanguageContext'; 

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

const Technologies = () => {
  const { language } = useContext(LanguageContext); 
  
  return (
    <div className="border-b border-neutral-800 pb-24 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">{language === 'PT' ? 'Skills' : 'Skills'}</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          { Icon: RiReactjsLine, color: "#61DAFB" },
          { Icon: FaNodeJs, color: "#68A063" },
          { Icon: SiLaravel, color: "#FF2D20" },
          { Icon: SiSpringboot, color: "#6DB33F" },
          { Icon: SiQuarkus, color: "#4695EB" },
          { Icon: SiTensorflow, color: "#FF6F00" },
          { Icon: SiAngular, color: "#DD0031" },
          { Icon: SiMongodb, color: "#47A248" },
          { Icon: RiTailwindCssFill, color: "#06B6D4" },
          { Icon: SiDotnet, color: "#512BD4" },
          { Icon: SiMicrosoftsqlserver, color: "#CC2927" },
        ].map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            custom={index}
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Icon className="text-7xl" style={{ color }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
