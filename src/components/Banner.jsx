import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  // Quick category list
  const categories = [
    { name: 'Dentist', icon: '🦷' },
    { name: 'Cardiologist', icon: '❤️' },
    { name: 'Pediatrician', icon: '👶' },
    { name: 'Dermatologist', icon: '💆‍♀️' },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-100 via-pink-100 to-white rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 text-gray-700 shadow-md relative overflow-hidden">
      
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full opacity-30 -z-10"></div>

      {/* Left Side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-800">
          <p>Book Your Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>

        <button
          onClick={() => {
            navigate('/create-account');

            scrollTo(0, 0);
          }}
          className="bg-purple-600 text-white text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:bg-purple-700 hover:scale-105 transition-all shadow hover:shadow-lg"
        >
          Create Account
        </button>

        {/* Unique Categories Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-purple-700 mb-3">🔍 Quick Access Categories</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => navigate(`/find-doctor?speciality=${cat.name.toLowerCase()}`)}
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-purple-50 hover:shadow transition"
              >
                <span>{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative flex items-center justify-end">
        <img
          className="w-full h-auto object-contain"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
