import React from 'react';
import { assets } from '../assets/assets_admin/assets';
import { assets2 } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div
      style={{ backgroundColor: '#4A90E2' }}
      className="flex flex-col md:flex-row justify-between bg-primary rounded-lg  px-6 md:px-10 lg:px-20"
    >
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex items-center gap-4">
          <img className='w-28' src={assets2.group_profiles} alt="Group profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
            schedule your appointments hassle-free
          </p>
        </div>
        <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-60 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
          Book appointment <img className='w-3' src={assets2.arrow_icon} alt="Arrow icon" />
        </a>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 flex justify-end">
        <img
          className="w-full max-w-md h-auto rounded-lg"
          src={assets2.header_img}
          alt="Header image"
        />
      </div>
    </div>
  );
};

export default Header;