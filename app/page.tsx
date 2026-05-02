 import "animate.css/animate.min.css";
import products from "@/data/products.json";
 
export default function Home() {
  const popularProducts = products.slice(0,3);

  return (
    <main className="min-h-screen bg-orange-50 p-8">
      <section className="bg-orange-500 text-white text-center rounded-xl p-10 mb-10">
        <h1 className="text-4xl font-bold hero-animation">
  Summer Sale 50% OFF
</h1>
        <p className="text-xl hot-deals-animation">
  Hot Deals 🔥
</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded"
              />

              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="text-gray-600">Rating: ⭐ {product.rating}</p>
              <p className="text-gray-700">Price: ৳{product.price}</p>

              <a href={`/products/${product.id}`}>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
  <h2 className="text-3xl font-bold text-center mb-8">
    Summer Care Tips
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">Stay Hydrated</h3>
      <p className="text-gray-600">
        Drink enough water during hot summer days.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">Use Sunscreen</h3>
      <p className="text-gray-600">
        Protect your skin from direct sunlight.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">Wear Light Clothes</h3>
      <p className="text-gray-600">
        Choose comfortable and breathable summer outfits.
      </p>
    </div>
  </div>
</section>
<section className="mt-12">
  <h2 className="text-3xl font-bold text-center mb-8">
    Top Brands
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-xl shadow text-center font-bold">
      SummerWear
    </div>

    <div className="bg-white p-6 rounded-xl shadow text-center font-bold">
      SunShade
    </div>

    <div className="bg-white p-6 rounded-xl shadow text-center font-bold">
      HydroMax
    </div>
  </div>
</section>
    </main>
  );
}