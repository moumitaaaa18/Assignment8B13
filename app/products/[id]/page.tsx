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
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-10">
      <h1 className="text-3xl font-bold mb-5">{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-60 object-cover rounded-lg"
      />

      <p className="mt-4 text-xl">Price: ৳{product.price}</p>

      <a href="/" className="mt-5 bg-orange-500 text-white px-5 py-2 rounded">
        Back Home
      </a>
    </div>
  );
}