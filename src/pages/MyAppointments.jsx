import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FaUserMd, FaCalendarAlt, FaClock, FaMoneyBillWave, FaTimes } from "react-icons/fa";

const MyAppointments = () => {
  const { appointments, user } = useContext(AppContext);
  const [selected, setSelected] = useState(null);

  if (!user) {
    return (
      <div className="p-4 max-w-3xl mx-auto mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">My Appointments</h2>
        <p className="text-red-500 text-lg">Please log in to view your appointments.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">My Appointments</h2>

      {appointments.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          <p className="text-5xl mb-4">📅</p>
          <p>You haven't booked any appointments yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {appointments.map((a, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-2xl shadow-lg border-l-4 border-purple-600 transform transition duration-500 ease-out hover:scale-105"
            >
              <div className="flex items-center mb-3">
                <FaUserMd className="text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">{a.doctor}</h3>
              </div>
              <p className="text-gray-600 mb-3">{a.speciality}</p>

              <div className="space-y-1 text-gray-700">
                <p><FaCalendarAlt className="inline mr-1" /> <strong>Date:</strong> {a.date}</p>
                <p><FaClock className="inline mr-1" /> <strong>Time:</strong> {a.time}</p>
                <p><FaMoneyBillWave className="inline mr-1" /> <strong>Fees:</strong> ₹{a.fees}</p>
              </div>

              <button
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm shadow hover:bg-purple-700 hover:scale-105 transition transform"
                onClick={() => setSelected(a)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelected(null)}
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-bold text-purple-700 mb-4">{selected.doctor}</h2>
            <p className="text-gray-600 mb-2">{selected.speciality}</p>

            <div className="space-y-1 text-gray-700">
              <p><FaCalendarAlt className="inline mr-1" /> <strong>Date:</strong> {selected.date}</p>
              <p><FaClock className="inline mr-1" /> <strong>Time:</strong> {selected.time}</p>
              <p><FaMoneyBillWave className="inline mr-1" /> <strong>Fees:</strong> ₹{selected.fees}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
