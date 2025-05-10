import React from 'react';

import Group from '../assets/Group 1000004135.png';
import Vector from '../assets/Vector 9.png';

// Importing all images properly
import Zacariya from '../assets/zacariya_1.png';
import Fahim from '../assets/fahim_1.jpeg';
import Student3 from '../assets/student_3.jpeg';
import Student4 from '../assets/student_4.jpeg';
import Student2 from '../assets/student_2.jpeg';
import Rect1 from '../assets/Rectangle 34624123.png';
import Rect2 from '../assets/Rectangle 34624124.png';
import Rect3 from '../assets/Rectangle 34624125.png';

const images = [Zacariya, Fahim, Student3, Student4, Student2, Rect1, Rect2, Rect3];

const Ourcommunity = () => {
  const allImages = [...images, ...images]; // Duplicate for seamless scroll

  return (
    <div className="px-4">
      <section className='flex justify-center items-center mt-28'>
        <img src={Group} alt="Group" />
      </section>
      <section className="py-8 overflow-hidden mt-10 pt-0">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Community</h2>
        <img src={Vector} alt="Vector" className='pl-[36%] md:pl-[50%] md:w-[59%] sm:pl-[45%] sm:w-[68%]'/>
        <div className="relative w-full overflow-hidden mt-16">
          <div className="flex w-max animate-scroll space-x-4 px-4">
            {allImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`community-${index}`}
                className="w-64 h-64 object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourcommunity;
