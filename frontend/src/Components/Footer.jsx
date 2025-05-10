import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = ({onRegisterClick}) => {
  return (
    <footer className="bg-[#f5a623] text-black py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Box */}
        <div className="bg-white rounded-[2rem] shadow-xl border-4 border-[#f5a623] p-6 sm:p-10 text-center relative z-10 -mt-32 sm:-mt-40">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-md leading-snug sm:leading-tight">
            Unlock The Creative Skill With Us<br />
            Build Your Career In UX
          </h1>
          <p className="text-black mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
            "Master UX Design Essentials And Tools To Create User-Friendly Experiences."<br />
            Build Your Skills And Launch Your UX Career With Expert Guidance."
          </p>
          <button onClick={onRegisterClick} className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold rounded-full shadow-lg text-sm sm:text-base">
            Register Now
          </button>
        </div>

        {/* Footer Content */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm border-t border-black pt-6 gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Gallery</a>
            <a href="#" className="hover:underline">Students Work</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
  {/* Phone Link */}
  <a
    href="tel:+919940257003"
    className="flex items-center gap-2 text-blue-600 hover:underline"
  >
    <Phone size={16} />
    <span>+91-9940257003</span>
  </a>

  {/* Email Link */}
  <a
    href="mailto:teambuildurskill@gmail.com"
    className="flex items-center gap-2 text-blue-600 hover:underline"
  >
    <Mail size={16} />
    <span>teambuildurskill@gmail.com</span>
  </a>
</div>
        </div>

        <div className="text-center text-black font-semibold mt-4 text-xs sm:text-sm">
          Copyright 2024. <span className="font-bold">BuildurSkill School</span>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
