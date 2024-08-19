import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/LuisProfile3.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.div 
        className="flex flex-wrap lg:flex-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Luís Santos
            </motion.h1>
            <motion.span 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }} 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Student At Polytechnic Institute of Leiria
            </motion.span>
            <motion.p 
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0 relative z-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center lg:justify-end">
            <motion.img 
              src={profilePic} 
              alt="Luis Santos" 
              className="w-full max-w-xs lg:max-w-none lg:w-100 lg:h-85 -mt-12 lg:-mt-60"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{ zIndex: -1 }}  // Ensure it doesn't overlap with navbar
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
