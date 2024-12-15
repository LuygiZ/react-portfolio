import Lottie from 'react-lottie';
import aboutImage from "../assets/LuisAbout4.1.png";
import { ABOUT_TEXT_PT, ABOUT_TEXT_EN } from "../constants";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
  const { language } = useContext(LanguageContext);
  const ABOUT_TEXT = language === 'PT' ? ABOUT_TEXT_PT : ABOUT_TEXT_EN;

  return (
    <div className="relative border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-10 text-center text-4xl relative z-20" // Texto com z-index maior
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {language === 'PT' ? 'Sobre' : 'About'}
        <span className="text-neutral-500"> {language === 'PT' ? 'Mim' : 'Me'}</span>
      </motion.h1>

      <div className="flex flex-wrap lg:flex-nowrap relative z-20">
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-3/4 lg:w-2/3">
            <motion.img
              src={aboutImage}
              alt="about"
              className="w-full h-full object-cover relative z-20"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex items-center relative z-20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="px-8 lg:px-16">
            <motion.p
              className="my-2 max-w-xl py-6 relative z-20 text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {ABOUT_TEXT}
            </motion.p>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
