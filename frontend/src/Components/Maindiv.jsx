import React from 'react';

import GroupPic from '../assets/GroupPic.png';
import LifeTime from '../assets/LifeTime.png';
import Hundred from '../assets/100.png';
import Call from '../assets/call.png';


const Maindiv = ({ onRegisterClick }) => {
  return (
    <header className="flex flex-col md:flex-row gap-5 px-4 md:px-10 py-6">

      <section className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mt-10 md:mt-20">
          Learn Create Innovate
        </h1>
        <h2 className="text-2xl md:text-3xl mt-4 md:mt-6">
          The Future of UX Starts here!
        </h2>
        <p className="text-base md:text-lg mt-8 md:mt-14">
          Get Free Consultation From Experts
        </p>

        <button onClick={onRegisterClick} className="bg-mango text-white text-lg md:text-2xl px-4 py-3 mt-6 rounded-md flex gap-3 items-center">
          Request a call back
          <img src={Call} alt="" className="w-[24px] h-[24px] invert"/>
        </button>

        <div className="flex gap-10 mt-10 md:mt-14">
          <img src={LifeTime} alt="Lifetime" className="w-24 md:w-32" />
          <img src={Hundred} alt="100%" className="w-24 md:w-32" />
        </div>
      </section>

      <section className="flex-1">
          <img src={GroupPic} alt="" />
      </section>
    </header>
  );
};

export default Maindiv;
