import { RiReactjsLine } from "react-icons/ri";
import { SiMysql, SiLaravel, SiSpringboot, SiQuarkus, SiTensorflow, SiOracle, SiAngular } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[ 
          { Icon: RiReactjsLine, color: "#61DAFB" },
          { Icon: FaNodeJs, color: "#68A063" },
          { Icon: SiMysql, color: "#00758F" },
          { Icon: SiLaravel, color: "#FF2D20" },
          { Icon: SiSpringboot, color: "#6DB33F" },
          { Icon: SiQuarkus, color: "#4695EB" },
          { Icon: SiTensorflow, color: "#FF6F00" },
          { Icon: SiOracle, color: "#F80000" },
          { Icon: SiAngular, color: "#DD0031" }
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
