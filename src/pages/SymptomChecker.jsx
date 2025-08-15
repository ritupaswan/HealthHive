// SymptomChecker.jsx
import React, { useState, useEffect } from "react";
import doctorIllustration from "../assets/doctors_illustration.png";
import coughImg from "../assets/cough.png";
import headacheImg from "../assets/headache.png";
import feverImg from "../assets/fever.png";
import dizzinessImg from "../assets/dizziness.png";
import fatigueImg from "../assets/fatigue.png";
import nauseaImg from "../assets/nausea.png";
import symptomImg from "../assets/symptom.png"; // Extra large symptom image
import symptom2Img from "../assets/symptom2.png"; // Extra large symptom image 2

// Mapping symptoms to icons, colors & images
const symptomMap = {
  Headache: { icon: "🧠", color: "from-blue-50 to-blue-100", img: headacheImg },
  Fever: { icon: "🌡️", color: "from-red-50 to-red-100", img: feverImg },
  Cough: { icon: "🫁", color: "from-green-50 to-green-100", img: coughImg },
  Fatigue: { icon: "😴", color: "from-purple-50 to-purple-100", img: fatigueImg },
  Nausea: { icon: "🤢", color: "from-yellow-50 to-yellow-100", img: nauseaImg },
  Dizziness: { icon: "🤯", color: "from-pink-50 to-pink-100", img: dizzinessImg },
};

const commonSymptoms = Object.keys(symptomMap);

const healthTips = [
  { title: "Stay Hydrated 💧", text: "Drink plenty of water daily.", icon: "💧", color: "bg-blue-100" },
  { title: "Wash Hands 🧼", text: "Regular hand washing reduces infections.", icon: "🧼", color: "bg-green-100" },
  { title: "Rest Well 🛏️", text: "Ensure 7-8 hours of sleep.", icon: "🛏️", color: "bg-yellow-100" },
  { title: "Balanced Diet 🍎", text: "Eat fruits and vegetables.", icon: "🍎", color: "bg-pink-100" },
];

// Symptom details
const symptomDetails = {
  Headache: {
    causes: ["Stress", "Dehydration", "Eye Strain", "Migraine"],
    treatment: ["Rest in a quiet dark room", "Drink water", "Over-the-counter pain relievers", "Massage temples"],
  },
  Fever: {
    causes: ["Viral infection", "Bacterial infection", "Inflammation"],
    treatment: ["Stay hydrated", "Use fever reducers if necessary", "Rest well", "Consult doctor if high fever persists"],
  },
  Cough: {
    causes: ["Cold", "Flu", "Allergies", "Asthma"],
    treatment: ["Stay hydrated", "Use honey or cough syrup", "Avoid irritants like smoke", "Consult doctor if persistent"],
  },
  Fatigue: {
    causes: ["Lack of sleep", "Stress", "Poor diet", "Medical conditions"],
    treatment: ["Get enough sleep", "Eat balanced meals", "Exercise regularly", "Consult doctor if persistent"],
  },
  Nausea: {
    causes: ["Food poisoning", "Pregnancy", "Stomach infection", "Medication side effects"],
    treatment: ["Eat light foods", "Stay hydrated", "Ginger or peppermint tea", "Consult doctor if severe"],
  },
  Dizziness: {
    causes: ["Dehydration", "Low blood pressure", "Vertigo", "Inner ear issues"],
    treatment: ["Sit or lie down", "Drink water", "Avoid sudden movements", "Consult doctor if frequent"],
  },
};

