import products from "../data/products.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Summer Essentials Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-xl shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4">{product.name}</h2>
            <p className="text-gray-700">Price: ৳{product.price}</p>
            <p className="text-gray-600">Rating: ⭐ {product.rating}</p>
            <a href={`/products/${product.id}`}>
  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
    View Details
  </button>
</a>
          </div>
        ))}
      </div>
    </main>
  );
}