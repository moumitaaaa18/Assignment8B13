export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-center md:text-left">
        
        <div>
          <h3 className="font-bold mb-2">Contact Info</h3>
          <p>Email: support@summerstore.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Social Links</h3>
          <p>Facebook | Instagram | Twitter</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Privacy</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

      </div>

      <p className="text-center pb-4">
        © 2026 Summer Essentials Store. All rights reserved.
      </p>
    </footer>
  );
}