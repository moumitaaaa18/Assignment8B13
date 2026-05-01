export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded"
        />
        <input
  type="text"
  placeholder="Photo URL"
  className="w-full mb-3 p-3 border rounded"
/>

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded"
        />

        <a href="/login">
          <button className="w-full bg-orange-500 text-white py-3 rounded mb-3">
            Register
          </button>
        </a>
        <button className="w-full border border-orange-500 text-orange-500 py-3 rounded mb-4">
  Continue with Google
</button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}