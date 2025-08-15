// Contact.jsx
import React, { useState } from 'react';
import { assets } from '../assets/assets';

const quickContacts = [
  { icon: "📞", title: "Phone", info: "7000050000" },
  { icon: "✉️", title: "Email", info: "ritu@gmail.com" },
  { icon: "📍", title: "Address", info: "123, Health Street, India" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center">
        Get in Touch <span className="animate-bounce">💌</span>
      </h1>
      <p className="text-gray-700 text-center mb-12 text-sm md:text-base">
        Questions, suggestions or feedback? Reach out to us through the form or any of the quick contact methods below.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="flex-1 bg-purple-50 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
            >
              Send Message
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-600 font-semibold text-center animate-fadeIn">
              ✅ Your message has been sent!
            </p>
          )}
        </div>

        {/* Right Section: Illustration + Quick Contacts */}
        <div className="flex-1 flex flex-col gap-6 items-center">
          {/* Illustration */}
          <img
            src={assets.contactIllustration || assets.logo}
            alt="Contact Illustration"
            className="w-64 md:w-72 animate-bounce-slow mb-6"
          />

          {/* Quick Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {quickContacts.map((contact, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                <span className="text-2xl">{contact.icon}</span>
                <div>
                  <p className="font-semibold text-purple-700">{contact.title}</p>
                  <p className="text-gray-600 text-sm">{contact.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fun Emoji Footer */}
          <div className="flex gap-3 mt-6 text-3xl animate-bounce">
            <span>💖</span>
            <span>🌟</span>
            <span>🌿</span>
            <span>🩺</span>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
          .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
          .animate-bounce-slow { animation: bounce 2s infinite; }
        `}
      </style>
    </div>
  );
};

export default Contact;
