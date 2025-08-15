import React, { useState } from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered data based on search term
  const filteredData = specialityData.filter(item =>
    item.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="flex flex-col items-center gap-6 py-16 text-gray-700 relative"
      id="speciality"
      style={{
        background: "linear-gradient(to right, #f0f4ff, #e6f7ff)",
      }}
    >
      <h1 className="text-3xl font-bold text-gray-800">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        Secure an appointment with a reputable healthcare provider
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search speciality..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-64 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
      />

      {/* Speciality grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 pt-8 px-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              key={index}
              to={`/doctors/${item.speciality}`}
              className="relative flex flex-col items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              title={item.description || `Speciality in ${item.speciality}`}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mb-3 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <img
                  className="w-12 h-12 object-contain"
                  src={item.image}
                  alt={item.speciality}
                />
              </div>
              <p className="text-sm font-medium">{item.speciality}</p>

              {/* Stats Badge */}
              <span className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full shadow-sm">
                {item.doctorsCount || Math.floor(Math.random() * 100 + 10)}+
              </span>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-gray-500">No matching speciality found.</p>
        )}
      </div>
    </div>
  );
};

export default SpecialityMenu;
