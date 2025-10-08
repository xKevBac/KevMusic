import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import pic from '../assets/DrawingMe.png'

const Intro = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };
  
  return (
<div
  onClick={handleClick}
  className={`relative h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f2c] to-[#1e3a8a] transition-opacity duration-1000 
    ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
>
      {/* Floating music notes */}
      <div className="absolute top-10 left-10 text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266A'}</div>
      <div className="absolute top-20 right-16 text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266B'}</div>
      <div className="absolute bottom-20 left-24 text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266C'}</div>
      <div className="absolute bottom-10 right-10 text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u2669'}</div>
      <div className="absolute top-[30%] left-[15%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266F'}</div>
      <div className="absolute top-[50%] right-[20%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266E'}</div>
      <div className="absolute bottom-[40%] left-[30%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266D'}</div>
      <div className="absolute top-[15%] right-[35%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266A'}</div>
      <div className="absolute bottom-[25%] right-[15%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266C'}</div>
      <div className="absolute top-[40%] left-[45%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266B'}</div>
      <div className="absolute top-[10%] right-[10%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u2669'}</div>
      <div className="absolute bottom-[10%] left-[10%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266A'}</div>
      <div className="absolute top-[60%] right-[40%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266F'}</div>
      <div className="absolute top-[25%] left-[60%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266C'}</div>
      <div className="absolute bottom-[15%] right-[25%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266B'}</div>
      <div className="absolute top-[18%] left-[22%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266D'}</div>
      <div className="absolute bottom-[30%] right-[30%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u266A'}</div>
      <div className="absolute top-[35%] left-[5%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266B'}</div>
      <div className="absolute bottom-[45%] right-[50%] text-white text-2xl md:text-4xl opacity-50 animate-floatSlow">{'\u2669'}</div>
      <div className="absolute top-[70%] left-[70%] text-white text-xl md:text-3xl opacity-50 animate-floatSlow">{'\u266C'}</div>
      
      {/* Circle + wave pulse */}
      <div className="relative w-64 h-64 mb-6">
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full border border-white opacity-50 animate-ping"></div>
        <div className="absolute inset-0 rounded-full border border-white opacity-25 animate-ping delay-50"></div>
        <div className="absolute inset-0 rounded-full border border-white opacity-25 animate-ping delay-100"></div>
        <div className="absolute inset-0 rounded-full border border-white opacity-25 animate-ping delay-160"></div>


        {/* Circular spinning image */}
        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center animate-slowSpin relative z-10">
          <img
            src={pic}
            alt="Circle"
            className="w-full h-full border-8 border-gray-500 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Welcome message */}
      <h1 className="text-white font-bold text-5xl animate-wave text-center z-10">
        Welcome <span className='text-[#4cc7d2]'>Kevin</span>, Your vibe awaits!
      </h1>
      <p className="text-white opacity-70 text-lg mt-10 text-center z-10 cursor-pointer hover:text-[#4cc7d2]">
        Click to Enter
      </p>
    </div>
  );
};

export default Intro;