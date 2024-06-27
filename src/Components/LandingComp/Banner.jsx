import { useState } from "react";
import LoginModule from "../LoginComp/Login";

export default function Banner() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevents the default link navigation
    setIsLoginOpen(true);
  };

  const handleCloseClick = () => {
    setIsLoginOpen(false);
  };

    return (
  <section className="relative mx-auto max-w-full sm:static -mt-98 md:-mt-24 2xl:-mt-116 z-10">
  <div>
  <img src='https://i.ibb.co/rtjvLLK/Casino-Roulette-898x598-1-1.png' className="h-[50rem] w-full md:h-full" alt='banner'/>
    <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-1">
       
      <div className="z-20 -mt-80 md:-mt-116 flex flex-col justify-center items-center">
      <svg width="124" height="2" className='absolute md:-ml-148 md:-mt-64 hidden md:block' viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M124 1L0 1" stroke="url(#paint0_linear_75_20)"/>
        <defs>
      <linearGradient id="paint0_linear_75_20" x1="98.0297" y1="31.9994" x2="1.23096" y2="-7.00838" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFD59A"/>
      <stop offset="1" stopColor="#FFD59A" stopOpacity="0.15"/>
      </linearGradient>
      </defs>
      </svg>
      <svg width="124" height="2" className='absolute md:ml-148 md:-mt-64 rotate-180 hidden md:block' viewBox="0 0 124 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M124 1L0 1" stroke="url(#paint0_linear_75_20)"/>
        <defs>
      <linearGradient id="paint0_linear_75_20" x1="98.0297" y1="31.9994" x2="1.23096" y2="-7.00838" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFD59A"/>
      <stop offset="1" stopColor="#FFD59A" stopOpacity="0.15"/>
      </linearGradient>
      </defs>
      </svg>
        <p className="uppercase font-[Montserrat] my-3 md:my-5 text-[#F9DE8F] text-md lg:text-2xl 2xl:text-4xl">
        EXPERIENCE THE RICHNESS
        </p>
        <h1 className="my-3 md:my-5 font-[Cinzel] text-xl lg:text-6xl uppercase 2xl:text-7xl font-bold leading-none tracking-tighter text-white uppercase">
        Your Poker Tour Starts Here!
        </h1>
        <p className="my-3 md:my-5 font-[Cinzel]  capitalize text-[#E5B6B6] text-sm lg:text-2xl 2xl:text-4xl">Win a once-in-a-lifetime exclusive Experience!</p>
        <button onClick={handleLoginClick} className="hover:bg-[#FFE9CA] hover:border-[#FFE9CA] hover:text-black md:my-4 font-[Cinzel] inline-block uppercase rounded-[0.8rem] border border-[#FE0308] bg-transparent text-md lg:text-lg 2xl:text-xl px-8 py-3 text-center font-medium text-white">
            sign up 
        </button>
        {isLoginOpen && <LoginModule onClose={handleCloseClick} />}
      </div>
    </div>
  </div>
  </section>
  )}
  