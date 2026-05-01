export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-5 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}