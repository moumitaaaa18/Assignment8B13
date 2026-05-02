"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import products from "@/data/products.json";

export default function ProductDetails() {
  const params = useParams();
  const id = params.id as string;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      window.location.href = `/login?redirect=/products/${id}`;
    } else {
      setIsLoggedIn(true);
    }
  }, [id]);

  if (!isLoggedIn) {
    return <p className="text-center mt-10">Checking...</p>;
  }

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <h1 className="text-center mt-10">Product not found</h1>;
  }

  return (
    <main className="min-h-screen bg-orange-50 p-8 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow p-8 max-w-xl w-full text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-5"
        />

        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
        <p className="text-gray-700 mb-2">Category: {product.category}</p>
        <p className="text-gray-700 mb-2">Rating: ⭐ {product.rating}</p>
        <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
        <p className="text-xl font-semibold mb-4">Price: ৳{product.price}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>

        <button className="bg-orange-500 text-white px-5 py-2 rounded">
          Buy Now
        </button>
      </div>
    </main>
  );
}