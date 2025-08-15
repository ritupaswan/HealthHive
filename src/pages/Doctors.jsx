import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }, [doctors, speciality])

  const specialties = ["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"]

  return (
    <div className="relative px-6 sm:px-10 md:px-14 my-10">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 -z-10"></div>

      <p className='text-gray-600 text-sm'>Browse through the doctors specialist.</p>

      {/* Speciality filter pills */}
      <div className='flex flex-wrap gap-3 mt-5'>
        {specialties.map((spec, i) => (
          <p
            key={i}
            onClick={() => speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)}
            className={`px-4 py-2 rounded-full cursor-pointer border transition-all text-sm sm:text-base ${
              speciality === spec
                ? "bg-purple-200 text-purple-800 border-purple-300"
                : "border-gray-300 text-gray-700 hover:bg-purple-50"
            }`}
          >
            {spec}
          </p>
        ))}
      </div>

      {/* Doctors grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {filterDoc.map((doc, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${doc._id}`)}
            className='relative bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer shadow hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300'
          >
            {/* Specialty Tag */}
            <span className="absolute top-3 right-3 bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full">
              {doc.speciality}
            </span>

            {/* Doctor Image */}
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 overflow-hidden">
              <img
                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                src={doc.image}
                alt={doc.name}
              />
            </div>

            {/* Info */}
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm mb-2'>
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></span>
                <p className='text-gray-600'>Available</p>
              </div>
              <p className='text-gray-800 text-lg font-medium'>{doc.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors
