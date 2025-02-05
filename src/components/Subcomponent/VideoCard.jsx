import React from 'react';

export default function VideoCard() {
  return (
    <div className="border lg:flex-grow md:w-[45%] w-full items-center justify-center border-white rounded-lg p-3 bg-[#1a1a1a]">
     <img
  src="https://placehold.co/1280x5000"
  alt="Video Thumbnail"
  className="rounded-md h-screen w-full object-cover"
/>


      <div className="flex gap-3 mt-3">
        <img
          src="https://placehold.co/75"
          className="rounded-[100px]"
          alt="Profile"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-[20px] opacity-90">Roson Monses</h3>
          <p className="text-[15px] text-[#c858ff]">60k+ Views</p>
        </div>
      </div>
    </div>
  );
}
