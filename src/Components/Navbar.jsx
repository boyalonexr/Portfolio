import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Folder,
  Code2,
  Mail,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", icon: <Home size={22} /> },
    { id: "skills", label: "Skills", icon: <Code2 size={22} /> },
    { id: "about", label: "About", icon: <User size={22} /> },
    { id: "projects", label: "Projects", icon: <Folder size={22} /> },
    { id: "contact", label: "Contact", icon: <Mail size={22} /> },
  ];

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 left-0 w-full z-50 bg- backdrop-blur-md shadow-md font"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* === Logo Section === */}
        <div className="flex items-center gap-2">
          <h1 className="font-bold uppercase text-xl text-white flex items-center">
            Port
            <span className="text-[#3B82F6]">folio</span>
          </h1>
        </div>

        {/* === Desktop Navigation Links === */}
        <div className="hidden md:flex gap-6 text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              className="cursor-pointer transition-all duration-500 hover:text-[#3B82F6]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* === Mobile Navigation Toggle === */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>  
      </div>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-15 right-0 h-screen w-full z-50 bg-black flex flex-col px-6 pt-8 space-y-5 text-gray-200 text-lg md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                variants={linkVariants}
                className="flex items-center gap-3 hover:bg-[#3B82F6]/30 group p-2 rounded-md"
              >
                {link.icon}
                <Link
                  to={link.id}
                  smooth
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer group-hover:text-[#3B82F6] transition-colors w-full"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
