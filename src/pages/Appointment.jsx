import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { doctors, bookAppointment, user } = useContext(AppContext);
  const { doctorsId } = useParams();
  const navigate = useNavigate();

  const [docInfo, setDocInfo] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const doctor = doctors.find((doc) => doc._id === doctorsId);
    setDocInfo(doctor);
  }, [doctors, doctorsId]);

  const handleBooking = () => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    if (!date || !time) {
      alert("Please select date and time ⏳");
      return;
    }

    const newAppointment = {
      doctor: docInfo.name,
      speciality: docInfo.speciality,
      date,
      time,
      fees: docInfo.fees,
    };

    // ✅ Context ke function se book karo
    bookAppointment(newAppointment);

    alert(`Appointment booked with ${docInfo.name} ✅`);
    navigate("/my-appointments");
  };

  if (!docInfo) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={docInfo.image}
          alt={docInfo.name}
          className="w-48 h-48 object-cover rounded-full border-4 border-purple-300 shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{docInfo.name} 👨‍⚕️</h1>
          <p className="text-purple-600 font-medium text-lg mt-1">{docInfo.speciality}</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-8 space-y-4">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 w-full" />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border p-2 w-full" />
        <button
          onClick={handleBooking}
          className="bg-purple-600 text-white px-6 py-3 rounded-full w-full hover:bg-purple-700 transition-all"
        >
          Book Appointment 📅
        </button>
      </div>

      <div className="mt-6 text-center">
        <button onClick={() => navigate("/doctors")} className="text-gray-600 hover:text-purple-600 underline">
          ← Back to All Doctors
        </button>
      </div>
    </div>
  );
};

export default Appointment;
