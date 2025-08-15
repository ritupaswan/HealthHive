import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { doctors } = useContext(AppContext)
  const { doctorsId } = useParams()
  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null)

  useEffect(() => {
    const doctor = doctors.find(doc => doc._id === doctorsId)
    setDocInfo(doctor)
  }, [doctors, doctorsId])

  if (!docInfo) return <p className="text-center mt-20">Loading...</p>

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      {/* Doctor Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={docInfo.image}
          alt={docInfo.name}
          className="w-48 h-48 object-cover rounded-full border-4 border-purple-300 shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{docInfo.name} 👨‍⚕️</h1>
          <p className="text-purple-600 font-medium text-lg mt-1">{docInfo.speciality}</p>
          <p className="text-gray-600 mt-2">{docInfo.degree} • {docInfo.experience} experience</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">About 📝</h2>
        <p className="text-gray-700">{docInfo.about}</p>
      </div>

      {/* Fees & Address */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center justify-center">
          <p className="text-gray-600">Consultation Fees 💰</p>
          <p className="text-xl font-bold text-purple-700 mt-1">₹{docInfo.fees}</p>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg flex flex-col">
          <p className="text-gray-600 mb-1">Address 🏠</p>
          <p>{docInfo.address.line1}</p>
          <p>{docInfo.address.line2}</p>
        </div>
      </div>

      {/* Book Appointment Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => alert(`Booking appointment with ${docInfo.name} ✅`)}
          className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all"
        >
          Book Appointment 📅
        </button>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/doctors')}
          className="text-gray-600 hover:text-purple-600 underline"
        >
          ← Back to All Doctors
        </button>
      </div>
    </div>
  )
}

export default Appointment
