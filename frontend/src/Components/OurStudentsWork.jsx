import React from 'react';

import Vector from '../assets/Vector 9.png';
import Lavanya from '../assets/Lavanya.png';
import PortFolio1 from '../assets/portfolio1.png';
import PortFolio2 from '../assets/PortFolio2.png';
import PortFolio3 from '../assets/PortFolio3.png';
import LinkedIn from '../assets/linkedin.png';
import StudentsWorkIcon from '../assets/StudentsWorkIcon.png';


const OurStudentsWork = () => {
  return (
    <div className="px-0">

    <section className='flex justify-center items-center mt-28'>
        <img src={StudentsWorkIcon} alt="" />
    </section>
      {/* Heading */}
      <section >
        <h1 className="flex justify-center text-3xl font-bold mt-10">
            Our Students Work
        </h1>
        
        <img src={Vector} alt="" className='pl-[40%] w-[88%] md:pl-[50%] md:w-[59%] sm:pl-[50%] sm:w-[68%]'/>
      </section>

      {/* Scrollable full-screen slider */}
      <div
        className="mt-10 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex w-max">

        {/* Card 1 */}
          <div className="flex flex-col justify-center md:flex-row w-screen flex-shrink-0 snap-start px-6">
            {/* Profile Section */}
            <section className="hidden md:flex min-w-[250px] flex-col items-start justify-center max-h-[max-content]">
              <img src={Lavanya} alt="student" className="rounded-lg w-full max-w-xs" />
              <p className="font-bold mt-2">Nisha</p>
              <p>UI/UX Designer</p>
              <p><span className="font-bold">Place :</span> TCS</p>
              <a href="#" className="text-[#006DD9] flex items-center gap-1 mt-2">
                <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5" />
                <span>View Profile</span>
              </a>
            </section>

            {/* Project Section */}
            <section className="flex items-center justify-center max-h-[max-content]">
              <img src={PortFolio2} alt="project" className="rounded-lg w-full max-w-2xl" />
            </section>
          </div>


          {/* Card 2 */}
          <div className="flex flex-col justify-center md:flex-row w-screen flex-shrink-0 snap-start px-6">
            <section className="hidden md:flex min-w-[250px] flex-col items-start justify-center max-h-[max-content]">
              <img src={Lavanya} alt="student" className="rounded-lg w-full max-w-xs" />
              <p className="font-bold mt-2">Nisha</p>
              <p>UI/UX Designer</p>
              <p><span className="font-bold">Place :</span> TCS</p>
              <a href="#" className="text-[#006DD9] flex items-center gap-1 mt-2">
                <img src="/src/assets/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                <span>View Profile</span>
              </a>
            </section>
            <section className="flex items-center justify-center max-h-[max-content]">
              <img src={PortFolio1} alt="project" className="rounded-lg w-full max-w-2xl" />
            </section>
          </div>
          

          

        {/* Card 3 */}
        <div className="flex flex-col justify-center md:flex-row w-screen flex-shrink-0 snap-start px-6">
            {/* Profile Section */}
            <section className="hidden md:flex min-w-[250px] flex-col items-start justify-center max-h-[max-content]">
              <img src={Lavanya} alt="student" className="rounded-lg w-full max-w-xs" />
              <p className="font-bold mt-2">Nisha</p>
              <p>UI/UX Designer</p>
              <p><span className="font-bold">Place :</span> TCS</p>
              <a href="#" className="text-[#006DD9] flex items-center gap-1 mt-2">
                <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5" />
                <span>View Profile</span>
              </a>
            </section>

            {/* Project Section */}
            <section className="flex items-center justify-center max-h-[max-content]">
              <img src={PortFolio3} alt="project" className="rounded-lg w-full max-w-2xl" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStudentsWork;
