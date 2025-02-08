import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex relative items-center lg:justify-between justify-center pt-[30px]">
      <div className="LOGO absolute left-0 lg:flex hidden">
        <h2 className="text-[26px]">
          Syncwave<span className="text-[#F7B05B]">Media</span>
        </h2>
      </div>

      <ul className="bg-[#1a1a1a] flex gap-[35px] py-[18px] rounded-4xl px-[45px] mx-auto">
        <li>
          <a href="#process" className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
            Process
          </a>
        </li>
        <li>
          <a href="#testimonial" className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
            Testimonial
          </a>
        </li>
        <li>
          <a href="#about" className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
            About us
          </a>
        </li>
        <li>
          <a href="#FAQ" className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
            Faqs
          </a>
        </li>
        <li>
          <a href="#get-in-touch" className="opacity-70 cursor-pointer text-[14px] hover:text-[#F7B05B] duration-100 transition-all">
            Get in Touch
          </a>
        </li>
      </ul>
    </nav>
  );
}
