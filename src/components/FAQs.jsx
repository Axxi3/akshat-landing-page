import React from "react";
import bullet from "../assets/bullet.svg";
import chevron from "../assets/chevron.svg"

export default function FAQs() {
  return (
    <div className="FAQs mt-[90px] flex flex-col gap-[15px] items-center justify-center">
      <div className="w-full flex items-center justify-center gap-2">
        <img src={bullet} alt="" />
        <div className="About us text-center uppercase text-[25px] text-[#c858ff]">
          FAQS
        </div>
      </div>
      <div className=" w-[55%]">
        <p className="text-[42px] tracking-tighter leading-[43px] text-center">
          Have More Questions?
        </p>
      </div>




      <div className="flex flex-col gap-5 mt-[60px] px-[10%]">
        <div className="FAQs__item p-8 bg-[#161616] rounded-xl"> 
            <div className="question flex items-center justify-between w-full ">
            <h4 className="text-[20px] opacity-90">This is a sample Question</h4>
            <img src={chevron} className="w-[28px] h-[28px] " alt="" />
            </div>
           
            <p className="text-[18px] mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias numquam at eos consectetur voluptatem pariatur fuga nam ullam? Aperiam placeat velit modi beatae rerum perspiciatis recusandae corrupti dolorem, molestiae qui enim quas labore veritatis eligendi suscipit. Consequatur, ad minus porro, optio blanditiis earum officia ut, vero reprehenderit unde fuga suscipit?

            </p>
          
        </div>
        <div className="FAQs__item p-8 bg-[#161616] rounded-xl"> 
            <div className="question flex items-center justify-between w-full ">
            <h4 className="text-[20px] opacity-90">This is a sample Question</h4>
            <img src={chevron} className="w-[28px] h-[28px] " alt="" />
            </div>
           
            
        </div>

        <div className="FAQs__item p-8 bg-[#161616] rounded-xl"> 
            <div className="question flex items-center justify-between w-full ">
            <h4 className="text-[20px] opacity-90">This is a sample Question</h4>
            <img src={chevron} className="w-[28px] h-[28px] " alt="" />
            </div>
           
            
        </div>

        <div className="FAQs__item p-8 bg-[#161616] rounded-xl"> 
            <div className="question flex items-center justify-between w-full ">
            <h4 className="text-[20px] opacity-90">This is a sample Question</h4>
            <img src={chevron} className="w-[28px] h-[28px] " alt="" />
            </div>
           
            
        </div>
      </div>
    </div>
  );
}
