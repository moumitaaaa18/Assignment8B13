export default function UpdateProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        
        <h2 className="text-xl font-bold mb-4 text-center">
          Update Profile
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Photo URL"
          className="w-full border p-2 mb-3 rounded"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Update Information
        </button>

      </div>
    </div>
  );
}