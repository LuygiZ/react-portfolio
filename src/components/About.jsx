import Lottie from 'react-lottie';
import aboutImage from "../assets/LuisAbout4.1.png";
import { ABOUT_TEXT_PT, ABOUT_TEXT_EN } from "../constants";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import personAnimation from '../animations/person.json'; // Importa a animação de uma pessoa

const About = () => {
  const { language } = useContext(LanguageContext);
  const ABOUT_TEXT = language === 'PT' ? ABOUT_TEXT_PT : ABOUT_TEXT_EN;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: personAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="relative border-b border-neutral-900 pb-4">
      <motion.h1 
        className="my-10 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        {language === 'PT' ? 'Sobre' : 'About'} <span className="text-neutral-500"> {language === 'PT' ? 'Mim' : 'Me'}</span>
      </motion.h1>

      {/* Animação ao lado do título "Sobre Mim" */}
      <div className="absolute top-0 right-0 mt-10 mr-10">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          
          <div className="relative w-3/4 lg:w-2/3">
            <motion.img 
              src={aboutImage} 
              alt="about" 
              className="w-full h-full object-cover"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 flex items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="px-8 lg:px-16">
            <motion.p 
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}>
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
