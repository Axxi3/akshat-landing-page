import React, { useState } from "react";
import { motion } from "framer-motion";
import bullet from "../assets/bullet.svg";
import chevron from "../assets/chevron.svg";

const faqs = [
  {
    question: "How does this compare to hiring a content agency or ghostwriter?",
    answer:
      "Unlike a ghostwriter or agency, where you still need to provide input, approve drafts, and record content, our AI model learns your patterns and speech delivery—then creates content for you indefinitely. You CREATE an asset for a lifetime that will generate content for you without ever needing you. You might occasionally record B-rolls, but that’s it. Train once, automate forever.",
  },
  {
    question: "How much time does it take to train your AI model?",
    answer:
      "We can start with as little as training it in 1 day, but we recommend around 1 week.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a quick call with us. We’ll discuss your goals and see if we can genuinely help you. If we’re a good fit, we start to train the AI on your voice and style, and start generating content immediately.",
  },
  {
    question: "How often will you post content for me?",
    answer:
      "We offer flexible posting schedules—ranging from weekly to daily, based on your goals.",
  },
  {
    question: "Is my voice and data secure?",
    answer:
      "Yes. We follow strict security protocols to protect your data. Your voice model cannot be accessed or used by anyone else.",
  },
  {
    question: "Who owns the AI-generated content?",
    answer:
      "You do. Every post, video, and insight remains 100% your intellectual property.",
  },
  {
    question: "Can I batch-create content for the entire month?",
    answer:
      "Yes. We can generate and schedule weeks of content in advance, ensuring you stay visible while focusing on your business.",
  },
];


export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="FAQs mt-[90px] flex flex-col gap-[15px] items-center justify-center">
      {/* Section Heading */}
      <div className="w-full flex items-center justify-center gap-2">
        <img src={bullet} alt="" />
        <div className="text-center uppercase lg:text-[25px] text-[#BC53F0]">
          FAQS
        </div>
      </div>
      <div className="lg:w-[35%] w-[60%]">
        <p className="text-[42px] tracking-tighter leading-[43px] text-center">
          Have More Questions?
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-5 mt-[60px] lg:px-[13%]">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`FAQs__item p-6 rounded-xl cursor-pointer transition-colors duration-300 ${
              openIndex === index ? "bg-[#292929]" : ""
            }`}
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }} // Small hover effect
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
