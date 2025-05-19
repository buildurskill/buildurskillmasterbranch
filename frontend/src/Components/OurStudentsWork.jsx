import React from 'react';

import Vector from '../assets/Vector 9.png';
import PortFolio1 from '../assets/COVER.png';
import PortFolio2 from '../assets/Wealthy Main page.png';
import PortFolio3 from '../assets/Landing page.png';
import PortFolio4 from '../assets/Gum Thumbnail 1.png';
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
            PortFolio's
        </h1>
        
        <img src={Vector} alt="" className='pl-[40%] w-[70%] md:pl-[47%] md:w-[55%] sm:pl-[50%] sm:w-[68%]'/>
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
            
            {/* <section className="hidden md:flex min-w-[250px] flex-col items-start justify-center max-h-[max-content]">
              <img src={Lavanya} alt="student" className="rounded-lg w-full max-w-xs" />
              <p className="font-bold mt-2">Hema</p>
              <p>UI/UX Designer</p>
              <p><span className="font-bold">Place :</span> TCS</p> }
              <a href="#" className="flex items-center mt-2 w-10">
                <img src={BehanceLogo} alt="Behance" className="w-5 h-5 object-contain" />
                <span className="text-[#006DD9] text-sm font-medium ml-2 whitespace-nowrap">View Profile</span>
              </a>
            </section> */}

            {/* Project Section */}
            <section className="flex items-center justify-center max-h-[max-content]">
              <a href="https://www.behance.net/gallery/208353929/WealthyWAY-Case-Study">
                <img src={PortFolio2} alt="project" className="rounded-lg w-full max-w-2xl" />
              </a>
            </section>
          </div>


          {/* Card 2 */}
          <div className="flex flex-col justify-center md:flex-row w-screen flex-shrink-0 snap-start px-6">
            {/* Profile Section */}
            {/* <section className="hidden md:flex min-w-[250px] flex-col items-start justify-center max-h-[max-content]">
              <img src={Lavanya} alt="student" className="rounded-lg w-full max-w-xs" />
              <p className="font-bold mt-2">Nisha</p>
              <p>UI/UX Designer</p>
              {<p><span className="font-bold">Place :</span> TCS</p>}
              <a href="#" className="flex items-center mt-2 w-10">
                <img src={BehanceLogo} alt="Behance" className="w-5 h-5 object-contain" />
                <span className="text-[#006DD9] text-sm font-medium ml-2 whitespace-nowrap">View Profile</span>
              </a>
            </section> */}

            {/* Project Section */}
            <section className="flex items-center justify-center max-h-[max-content]">
              <a href="https://www.behance.net/gallery/208912981/Fitwave-Case-Study">
                <img src={PortFolio4} alt="project" className="rounded-lg w-full max-w-2xl" />
              </a>
            </section>
          </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center md:flex-row w-screen flex-shrink-0 snap-start px-6">
            {/* Profile Section */}
            {/* <section className="hidden md:flex min-w-[250px] flex-col items-start justify-center max-h-[max-content]">
              <img src={Lavanya} alt="student" className="rounded-lg w-full max-w-xs" />
              <p className="font-bold mt-2">Nisha</p>
              <p>UI/UX Designer</p>
              {<p><span className="font-bold">Place :</span> TCS</p>}
              <a href="#" className="flex items-center mt-2 w-10">
                <img src={BehanceLogo} alt="Behance" className="w-5 h-5 object-contain" />
                <span className="text-[#006DD9] text-sm font-medium ml-2 whitespace-nowrap">View Profile</span>
              </a>
            </section> */}

            {/* Project Section */}
            <section className="flex items-center justify-center max-h-[max-content]">
              <a href="https://www.behance.net/gallery/205616563/Pawsitive">
              <img src={PortFolio3} alt="project" className="rounded-lg w-full max-w-2xl" /></a>
            </section>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-center md:flex-row w-screen flex-shrink-0 snap-start px-6">
            {/* <section className="hidden md:flex min-w-[250px] flex-col items-start justify-center max-h-[max-content]">
              <img src={Lavanya} alt="student" className="rounded-lg w-full max-w-xs" />
              <p className="font-bold mt-2">Nisha</p>
              <p>UI/UX Designer</p>
              {<p><span className="font-bold">Place :</span> TCS</p>}
              <a href="#" className="flex items-center mt-2 w-10">
                <img src={BehanceLogo} alt="Behance" className="w-5 h-5 object-contain" />
                <span className="text-[#006DD9] text-sm font-medium ml-2 whitespace-nowrap">View Profile</span>
              </a>
            </section> */}

            <section className="flex items-center justify-center max-h-[max-content]">
              <a href="https://www.behance.net/gallery/214528417/FLOW-TASK">
                <img src={PortFolio1} alt="project" className="rounded-lg w-full max-w-2xl" />
              </a>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurStudentsWork;