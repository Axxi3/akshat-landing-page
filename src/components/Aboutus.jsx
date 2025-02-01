import React from 'react'
import bullet from "../assets/bullet.svg"
import grid from "../assets/grid.svg"
import VideoCard from "./Subcomponent/VideoCard"

export default function Aboutus() {
  return (
    <div className="About us mt-[150px] flex flex-col gap-[15px] items-center justify-center">
    <div className="w-full flex items-center justify-center gap-2">
      <img src={bullet} alt="" />
    <div className="About us text uppercase text-[25px] text-[#c858ff]">Introducing</div>
    </div>
    <div className=" w-[55%]">
      <p className='text-[42px] tracking-tighter leading-[43px] text-center'>Turning ordinary moments into extraordinary stories with our 
        visually stunning short-form videos tailored specifically to
         your needs to sprinkle some magic onto your brand</p>
    </div>

    <div
className="w-full relative pt-[20px] gap-[20px] flex py-3">

<div className="absolute w-full h-full opacity-50" 
 style={{
  backgroundImage: `url(${grid})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}></div>

<VideoCard/>
<VideoCard/>
<VideoCard/>
<VideoCard/>

</div>
   
  </div>
  )
}
