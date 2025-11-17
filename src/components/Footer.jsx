export default function Footer() {
  return (
    <footer className="bg-[#071017] border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3">World Hospitality Guide</h4>
          <p className="text-sm text-gray-400">
            Curated listings of restaurants, hotels, cafes & bars worldwide.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white mb-3">Explore</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/restaurants" className="hover:text-white">Restaurants</a></li>
            <li><a href="/hotels" className="hover:text-white">Hotels</a></li>
            <li><a href="/cafes" className="hover:text-white">Cafes</a></li>
            <li><a href="/pubs-bars" className="hover:text-white">Pubs & Bars</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white mb-3">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Top Picks</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white mb-3">Contact</h5>
          <p className="text-sm text-gray-400">Email: info@worldhospitality.com</p>
          <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} World Hospitality Guide. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
