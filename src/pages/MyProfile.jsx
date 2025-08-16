import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyProfile = () => {
  const { user, logout } = useContext(AppContext);

  if (!user) {
    return <p className="text-center mt-10">No account found. Please create an account.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">My Profile</h2>
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>

        <button
          onClick={logout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
