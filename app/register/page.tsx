"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const photo = (form.elements.namedItem("photo") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (name && email && photo && password) {
      window.location.href = "/login";
    } else {
      setError("Please fill in all fields");
    }
  };

  const handleGoogleLogin = () => {
    localStorage.setItem("user", "true");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

        <input name="name" type="text" placeholder="Name" className="w-full mb-3 p-3 border rounded" />
        <input name="email" type="email" placeholder="Email" className="w-full mb-3 p-3 border rounded" />
        <input name="photo" type="text" placeholder="Photo URL" className="w-full mb-3 p-3 border rounded" />
        <input name="password" type="password" placeholder="Password" className="w-full mb-4 p-3 border rounded" />

        <button className="w-full bg-orange-500 text-white py-3 rounded mb-3">Register</button>

        <button type="button" onClick={handleGoogleLogin} className="w-full border border-orange-500 text-orange-500 py-3 rounded mb-4">
          Continue with Google
        </button>

        <p className="text-center text-sm">
          Already have an account? <a href="/login" className="text-orange-500 font-semibold">Login</a>
        </p>

        {error && <p className="text-center text-red-500 text-sm mt-3">{error}</p>}
      </form>
    </div>
  );
}