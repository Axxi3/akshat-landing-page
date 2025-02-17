import { motion, useScroll, useTransform } from "framer-motion";
import './App.css';
import Navbar from './components/Navbar';
import overlay from "./assets/Overlay.svg";
import logoA from "/logoA.png"

import Herosection from './components/Herosection';
import Aboutus from './components/Aboutus';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Bookacall from './components/Bookacall';
import Problem from "./components/Problems";
import cursor from "../public/cursor.svg"
import Stats from "./components/Subcomponent/Stats";

function App() {
  const { scrollYProgress } = useScroll();

  // Scale down the scroll speed (0.5 means half speed)
  const slowScroll = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  return (
    <motion.div style={{ cursor: `url(cursor.svg),auto`,y: slowScroll }} className="relative"
    
    >
      {/* Background Overlay */}
      <div className="absolute w-full flex items-center justify-center">
        <img src={overlay} alt="" />
      </div>

      {/* Sticky Navbar */}
      <div className="sticky w-full z-99">
        <Navbar />
      </div>

      {/* Sections */}
      <Herosection />
      <Aboutus />
      <Process />
      {/* <Testimonials /> */}
      <Stats/>
      <Problem/>
      <FAQs />
      <Bookacall />

      {/* Footer */}
      <div className="flex flex-col gap-5 w-full items-center justify-center p-10">
        <img
          src={logoA}
          className="rounded-[100px] w-[100px] h-[100px]"
          alt="Profile"
        />
        <h1 className="text-[20px]">Connect with us</h1>
        <ul className="flex gap-5">
        <li className="text-[18px] opacity-75">
          <a href="https://www.instagram.com/ainnovate.in?igsh=ZWs0ODE0M29pc24w&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
            
            </li>
            <li className="text-[18px] opacity-75">
          <a href="https://www.linkedin.com/company/ainnovate-in/about/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            
            </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default App;
