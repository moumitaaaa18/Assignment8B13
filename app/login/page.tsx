"use client";

import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (email && password) {
      localStorage.setItem("user", "true");
      window.location.href = "/";
    } else {
      setError("Please enter email and password");
    }
  };

  const handleGoogleLogin = () => {
    localStorage.setItem("user", "true");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <input name="email" type="email" placeholder="Email" className="w-full mb-3 p-3 border rounded" />
        <input name="password" type="password" placeholder="Password" className="w-full mb-4 p-3 border rounded" />

        <button className="w-full bg-orange-500 text-white py-3 rounded mb-3">Login</button>

        <button type="button" onClick={handleGoogleLogin} className="w-full border border-orange-500 text-orange-500 py-3 rounded mb-4">
          Continue with Google
        </button>

        <p className="text-center text-sm">
          Don&apos;t have an account? <a href="/register" className="text-orange-500 font-semibold">Register</a>
        </p>

        {error && <p className="text-center text-red-500 text-sm mt-3">{error}</p>}
      </form>
    </div>
  );
}