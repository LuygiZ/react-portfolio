import aboutImage from "../assets/LuisAbout.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}  // Animation triggers once when in view
      >
        About <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}  // Animation triggers once when in view
        > 
          <motion.img 
            src={aboutImage} 
            alt="about" 
            className="w-3/4 lg:w-2/3"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}  // Animation triggers once when in view
          />
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 flex items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}  // Animation triggers once when in view
        >
          <div className="px-8 lg:px-16">
            <motion.p 
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}  // Animation triggers once when in view
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
