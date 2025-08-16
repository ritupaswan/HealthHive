import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { AppContext } from "../context/AppContext";

export default function CreateAccount() {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === form.email)) {
      alert("Email already exists!");
      return;
    }

    const newUser = { name: form.name, email: form.email, password: form.password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    login(newUser);
    navigate("/profile");
    window.scrollTo(0, 0);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700">Create Account</h1>
        <p className="text-gray-500 text-center mt-2">It’s quick and easy to get started.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {/* Name */}
          <div className="relative">
            <AiOutlineUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Full Name"
              required
              className="w-full pl-10 rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <AiOutlineMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
              className="w-full pl-10 rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <AiOutlineLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full pl-10 rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-purple-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </main>
  );
}
