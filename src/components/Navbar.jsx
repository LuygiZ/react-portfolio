import logo from "../assets/LuisLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.linkedin.com/in/lu%C3%ADs-santos-434376281/" target="_blank" rel="noopener noreferrer">
          <img className="mx-2 w-20" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
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
      </div>
    </nav>
  );
}

export default Navbar;
