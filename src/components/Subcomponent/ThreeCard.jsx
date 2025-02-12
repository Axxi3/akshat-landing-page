import React from 'react';
import { motion } from "framer-motion";
import process1 from '../../assets/process1.svg';

export default function ThreeCard({ xValue, yValue, tiltValue, fadeValue }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: xValue, y: yValue, rotateY: tiltValue }}
      animate={{ opacity: fadeValue, x: 0, y: 0, rotateY: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className='flex flex-col gap-8 bg-[#1C1C1C] rounded-2xl p-[29px]'
    >
      <div className="">
        <img className='w-[100px] h-[100px]' src={process1} alt="" />
      </div>
      <div className="Text flex flex-col gap-2">
        <h3 className='text-[26px] font-medium'>Grow within Months</h3>
        <p className='text-[18px] opacity-65'>We help you increase your viewership count within a set period</p>
      </div>
    </motion.div>
  );
}
