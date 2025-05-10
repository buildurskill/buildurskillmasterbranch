import React, { useState } from 'react';
import Hamburger from '../assets/Hamburger.png';
import BrandLogo from '../assets/brandlogo-modified.png';

const Nav = ({onRegisterClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 relative z-50 bg-white shadow-sm">
      
      {/* Brand */}
      <div className="flex items-center">
        <img
          src={BrandLogo}
          alt="Brand Logo"
          className="w-10 sm:w-12 mr-2"
        />
        <span className="text-xl sm:text-2xl font-bold text-mango">BUILDURSKILL</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-10 text-sm sm:text-base">
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li onClick={onRegisterClick} className="bg-mango text-white px-4 py-1 rounded-md cursor-pointer">REGISTER NOW</li>
        <li className="bg-cyan-700 text-white px-4 py-1 rounded-md cursor-pointer">CALL NOW</li>
      </ul>

      {/* Hamburger Icon (Always visible on mobile) */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <img src={Hamburger} alt="Menu" width={25} height={25} />
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <button onClick={closeMenu} className="self-end text-xl font-bold">×</button>
          <li className="list-none">Home</li>
          <li className="list-none">PORTFOLIO</li>
          <li onClick={onRegisterClick} className="bg-mango text-white px-4 py-1 rounded-md cursor-pointer list-none">REGISTER NOW</li>
          <li className="bg-cyan-700 text-white px-4 py-1 rounded-md cursor-pointer list-none">CALL NOW</li>
        </div>
      </div>
    </header>
  );
};

export default Nav;
