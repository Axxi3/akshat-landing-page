import React, { useState } from "react";
import { motion } from "framer-motion";
import bullet from "../assets/bullet.svg";
import chevron from "../assets/chevron.svg";

const faqs = [
  {
    question: "This is a sample Question 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias numquam at eos consectetur voluptatem pariatur fuga nam ullam?",
  },
  {
    question: "This is a sample Question 2",
    answer:
      "Aperiam placeat velit modi beatae rerum perspiciatis recusandae corrupti dolorem, molestiae qui enim quas labore veritatis eligendi suscipit.",
  },
  {
    question: "This is a sample Question 3",
    answer:
      "Consequatur, ad minus porro, optio blanditiis earum officia ut, vero reprehenderit unde fuga suscipit?",
  },
  {
    question: "This is a sample Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, neque?",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="FAQs mt-[90px] flex flex-col gap-[15px] items-center justify-center">
      {/* Section Heading */}
      <div className="w-full flex items-center justify-center gap-2">
        <img src={bullet} alt="" />
        <div className="text-center uppercase text-[25px] text-[#F7B05B]">
          FAQS
        </div>
      </div>
      <div className="w-[55%]">
        <p className="text-[42px] tracking-tighter leading-[43px] text-center">
          Have More Questions?
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-5 mt-[60px] lg:px-[10%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="FAQs__item p-6 bg-[#161616] rounded-xl cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex items-center justify-between w-full">
              <h4 className="text-[20px] opacity-90">{faq.question}</h4>
              <motion.img
                src={chevron}
                className="w-[28px] h-[28px]"
                alt=""
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Answer (Expanding & Collapsing) */}
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-3"
            >
              <p className="text-[18px] opacity-75">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
