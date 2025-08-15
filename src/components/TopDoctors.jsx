import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-700 md:mx-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        Fix a time to see a trusted medical expert.
      </p>

      {/* Background container */}
      <div
        className="w-full grid grid-cols-auto gap-6 pt-5 px-3 sm:px-0 p-6 rounded-2xl shadow-inner"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1588776814546-46e18f8b235c?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="bg-white border border-blue-200 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="w-full h-48 object-cover object-top bg-purple-200"
              src={item.image}
              alt={item.name}
            />

            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-800 text-lg font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors')
          scrollTo(0, 0)
        }}
        className="bg-pink-400 text-white px-12 py-3 rounded-full mt-10 shadow-md hover:shadow-lg hover:bg-pink-500 transition-all duration-300"
      >
        More
      </button>
    </div>
  )
}

export default TopDoctors
