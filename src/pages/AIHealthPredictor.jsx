import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import stayImage from '../assets/stay.jpg'; // Local image import

const AIHealthPredictor = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    sleep: '',
    activity: '',
    stress: '',
    diet: ''
  });

  const [result, setResult] = useState(null);

  // Health quiz game
  const questions = [
    { q: "How much water should you drink daily?", options: ["1-2 glasses", "2-3 litres", "5 litres"], answer: "2-3 litres" },
    { q: "How many hours of sleep are ideal?", options: ["4-5 hours", "7-8 hours", "10 hours"], answer: "7-8 hours" },
    { q: "Which is healthier?", options: ["Fruits", "Chips", "Soda"], answer: "Fruits" },
  ];
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const wellnessScore = Math.floor(Math.random() * 50 + 50);
    const tips = [
      "Drink more water",
      "Take a 30-min walk daily",
      "Sleep at least 7 hours",
      "Meditate for 10 minutes",
      "Include fruits and veggies in diet"
    ];

    setResult({ score: wellnessScore, tip: tips[Math.floor(Math.random() * tips.length)] });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100 py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center">
        AI Wellness Predictor <FaRobot className="inline text-purple-600 ml-2" />
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Column - Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-xl flex flex-col gap-4">
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="p-3 rounded-md border border-gray-300"/>
            
            <select name="gender" value={formData.gender} onChange={handleChange} className="p-3 rounded-md border border-gray-300">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input type="number" name="sleep" placeholder="Sleep hours/day" value={formData.sleep} onChange={handleChange} className="p-3 rounded-md border border-gray-300"/>
            <input type="number" name="activity" placeholder="Active minutes/day" value={formData.activity} onChange={handleChange} className="p-3 rounded-md border border-gray-300"/>
            <input type="number" name="stress" placeholder="Stress level 1-10" value={formData.stress} onChange={handleChange} className="p-3 rounded-md border border-gray-300"/>
            <input type="text" name="diet" placeholder="Diet type (Veg/Non-Veg/Vegan)" value={formData.diet} onChange={handleChange} className="p-3 rounded-md border border-gray-300"/>

            <button type="submit" className="bg-purple-500 text-white py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Predict Wellness
            </button>
          </form>

          {result && (
            <div className="mt-8 bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-2xl font-bold text-gray-800">Your Wellness Score: {result.score}/100</h2>
              <p className="mt-4 text-gray-700">AI Tip: {result.tip}</p>
            </div>
          )}
        </div>

        {/* Right Column - Image & Quiz */}
        <div className="flex flex-col items-center gap-6">
          <img 
            src={stayImage}  
            alt="Healthy Lifestyle" 
            className="rounded-xl shadow-lg w-full"
          />

          {/* Quiz Section */}
          <div className="bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-xl w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Health Quiz</h2>
            {!quizFinished ? (
              <div>
                <p className="mb-4 font-medium">{questions[currentQ].q}</p>
                <div className="flex flex-col gap-2">
                  {questions[currentQ].options.map((option, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      className="bg-purple-400 text-white py-2 rounded-lg hover:bg-purple-500"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="font-semibold text-gray-700">Quiz Finished! You scored {score} / {questions.length}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHealthPredictor;
