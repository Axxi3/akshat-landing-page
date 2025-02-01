import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex relative items-center  justify-between pt-[30px]">
      <div className="LOGO absolute left-0">
        <h2 className="text-[26px]">
          Syncwave<span className="text-[#F7B05B]">Media</span>
        </h2>
      </div>

      <ul className="bg-[#1a1a1a] flex gap-[35px] py-[18px] rounded-4xl px-[45px] mx-auto">
        <li className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
          Process
        </li>
        <li className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
          Testimonial
        </li>
        <li className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
          Features
        </li>
        <li className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
          Faqs
        </li>
        <li className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
          Get in Touch
        </li>
      </ul>
    </nav>
  );
}
