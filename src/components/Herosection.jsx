import React from 'react'
import social from "../assets/socialmedia.svg"
import like from "../assets/Likes.svg"
import Pentagon from "../assets/Pentagon.svg"
import Stats from "../assets/stat.svg"
import views from "../assets/views.svg"


import { motion } from "framer-motion";

export default function Herosection() {
  return (
    <div className="hero-section relative py-[9%] px-[1%] ">
    <div className=" absolute w-full top-20 right-8 lg:flex hidden items-end justify-end pr-[100px]">
      <img src={social} alt="" />
    </div>
    <div className=" absolute w-full top-20 left-8 lg:flex hidden items-end justify-start pr-[100px]">
      <img src={like} alt="" />
    </div>

    <div className=" absolute w-full -bottom-11 left-8 lg:flex hidden items-end justify-start pr-[100px]">
      <img src={views} alt="" />
    </div>
    <div className=" absolute rotate-12 w-full -bottom-4 gap-[20px] left-8 flex items-start justify-center pr-[100px]">
      <img src={Pentagon} alt="" />
      <img src={Pentagon} className='w-[30px] h-[30px]' alt="" />
    </div>
    <div className=" absolute w-full -bottom-11 right-8 lg:flex hidden items-end justify-end pr-[100px]">
      <img src={Stats} alt="" />
    </div>
    <div className="hero-text lg:px-[14%]">
    <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      className='text-[50px] leading-[72px] text-center font-semibold uppercase lg:mt-2 mt-[60px]'>Tailored Short-Form Videos for Online Coaches & Business Owners </motion.h1>
    </div>
    <motion.p 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    className='mt-[15px] leading-6 opacity-70 md:px-[14%] text-[16px] text-center'>Whether you're a relationship coach, fitness coach or a business owner, our expert team specializes in creating 
      content that inspire action and drive results to establish you as market leader in your niche.</motion.p>
      <div className="w-full flex items-center justify-center mt-[30px]">
      <motion.button
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      className='  py-2.5 px-7 rounded-md font-semibold bg-[#F7B05B] text-white'>Book a call</motion.button>
      </div>

      
  </div>
  )
}
