"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="bg-orange-500 text-white px-4 md:px-8 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-xl font-bold text-center md:text-left">
          Summer Essentials Store
        </h1>

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6 text-sm md:text-base">
          <a href="/" className="hover:underline">
            Home
          </a>

          <a href="/products" className="hover:underline">
            Products
          </a>

          {isLoggedIn ? (
            <>
              <a href="/profile" className="hover:underline">
                My Profile
              </a>

              <img
                src="/momo.jpg.jpeg"
                alt="User Avatar"
                className="w-9 h-9 rounded-full object-cover border border-white"
              />

              <button
                onClick={handleLogout}
                className="bg-white text-orange-500 px-4 py-2 rounded"
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
      </div>
    </nav>
  );
}