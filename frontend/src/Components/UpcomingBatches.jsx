import React from 'react';

import GroupPic from '../assets/Group 1000004135.png';
import Vector from '../assets/Vector 9.png';
import Calendar from '../assets/calender.png';


const UpcomingBatches = ({onRegisterClick}) => {
  return (
    <div className="px-4">

      <section className='flex justify-center items-center mt-28'>
        <img src={GroupPic} alt="" />
      </section>
      <section className="">
        <h1 className='flex justify-center text-2xl sm:text-3xl font-bold mt-16 sm:mt-20 md:mt-10 text-center'>
          Upcoming Batches
        </h1>

        <img src={Vector} alt="" className='pl-[34%] md:pl-[50%] md:w-[59%] sm:pl-[45%] sm:w-[69%]'/>
      </section>

      <section className="flex flex-col lg:flex-row justify-center mt-20 gap-10 lg:gap-10">
        {/* Card Component */}
        {[
          { title: 'Weekday Batch' },
          { title: 'Weekend Batch - 1' },
          { title: 'Weekend Batch - 2' },
        ].map((batch, index) => (
          <section key={index} className="max-w-md mx-auto">
            <section className="text-xl sm:text-2xl font-bold text-center bg-mango rounded-[5px] p-4">
              {batch.title}
            </section>

            <section className="bg-[#fff8e6] p-6 rounded-b-[5px] shadow-md">
              <div className="flex items-center gap-4 text-xl sm:text-2xl font-bold justify-center">
                <img src={Calendar} alt="Calendar" className="w-8 h-8" />
                September Batch
              </div>

              <div className="pt-6 text-[#555] text-sm sm:text-base text-center">
                <p>Get Free Consultation From Experts</p>
                <p>and attend a Free Demo session</p>
              </div>

              <div className="flex justify-center">
                <button onClick={onRegisterClick} className="bg-mango text-white text-base sm:text-lg px-4 py-2 mt-6 rounded-md flex gap-2 items-center">
                  Request a Call Back
                </button>
              </div>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
};

export default UpcomingBatches;
