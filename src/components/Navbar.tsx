import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Stack", href: "#stack" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          IJ INTERNATIONAL<span className="text-blue-500">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <Linkedin className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Github className="w-6 h-6" />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
