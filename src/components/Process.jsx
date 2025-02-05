import React from 'react'

import bullet from "../assets/bullet.svg"
import process1 from "../assets/process1.svg"
import process2 from "../assets/process2.svg"
import process3 from "../assets/process3.svg"

export default function Process() {
  return (
     <div className="About us mt-[150px] flex flex-col gap-[15px] items-center justify-center">
        <div className="w-full flex items-center justify-center gap-2">
          <img src={bullet} alt="" />
        <div className="About us text uppercase text-[25px] text-[#F7B05B]">How it works</div>
        </div>
        <div className=" lg:w-[55%] md:w-[80%] w-full">
          <p className='text-[42px] tracking-tighter leading-[43px] text-center'>We handle everything, from content creation to platform adaptation</p>
        </div>

        <div className="w-full  flex gap-5 flex-wrap mt-10">
            
            <div className="  bg-[#161616] md:w-[40%] w-full  flex flex-col px-6 py-9 rounded-xl">
              <div className=" rounded-3xl flex w-fit">
                  <img src={process1} alt="" className='w-[95px] h-[95px]' />
              </div>
              <div className="text mt-[30px]">
                <h3 className='text-[26px]  tracking-tight text-[#cccccc]'>Submit your Recording</h3>
                <p className='text-[18px] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.</p>
              </div>


            </div>

            <div className=" bg-[#161616] md:w-[40%] w-full   flex-grow flex flex-col px-6 py-9 rounded-xl">
              <div className=" rounded-3xl  flex w-fit">
                  <img src={process2} alt="" className='w-[95px] h-[95px]' />
              </div>
              <div className="text mt-[30px]">
                <h3 className='text-[26px]  tracking-tight text-[#cccccc]'>Submit your Recording</h3>
                <p className='text-[18px] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.</p>
              </div>


            </div>

            <div className=" bg-[#161616] md:w-[40%] w-full   flex-grow flex flex-col px-6 py-9 rounded-xl">
              <div className=" rounded-3xl  flex w-fit">
                  <img src={process3} alt="" className='w-[95px] h-[95px]' />
              </div>
              <div className="text mt-[30px]">
                <h3 className='text-[26px]  tracking-tight text-[#cccccc]'>Submit your Recording</h3>
                <p className='text-[18px] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.</p>
              </div>


            </div>

            <div className=" bg-[#161616] md:w-[40%] w-full   flex-grow flex flex-col px-6 py-9 rounded-xl">
              <div className=" rounded-3xl  flex w-fit">
                  <img src={process3} alt="" className='w-[95px] h-[95px]' />
              </div>
              <div className="text mt-[30px]">
                <h3 className='text-[26px]  tracking-tight text-[#cccccc]'>Submit your Recording</h3>
                <p className='text-[18px] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.</p>
              </div>


            </div>
            <div className=" bg-[#161616] md:w-[40%] w-full   flex-grow flex flex-col px-6 py-9 rounded-xl">
              <div className=" rounded-3xl  flex w-fit">
                  <img src={process3} alt="" className='w-[95px] h-[95px]' />
              </div>
              <div className="text mt-[30px]">
                <h3 className='text-[26px]  tracking-tight text-[#cccccc]'>Submit your Recording</h3>
                <p className='text-[18px] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.</p>
              </div>


            </div>


        </div>
    
       
       
      </div>
  )
}
