import { CONTACT_PT, CONTACT_EN } from "../constants";
import { motion } from "framer-motion";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
    const { language } = useContext(LanguageContext);
    const CONTACT = language === 'PT' ? CONTACT_PT : CONTACT_EN;

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                className="my-10 text-center text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {language === 'PT' ? 'Entre em Contato' : 'Get in Touch'}
            </motion.h1>
            <motion.div
                className="text-center tracking-tighter"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.p
                    className="my-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >{CONTACT.address}</motion.p>
                <motion.p
                    className="my-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >{CONTACT.phoneNo} </motion.p>
                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    className="border-b-2 border-neutral-600 hover:border-purple-500 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    {CONTACT.email}
                </motion.a>
            </motion.div>
        </div>
    );
}

export default Contact;
