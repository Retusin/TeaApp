import React from 'react';
import {HiOutlineArrowDown} from 'react-icons/hi';

function Hero({heading, message, button}) {
  return (
    <div className="custom-img flex h-screen items-center justify-center bg-cover bg-fixed bg-center">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/70" />
      <div className="z-[2] mt-[-10rem] p-5 text-center text-white">
        <h2 className="mb-3 text-5xl font-bold">{heading}</h2>
        <p className="mb-3 py-5 text-2xl">{message}</p>
        <button className="rounded-xl border px-8 py-2">{button}</button>
      </div>
      <div className="absolute bottom-20 z-10 text-white duration-200 ease-in-out hover:translate-y-2 hover:text-green-400">
        <HiOutlineArrowDown size={50} />
      </div>
    </div>
  );
}

export default Hero;
