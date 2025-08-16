// About.jsx
import React from "react";
import missionImg from "../assets/mission.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* About Us Header */}
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        About HealthHive
      </h1>
      <p className="text-gray-700 text-center mb-12 text-lg">
        At HealthHive, we aim to simplify health management with AI-powered tools and expert guidance.
      </p>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src={missionImg}
          alt="Our Mission"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We strive to empower individuals with accurate health information, easy symptom tracking, and actionable wellness tips.
          </p>
          <p className="text-gray-700">
            Our platform combines AI intelligence and user-friendly design to make health decisions simpler and smarter.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-semibold text-purple-700 mb-8 text-center">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[team1, team2, team3].map((img, index) => (
          <div key={index} className="text-center">
            <img
              src={img}
              alt={`Team member ${index + 1}`}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="font-semibold text-purple-700 text-lg">Member {index + 1}</h3>
            <p className="text-gray-600 text-sm"> Health Specialist</p>
          </div>
        ))}
      </div>

      {/* Fun Facts / Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-purple-50 rounded-2xl shadow-lg">
          <p className="text-4xl font-bold text-purple-700 mb-2">500+</p>
          <p className="text-gray-700">Active Users</p>
        </div>
        <div className="p-6 bg-pink-50 rounded-2xl shadow-lg">
          <p className="text-4xl font-bold text-pink-700 mb-2">120+</p>
          <p className="text-gray-700"> Health Insights</p>
        </div>
        <div className="p-6 bg-green-50 rounded-2xl shadow-lg">
          <p className="text-4xl font-bold text-green-700 mb-2">24/7</p>
          <p className="text-gray-700">Support</p>
        </div>
      </div>
    </div>
  );
};

export default About;
