import React, { useContext } from 'react';
import logo from "../assets/LuisLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { LanguageContext } from '../context/LanguageContext'; // Importe o contexto

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); // Consuma o contexto

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.linkedin.com/in/lu%C3%ADs-santos-434376281/" target="_blank" rel="noopener noreferrer">
          <img className="mx-2 w-20" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/lu%C3%ADs-santos-434376281/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/LuygiZ" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/luiiss_santoss/?hl=pt" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/LuisSantoss17" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        {/* Botão de alternância de idioma no estilo dos ícones */}
        <div className="flex items-center gap-2">
          <button
            className={`text-2xl ${language === 'PT' ? 'text-blue-500' : 'text-white'} hover:text-blue-500`}
            onClick={toggleLanguage}>
            PT
          </button>
          <span className="text-gray-400">|</span>
          <button
            className={`text-2xl ${language === 'EN' ? 'text-blue-500' : 'text-white'} hover:text-blue-500`}
            onClick={toggleLanguage}>
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