const SymptomChecker = () => {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");
  const [bgGradient, setBgGradient] = useState("from-purple-50 to-white");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (symptomMap[symptom]) setBgGradient(symptomMap[symptom].color);
    else setBgGradient("from-purple-50 to-white");
  }, [symptom]);

  const handleCheck = () => {
    if (symptom.trim() === "") {
      setResult("⚠️ Please enter a symptom to check.");
    } else {
      setResult(`🩺 Possible causes for "${symptom}" could include common cold, flu, or other conditions.`);
    }
  };

  const toggleDetails = (symptom) => {
    setSelected(selected === symptom ? null : symptom);
  };

  return (
    <div className={`relative py-10 px-4 md:px-10 max-w-6xl mx-auto bg-gradient-to-b ${bgGradient} rounded-3xl shadow-xl overflow-hidden`}>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-300 rounded-full animate-float-slow opacity-30"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* Doctor Illustration */}
      <div className="flex justify-center mb-6">
        <img
          src={doctorIllustration}
          alt="Doctor Illustration"
          className="w-36 h-36 object-contain rounded-full shadow-md animate-bounce-slow"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2 text-center">
        Symptom Checker
      </h1>
      <p className="mb-6 text-gray-700 text-center text-sm md:text-base">
        Enter your symptoms below or click a common symptom to see possible causes.
      </p>

      {/* 2-Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col gap-6">
          
          {/* Common Symptoms */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
            {commonSymptoms.map((s, i) => (
              <span
                key={i}
                onClick={() => { setSymptom(s); toggleDetails(s); }}
                className="cursor-pointer flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm hover:bg-purple-200 transition-transform transform hover:scale-105 shadow-sm"
              >
                {symptomMap[s].icon} {s}
              </span>
            ))}
          </div>

          {/* Symptom Image (Left Column) */}
          {symptom && symptomMap[symptom]?.img && (
            <div className="flex justify-center mb-6">
              <img
                src={symptomMap[symptom].img}
                alt={symptom}
                className="w-32 h-32 object-contain rounded-lg shadow-md animate-bounce-slow"
              />
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg text-gray-700 animate-fadeIn">
              {result}
            </div>
          )}

          {/* Symptom Details */}
          {selected && symptomDetails[selected] && (
            <div className="mt-6 p-4 bg-white rounded-2xl shadow-md animate-fadeIn">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">
                {symptomMap[selected].icon} {selected} Details
              </h3>
              <div className="mb-2">
                <strong>Common Causes:</strong>
                <ul className="list-disc list-inside text-gray-700">
                  {symptomDetails[selected].causes.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
              <div>
                <strong>Treatment / Tips:</strong>
                <ul className="list-disc list-inside text-gray-700">
                  {symptomDetails[selected].treatment.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            </div>
          )}

          {/* Symptom1 Image at bottom of Left Column */}
          <img
            src={symptomImg}
            alt="Symptom 1"
            className="w-full max-w-lg h-auto object-contain rounded-xl shadow-2xl mt-6"
          />
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col gap-6 items-center">
          {/* Symptom2 Image */}
          <img
            src={symptom2Img}
            alt="Symptom 2"
            className="w-full max-w-lg h-auto object-contain rounded-xl shadow-2xl"
          />

          {/* Health Tips */}
          <h2 className="text-2xl font-semibold text-purple-700 mt-4 mb-4 text-center md:text-left">
            Health Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {healthTips.map((tip, i) => (
              <div key={i} className="perspective">
                <div className="relative w-full h-32 text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180 cursor-pointer">
                  <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-4 rounded-lg shadow-md bg-white">
                    <span className="text-2xl mb-2">{tip.icon}</span>
                    <h3 className="font-semibold text-purple-700">{tip.title}</h3>
                  </div>
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-4 rounded-lg shadow-md bg-white">
                    <p className="text-gray-600 text-sm">{tip.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Note */}
      <p className="text-xs text-gray-500 mt-6 italic text-center">
        Stay Healthy!
      </p>

      <style>{`
        .animate-float-up { animation: float-up 6s ease-in-out infinite; }
        .animate-float-down { animation: float-down 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-in-out; }
        .perspective { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .hover\\:rotate-y-180:hover { transform: rotateY(180deg); }
        @keyframes float-up {0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);} }
        @keyframes float-down {0%,100%{transform:translateY(0);}50%{transform:translateY(15px);} }
        @keyframes float-slow {0%{transform:translateY(0) translateX(0);}50%{transform:translateY(-10px) translateX(5px);}100%{transform:translateY(0) translateX(0);} }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
      `}</style>
    </div>
  );
};

export default SymptomChecker;
