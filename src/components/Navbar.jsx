import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ALL DOCTORS', path: '/doctors' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'SYMPTOM CHECKER', path: '/symptom-checker' },
      { name: 'AI HEALTH PREDICTOR', path: '/ai-health' } 
  ];

  return (
    <div className='flex items-center justify-between text-sm py-5 px-4 md:px-10 mb-5 border-b border-b-purple-700 bg-white shadow-md'>
      <img
        onClick={() => navigate('/')}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt='Logo'
      />

      {/* Nav Links */}
      <ul className='hidden md:flex items-center gap-8 font-medium text-gray-700'>
        {navLinks.map((link) => (
          <NavLink key={link.name} to={link.path} className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:text-purple-700 ${
              isActive ? 'bg-purple-200 text-purple-800 font-semibold' : ''
            }`
          }>
            {link.name}
          </NavLink>
        ))}
      </ul>

      {/* User Profile / Account */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-10 rounded-full' src={assets.profile_pic} alt='Profile' />
            <img className='w-3' src={assets.dropdown_icon} alt='Dropdown' />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg'>
                <p onClick={() => navigate('my-profile')} className='hover:text-pink-500 cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-pink-500 cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-pink-500 cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-300'
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
