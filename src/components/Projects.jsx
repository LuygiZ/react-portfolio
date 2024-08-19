import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full lg:w-1/4">
                            <motion.img 
                                src={project.image} 
                                alt={project.title} 
                                width={150} 
                                height={150} 
                                className="mb-6 rounded"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4"> 
                            <motion.h6 
                                className="mb-2 font-semibold"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                                viewport={{ once: true }}
                            >
                                {project.title}
                            </motion.h6>
                            <motion.p 
                                className="mb-4 text-neutral-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                                viewport={{ once: true }}
                            >
                                {project.description}
                            </motion.p>
                            <div>
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: techIndex * 0.1 }}
                                        viewport={{ once: true }}
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

export default Projects;
