import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 relative z-50 bg-transparent">
      {/* LOGO */}
      <div className="LOGO">
        <h2 className="text-[26px] font-bold">
          Syncwave<span className="text-[#F7B05B]">Media</span>
        </h2>
      </div>

      {/* Desktop Navigation - Centered */}
      <ul className="hidden lg:flex items-center gap-10 bg-[#1a1a1a] py-3 px-8 rounded-full absolute left-1/2 transform -translate-x-1/2">
        {["Process", "Testimonial", "About us", "FAQs", "Get in Touch"].map(
          (item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="opacity-70 text-[14px] hover:text-[#F7B05B] transition-all duration-200"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[60px] right-0 bg-[#1a1a1a] w-[200px] rounded-lg shadow-lg p-5 flex flex-col items-start"
          >
            {["Process", "Testimonial", "About us", "FAQs", "Get in Touch"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-white py-2 opacity-70 hover:text-[#F7B05B] transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
