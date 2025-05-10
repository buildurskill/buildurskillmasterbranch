import React from 'react';

import Vector from '../assets/Vector 9.png';
import whyusImage from '../assets/whyus.png'; 

const Whyus = ({ onRegisterClick }) => {
  return (
    <div>
      <section className='flex justify-center items-center mt-28'>
        <img src="/src/assets/Group 1000004135.png" alt="" />
      </section>

      <section className="relative flex flex-col items-center mt-8">
        <h2 className="text-3xl font-bold mb-4">Why Us</h2>
        <img src={Vector} alt="" className='w-[25%] pl-[6%] md:pl-[4%] md:w-[12%] sm:pl-[5%] sm:w-[17%]' />

        <div className="relative w-full max-w-6xl">
          <img src={whyusImage} alt="Why Us" className="w-full h-auto" />
          <button
            onClick={onRegisterClick}
            className="absolute bottom-1 left-6 text-[10px] px-1 py-1 sm:left-16 sm:px-8 sm:py-3 sm:text-base md:left-20 md:bottom-6 md:px-8 md:py-3 bg-white text-black font-medium rounded shadow-md"
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
};


export default Whyus;
