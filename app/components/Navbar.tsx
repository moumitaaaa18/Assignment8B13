"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-orange-500 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Summer Essentials Store</h1>

      <div className="flex items-center gap-6">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/profile">My Profile</a>

        {isLoggedIn ? (
          <>
            <img
              src="/momo.jpg.jpeg"
              alt="User"
              className="w-9 h-9 rounded-full object-cover border"
            />

            <button
              onClick={handleLogout}
              className="border border-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a
              href="/login"
              className="bg-white text-orange-500 px-4 py-2 rounded"
            >
              Login
            </a>

            <a
              href="/register"
              className="border border-white px-4 py-2 rounded"
            >
              Register
            </a>
          </>
        )}
      </div>
    </nav>
  );
}