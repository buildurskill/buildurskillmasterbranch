import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


import Group from '../assets/Group 1000004135.png';
import Vector from '../assets/Vector 9.png';

const faqData = [
  {
    question: "1. What is the difference between UX and UI?",
    answer:
      "A UX/UI Design Course teaches you how to design apps and websites that are easy to use, visually appealing, and user-friendly. You'll learn about UI design (how things look) and UX design (how things work).",
  },
  {
    question: "2. What is the role of UX/UI Designers?",
    answer:
      "UX/UI Designers create apps and websites that are easy to use and look great. They focus on making sure users have a smooth and enjoyable experience.",
  },
  {
    question: "3. Who are suitable for this course?",
    answer:
      "This course is perfect for anyone who loves creativity, wants to design apps or websites, or is looking to start or switch to a career in tech.",
  },
  {
    question: "4. What will I learn in the UI/UX design course?",
    answer:
      "You’ll learn to design user-friendly apps and websites, create visually appealing layouts, design fundamentals, and understand user interaction with digital products.",
  },
  {
    question: "5. Do I need any previous design experience to join this course?",
    answer:
      "No prior design experience is required. It’s beginner-friendly and covers everything step by step.",
  },
  {
    question: "6. How will this course help me build a career in UI/UX design?",
    answer:
      "You’ll gain essential UI/UX design skills and work on real-world projects to build a strong portfolio.",
  },
  {
    question: "7. Will I work on real-world projects during the course?",
    answer:
      "Yes, you’ll work on real-world projects that apply your learning and strengthen your portfolio.",
  },
  {
    question: "8. Will I get any certification after completing the course?",
    answer:
      "Yes, you will receive a certification upon completing the course, which can showcase your skills.",
  },
  {
    question: "9. Can I work on personal projects during the course?",
    answer:
      "Yes, you’ll have the opportunity to turn your ideas into real-time projects in a professional way.",
  },
  {
    question: "10. How can I get help if I have questions during the course?",
    answer:
      "You can get help through dedicated support channels like mentors, forums, or live Q&A sessions.",
  },
  {
    question: "11. Will I be able to find a job after completing this course?",
    answer:
      "Yes, this course equips you with skills and a portfolio. We’ll also arrange some interviews.",
  },
  {
    question: "12. How do I get started with enrolling in the course?",
    answer:
      "Click the 'Register Now' button, fill the form, and our team will handle the rest.",
  },
];

const Faqicon = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className='flex justify-center items-center mt-20'>
        <img src={Group} alt="" />
      </section>
      <section className="max-w-4xl mx-auto mt-10 mb-48 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
        <img src={Vector} alt="" className='pl-[41%] w-[65%] pb-10 md:pl-[48%] md:w-[59%] sm:pl-[46%] sm:w-[59%]'/>
        {faqData.map((item, index) => (
          <div key={index} className="border-b py-4">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none"
            >
              <span className="text-gray-800">{item.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-60 mt-2' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faqicon;
