export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded"
        />
        

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded"
        />

        <a href="/">
          <button className="w-full bg-orange-500 text-white py-3 rounded mb-3">
            Login
          </button>
        </a>

        <button className="w-full border border-orange-500 text-orange-500 py-3 rounded mb-4">
          Continue with Google
        </button>

        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-orange-500 font-semibold">
            Register
          </a>
        </p>

        <p className="text-center text-red-500 text-sm mt-3">
          Invalid email or password
        </p>
      </div>
    </div>
  );
}