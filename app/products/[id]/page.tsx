import products from "@/data/products.json";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <h1 className="text-center mt-10">Product not found</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

        <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
        <p className="text-gray-700 mb-2">Price: ৳{product.price}</p>
        <p className="text-yellow-500 mb-2">Rating: ⭐ {product.rating}</p>
        <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-gray-700 mt-4">{product.description}</p>

        <a
          href="/"
          className="inline-block mt-6 bg-orange-500 text-white px-4 py-2 rounded"
        >
          Back Home
        </a>
      </div>
    </div>
  );
}