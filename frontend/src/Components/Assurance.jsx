import React from 'react';

import Assurance1 from '../assets/assurance1.png';
import Assurance2 from '../assets/assurance2.png';
import Assurance3 from '../assets/assurance3.png';


const Assurance = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-20 lg:mt-28 gap-y-10 md:gap-x-20 lg:gap-x-52 bg-white px-4">
      <img
        src={Assurance1}
        alt="Assurance_1"
        className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg"
      />
      <img
        src={Assurance2}
        alt="Assurance_2"
        className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg"
      />
      <img
        src={Assurance3}
        alt="Assurance_3"
        className="w-40 sm:w-48 md:w-56 lg:w-64 rounded-lg"
      />
    </section>
  );
};

export default Assurance;
