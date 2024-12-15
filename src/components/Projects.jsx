import { PROJECTS_PT, PROJECTS_EN } from "../constants";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Projects = () => {
    const { language } = useContext(LanguageContext);
    const PROJECTS = language === 'PT' ? PROJECTS_PT : PROJECTS_EN;

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}>
                {language === 'PT' ? 'Alguns Projetos Desenvolvidos' : 'Some Developed Projects'}
            </motion.h1>

            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}>
                        <div className="w-full lg:w-1/4 flex justify-center">
                            <motion.img 
                                src={project.image} 
                                alt={project.title} 
                                width={300} 
                                height={150} 
                                className="mb-6 rounded"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                viewport={{ once: true }}/>
                        </div>

                        <div className="w-full max-w-xl lg:w-3/4"> 
                            <div className="flex items-center mb-2 px-2 py-1">
                                <motion.h6 
                                    className="font-semibold"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                                    viewport={{ once: true }}>
                                    {project.title}
                                </motion.h6>

                                {project.link && (
                                    <motion.p 
                                        className="ml-4 text-blue-500"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                                        viewport={{ once: true }}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {language === 'PT' ? 'Visita o site aqui' : 'Visit the site here'}
                                        </a>
                                    </motion.p>
                                )}
                            </div>

                            <motion.p 
                                className="mb-4 text-neutral-400 px-2 py-1"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                                viewport={{ once: true }}>
                                {project.description}
                            </motion.p>

                            <div className="flex flex-wrap px-2 py-1">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                        viewport={{ once: true }}>
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

export default Projects;
