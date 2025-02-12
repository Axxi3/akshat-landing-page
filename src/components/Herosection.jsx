import React from 'react';
import social from "../assets/socialmedia.svg";
import like from "../assets/Likes.svg";
import Pentagon from "../assets/Pentagon.svg";
import Stats from "../assets/stat.svg";
import views from "../assets/views.svg";
import { motion } from "framer-motion";

export default function Herosection() {
  const socialVariants = {
    hidden: { x: -5 },
    visible: {
      x: [0, 3, -3, 0],
      y: [0, -1, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const likeVariants = {
    hidden: { y: 5 },
    visible: {
      x: [0, -2, 2, 0],
      y: [0, 2, -0.5, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const viewsVariants = {
    hidden: { x: 5 },
    visible: {
      x: [0, 1.5, -3.5, 0],
      y: [0, 0.5, -1.5, 0],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const pentagonVariants = {
    hidden: { rotate: 30 },
    visible: {
      rotate: [30, 31, 29, 30],
      x: [0, 1, -1, 0],
      y: [0, -0.5, 0.5, 0],
      transition: {
        duration: 6.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const statsVariants = {
    hidden: { y: -5 },
    visible: {
      x: [0, -1, 1, 0],
      y: [0, 2.5, -2.5, 0],
      transition: {
        duration: 7.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="hero-section relative py-[9%] px-[1%] ">
      <div className=" absolute w-full top-14 right-3 lg:flex hidden items-end justify-end pr-[100px]">
        <motion.img src={social} alt="" variants={socialVariants} initial="hidden" animate="visible" />
      </div>
      <div className=" absolute w-full top-14 left-3 lg:flex hidden items-end justify-start pr-[100px]">
        <motion.img src={like} alt="" variants={likeVariants} initial="hidden" animate="visible" />
      </div>

      <div className=" absolute w-full -bottom-11 left-8 lg:flex hidden items-end justify-start pr-[100px]">
        <motion.img src={views} alt="" variants={viewsVariants} initial="hidden" animate="visible" />
      </div>
      <div className=" absolute rotate-12 w-full -bottom-4 gap-[20px] left-8 flex items-start justify-center pr-[100px]">
        <motion.img src={Pentagon} alt="" variants={pentagonVariants} initial="hidden" animate="visible" />
        <motion.img
          src={Pentagon}
          className='w-[30px] h-[30px]'
          alt=""
          variants={pentagonVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
      <div className=" absolute w-full -bottom-11 right-8 lg:flex hidden items-end justify-end pr-[100px]">
        <motion.img src={Stats} alt="" variants={statsVariants} initial="hidden" animate="visible" />
      </div>
      <div className="hero-text lg:px-[14%]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='md:text-[50px] text-[35px] md:leading-[72px] text-center font-semibold uppercase lg:mt-2 mt-[60px]'>
          We build AI Driven content engines for Entrepreneurs & VC
        </motion.h1>
      </div>
      
      <div className="w-full flex items-center justify-center mt-[30px]">
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className='  py-2.5 px-7 rounded-md font-semibold bg-[#F7B05B] text-white'>
          Book a call
        </motion.button>
      </div>
    </div>
  );
}
