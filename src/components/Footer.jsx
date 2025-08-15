import React from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-3xl shadow-inner md:-mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-5 md:px-0'>
        {/* ----- Left Section  ----- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Welcome to <span className='font-semibold text-purple-700'>HealthHive</span> 🌿. 
            Your companion for understanding symptoms, learning health tips, and connecting with medical guidance. 
            We make healthcare simple, accessible, and informative for everyone.
          </p>
        </div>

        {/* ----- Center Section  ----- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-purple-700 cursor-pointer transition-colors'>Home</li>
            <li className='hover:text-purple-700 cursor-pointer transition-colors'>About Us</li>
            <li className='hover:text-purple-700 cursor-pointer transition-colors'>Contact Us</li>
            <li className='hover:text-purple-700 cursor-pointer transition-colors'>Privacy Policy</li>
          </ul>
        </div>

        {/* ----- Right Section  ----- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600 mb-3'>
            <li className='flex items-center gap-2'>
              📞 7000050000
            </li>
            <li className='flex items-center gap-2'>
              ✉️ ritu@gmail.com
            </li>
          </ul>
          <div className='flex gap-4 mt-2 text-purple-700 text-lg'>
            <a href='https://instagram.com' target='_blank'><FaInstagram className='hover:text-pink-500 transition-colors'/></a>
            <a href='https://facebook.com' target='_blank'><FaFacebook className='hover:text-blue-600 transition-colors'/></a>
            <a href='https://twitter.com' target='_blank'><FaTwitter className='hover:text-blue-400 transition-colors'/></a>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2025 @ Ritu - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
