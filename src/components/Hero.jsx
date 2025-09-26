import { HERO_CONTENT_PT, HERO_CONTENT_EN } from "../constants";
import profilePic from "../assets/Luís_Santos.png";
import iplLogo from "../assets/ipl.png";
import isepLogo from "../assets/isep.png";
import udemyLogo from "../assets/udemy.png";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const HERO_CONTENT = language === 'PT' ? HERO_CONTENT_PT : HERO_CONTENT_EN;

  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.div 
        className="flex flex-wrap lg:flex-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}>
        
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <div className="flex flex-col items-center lg:items-start">

            <motion.div
              className="flex justify-center lg:justify-start items-center space-x-8 mb-8 mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img src={iplLogo} alt="Polytechnic of Leiria" className="h-16 lg:h-20" />
              <img src={udemyLogo} alt="Udemy" className="h-12 lg:h-16" />
              <img src={isepLogo} alt="ISEP" className="h-12 lg:h-16" />
            </motion.div>

            <motion.h1 
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              Luís Santos
            </motion.h1>

            <div className="text-center">
              <motion.span 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}>
                Licenciado em Engenharia Informática
              </motion.span>

              <motion.span 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}>
                Mestrado em progresso...
              </motion.span>
            </div>

            <motion.p 
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0 relative z-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <div className="flex justify-center lg:justify-end">
            <motion.img 
              src={profilePic} 
              alt="Luis Santos" 
              className="w-full max-w-xs lg:max-w-none lg:w-100 lg:h-85 -mt-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{ zIndex: -1 }}/>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
