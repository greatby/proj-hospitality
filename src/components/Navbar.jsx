"use client";

export default function Navbar() {
  const handleNav = (e) => {
    if (e.target.value) {
      window.location.href = e.target.value;
    }
  };

  return (
    <header className="backdrop-blur-sm bg-black/40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#1F2D3D"
                />
              </svg>
            </div>
            <span className="font-semibold text-xl tracking-tight text-white">
              World Hospitality Guide
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="/restaurants" className="hover:opacity-90">Restaurants</a>
            <a href="/hotels" className="hover:opacity-90">Hotels</a>
            <a href="/cafes" className="hover:opacity-90">Cafes</a>
            <a href="/pubs-bars" className="hover:opacity-90">Pubs & Bars</a>

            <a
              href="#explore"
              className="ml-2 inline-block rounded-full bg-linear-to-r from-yellow-400 to-yellow-500 px-5 py-2 text-black font-medium shadow-md"
            >
              Explore
            </a>
          </nav>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <select
              onChange={handleNav}
              defaultValue=""
              aria-label="Navigation"
              className="bg-transparent text-sm p-2 border border-gray-700 rounded text-gray-200"
            >
              <option value="" disabled>
                Menu
              </option>
              <option value="/restaurants">Restaurants</option>
              <option value="/hotels">Hotels</option>
              <option value="/cafes">Cafes</option>
              <option value="/pubs-bars">Pubs & Bars</option>
              <option value="#explore">Explore</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
