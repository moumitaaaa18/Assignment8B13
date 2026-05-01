export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
        
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>

        <img
          src="/momo.jpg.jpeg"
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />

        <h2 className="text-xl font-semibold">Moumita</h2>
        <p className="text-gray-600 mb-4">moumitaaa02@gmail.com</p>
        <a href="/update-profile">
  <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
    Update Profile
  </button>
</a>

      </div>
    </div>
  );
}