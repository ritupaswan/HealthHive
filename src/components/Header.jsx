import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Header = () => {
  const navigate = useNavigate();
  const { doctors = [] } = useContext(AppContext);

  const SPECIALITIES = useMemo(
    () => [
      "General physician",
      "Gynecologist",
      "Dermatologist",
      "Pediatricians",
      "Neurologist",
      "Gastroenterologist",
    ],
    []
  );

  const totalDoctors = doctors.length || 0;
  const onlineNow = useMemo(() => {
    if (!totalDoctors) return 0;
    const pct = 0.4 + Math.random() * 0.3;
    return Math.max(1, Math.floor(totalDoctors * pct));
  }, [totalDoctors]);

  const [step, setStep] = useState(1);
  const [choice, setChoice] = useState({
    speciality: "",
    date: "",
    time: "",
  });

  const proceedToDoctors = () => {
    if (choice.speciality) {
      navigate(`/doctors/${choice.speciality}`);
    } else {
      navigate(`/doctors`);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-pink-50 -z-10" />

      {/* Animated ECG line */}
      <div className="absolute inset-x-0 top-0 md:top-6 opacity-40 pointer-events-none -z-10">
        <svg viewBox="0 0 1200 120" className="w-[140%] -translate-x-10 h-16 md:h-20">
          <defs>
            <linearGradient id="ecg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C60,60 90,60 120,60
               160,60 170,40 185,80
               195,35 210,105 230,60
               280,60 320,60 380,60
               420,60 430,40 445,80
               455,35 470,105 490,60
               540,60 620,60 700,60
               740,60 750,40 765,80
               775,35 790,105 810,60
               860,60 940,60 1020,60
               1060,60 1070,40 1085,80
               1095,35 1110,105 1130,60
               1160,60 1180,60 1200,60"
            fill="none"
            stroke="url(#ecg)"
            strokeWidth="3"
            className="animate-[dash_3.5s_linear_infinite]"
            style={{ strokeDasharray: 8, strokeDashoffset: 0 }}
          />
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: -160; }
            }
          `}</style>
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row items-center px-6 md:px-10 lg:px-16 py-14 md:py-20 gap-10">
        {/* Left: Text + stats */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Book Appointments
            <br /> with Trusted Doctors
          </h1>
          <p className="text-gray-600 max-w-xl">
            Your health deserves priority. Find certified specialists, check availability, and
            confirm in under a minute — with a little help from AI.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6">
            <div className="bg-white border border-purple-100 rounded-xl px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-purple-700">{totalDoctors}</div>
              <div className="text-xs text-gray-500">Doctors listed</div>
            </div>
            <div className="bg-white border border-pink-100 rounded-xl px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-pink-600">{onlineNow}</div>
              <div className="text-xs text-gray-500">Available now</div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <img src={assets.group_profiles} alt="" className="w-20" />
              <span className="text-xs text-gray-500">Trusted by thousands</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#speciality"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Book Appointment
              <img className="w-3" src={assets.arrow_icon} alt="" />
            </a>
            <button
              onClick={() => navigate("/symptom-checker")}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-800 px-6 py-3 rounded-full font-semibold transition"
            >
              Try Symptom Checker
            </button>
          </div>
        </div>

        {/* Right: Image + AI booking card */}
        <div className="lg:w-1/2 flex flex-col items-center gap-6">
          <img
            src={assets.header_img}
            alt="Doctor illustration"
            className="w-full max-w-sm rounded-xl shadow-2xl"
          />
          <div className="w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 md:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-gray-800">AI Booking Assistant</div>
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                Online
              </span>
            </div>

            {/* Chat bubbles */}
            <div className="space-y-3 mb-5">
              <div className="max-w-[85%] bg-purple-50 border border-purple-100 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-800">
                Hi! Which specialist would you like to see?
              </div>
              {step > 1 && choice.speciality && (
                <div className="max-w-[85%] ml-auto bg-gray-800 text-white rounded-2xl rounded-tr-sm p-3 text-sm">
                  {choice.speciality}
                </div>
              )}
              {step > 2 && choice.date && (
                <>
                  <div className="max-w-[85%] bg-purple-50 border border-purple-100 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-800">
                    Great! Pick a preferred date & time.
                  </div>
                  <div className="max-w-[85%] ml-auto bg-gray-800 text-white rounded-2xl rounded-tr-sm p-3 text-sm">
                    {choice.date} {choice.time && `• ${choice.time}`}
                  </div>
                </>
              )}
              {step > 3 && (
                <div className="max-w-[85%] bg-purple-50 border border-purple-100 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-800">
                  All set! Tap <b>Continue</b> to see available doctors.
                </div>
              )}
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              {step === 1 && (
                <select
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  value={choice.speciality}
                  onChange={(e) =>
                    setChoice((c) => ({ ...c, speciality: e.target.value }))
                  }
                >
                  <option value="">Select speciality</option>
                  {SPECIALITIES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              )}
              {step === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    value={choice.date}
                    onChange={(e) =>
                      setChoice((c) => ({ ...c, date: e.target.value }))
                    }
                  />
                  <input
                    type="time"
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    value={choice.time}
                    onChange={(e) =>
                      setChoice((c) => ({ ...c, time: e.target.value }))
                    }
                  />
                </div>
              )}
              {step === 3 && (
                <div className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl p-3">
                  We’ll match you with top-rated doctors for{" "}
                  <b>{choice.speciality}</b> around your selected time.
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className="px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100"
                >
                  Back
                </button>
                {step < 3 ? (
                  <button
                    onClick={() => {
                      if (step === 1 && !choice.speciality) return;
                      if (step === 2 && !choice.date) return;
                      setStep((s) => s + 1);
                    }}
                    className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={proceedToDoctors}
                    className="px-5 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold"
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            *This assistant helps you filter doctors faster. Final booking happens on the next page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
