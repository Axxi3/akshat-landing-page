import React from 'react';

export default function Bookacall() {
  return (
    <div id='get-in-touch' className='md:mx-[20%] mx-[2%] mt-[100px] flex flex-col gap-3 items-center justify-center bg-[#161616] p-[5%] rounded-3xl'>
      <h1 className='text-[44px] font-medium text-center'>Ready to take your content game to next level</h1>
      <p className='text-[20px] opacity-75 text-center'>
        While others spend hours writing, recording, and editing, you'll have a 24/7 AI version of yourself creating content, building influence, and attracting opportunities—automatically.
      </p>
      <a href="https://calendly.com/akshath007/30min" target="_blank" rel="noopener noreferrer">
        <button className='py-2.5 px-7 rounded-md font-semibold bg-[#BC53F0] text-white mt-[30px]'>
          Book a call
        </button>
      </a>
    </div>
  );
}
