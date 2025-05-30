import { EXPERIENCES_PT, EXPERIENCES_EN } from "../constants";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Experience = () => {
    const { language } = useContext(LanguageContext);
    const EXPERIENCES = language === 'PT' ? EXPERIENCES_PT : EXPERIENCES_EN;

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}>
                {language === 'PT' ? 'Percurso Académico' : 'Academic Journey'}
            </motion.h1>

            <div>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}>
                        <div className="w-full lg:w-1/5">
                            <motion.p 
                                className="mb-2 text-sm text-neutral-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                viewport={{ once: true }}
                            >
                                {experience.year}
                            </motion.p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <motion.h6 
                                className="mb-2 font-semibold"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                                viewport={{ once: true }}>
                                {experience.role} - {" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </motion.h6>
                            <motion.p 
                                className="mb-4 text-neutral-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}>
                                {experience.description}
                            </motion.p>
                            <div>
                                {experience.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
