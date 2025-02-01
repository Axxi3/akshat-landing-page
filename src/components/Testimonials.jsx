import React from 'react'
import bullet from "../assets/bullet.svg"


export default function Testimonials() {
  return (
    <>
      <div className=" relative About us mt-[150px] flex flex-col gap-[15px] py-[40px] items-center justify-center">
        

        <div className="w-full flex items-center justify-center gap-2">
          <img src={bullet} alt="" />
          <div className="About us text uppercase text-[25px] text-[#c858ff]">
            Customer Stories
          </div>
        </div>
        <div className=" w-[75%]">
          <p className="text-[42px] tracking-tighter leading-[43px] text-center">
            Game-changer! Helped me connect with my audience like never before
          </p>
        </div>

        <div className="w-full px-[40px] mt-[80px]">
          <div className="flex gap-[80px] items-center ">
          <div className=" flex flex-col w-fit items-center">
              <p className="text-[18px] opacity-75 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <div className="flex flex-col gap-3 mt-3 items-center">
                <img
                  src="https://placehold.co/75"
                  className="rounded-[100px] w-[80px] h-[80px]"
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Roson Monses</h3>
                  <p className="text-[18px] ">Relationship Coach</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col w-fit items-center pb-[90px]">
              <p className="text-[18px] opacity-75 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <div className="flex flex-col gap-3 mt-3 items-center">
              <img
                  src="https://placehold.co/75"
                  className="rounded-[100px] w-[80px] h-[80px]"
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Roson Monses</h3>
                  <p className="text-[18px] ">Relationship Coach</p>
                </div>
              </div>
            </div>



            <div className=" flex flex-col w-fit items-center">
              <p className="text-[18px] opacity-75 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <div className="flex flex-col gap-3 mt-3 items-center">
              <img
                  src="https://placehold.co/75"
                  className="rounded-[100px] w-[80px] h-[80px]"
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Roson Monses</h3>
                  <p className="text-[18px] ">Relationship Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>


        <div className=" flex items-center gap-[40px] justify-center mt-6">
        <div className="flex flex-col items-center justify-center">
            <h2 className='text-[65px] font-medium'>65783</h2>
            <p className='text-[26px]'>Videos Created</p>
          </div>
          <div className="h-[1px] w-[120px] rotate-90 bg-gradient-to-r from-transparent via-white to-transparent"></div>

          <div className="flex flex-col items-center justify-center">
            <h2 className='text-[65px] font-medium'>10</h2>
            <p className='text-[26px]'>Million + Views</p>
          </div>


          <div className="h-[1px] w-[120px] rotate-90 bg-gradient-to-r from-transparent via-white to-transparent"></div>


          <div className="flex flex-col items-center justify-center">
            <h2 className='text-[65px] font-medium'>143564</h2>
            <p className='text-[26px] font-light'>Total Views Generated</p>
          </div>
        </div>

      </div>
    </>
  );
}
