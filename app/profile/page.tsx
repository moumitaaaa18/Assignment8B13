"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedName = localStorage.getItem("name");

    if (savedEmail) setEmail(savedEmail);
    if (savedName) setName(savedName);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow text-center w-96">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>

        <img
          src="/momo.jpg.jpeg"
          alt="User Avatar"
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />

        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mb-4">{email}</p>

        <a href="/update-profile">
          <button className="w-full bg-orange-500 text-white py-2 rounded">
            Update Profile
          </button>
        </a>
      </div>
    </div>
  );
}