// src/app/page.jsx
export const metadata = {
  title: "World Hospitality Guide — Luxury restaurants, hotels & nightlife",
  description:
    "Discover the world's best restaurants, hotels, cafes and bars. Curated listings, reviews and premium picks for travellers and locals.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "World Hospitality Guide",
  url: "https://yourwebsite.com",
  description:
    "Luxury listings for restaurants, hotels, cafes and bars worldwide.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://yourwebsite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative min-h-[80vh] md:min-h-screen flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(3,7,12,0.7), rgba(9,12,16,0.6)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-20 md:py-32">

            {/* LEFT */}
            <div className="space-y-5 md:space-y-6">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-xs sm:text-sm border border-yellow-600/20">
                <span>Premium Picks</span>
                <span className="hidden sm:inline text-gray-300">• Curated by experts</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-white drop-shadow-lg">
                Discover the World's Best Restaurants, Hotels & Nightlife
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl">
                Curated guides & verified listings for dining, stays and nightlife — luxury-first design, trusted reviews, and local insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href="#explore"
                  className="inline-block rounded-full bg-linear-to-r from-yellow-400 to-yellow-500 px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-black shadow-xl hover:-translate-y-1 transition"
                >
                  Explore Top Places
                </a>

                <a
                  href="#search"
                  className="inline-block rounded-full border border-gray-700 px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base text-gray-200 hover:bg-white/5 transition"
                >
                  Search Listings
                </a>
              </div>

              <div className="mt-4 text-xs sm:text-sm text-gray-400 space-x-1">
                <span>Open now •</span>
                <span>Verified listings •</span>
                <span>Expert reviews</span>
              </div>
            </div>

            {/* RIGHT COLLAGE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=60",
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=60",
              ].map((img) => (
                <div
                  key={img}
                  className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-44 sm:h-56 object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="explore" className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Why choose us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Curated Luxury",
                desc: "Handpicked premium venues and hotels with verified service standards.",
              },
              {
                title: "Verified Reviews",
                desc: "Real reviews & quality checks with emphasis on guest experience.",
              },
              {
                title: "Global & Local",
                desc: "Local knowledge blended with global standards.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="p-6 rounded-2xl bg-linear-to-br from-[#071017] to-[#09121a] border border-gray-800 shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-medium text-yellow-400 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="py-12 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Featured Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              {
                title: "Fine Dining Restaurants",
                subtitle: "Tasting menus & premium service",
                img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Luxury Hotels",
                subtitle: "City palaces & boutique resorts",
                img: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Cozy Cafes",
                subtitle: "Artisan coffee & quiet corners",
                img: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Rooftop Bars",
                subtitle: "Skyline cocktails & ambience",
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 sm:h-56 object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent p-5 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl text-white font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section id="search" className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#061018] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl text-white mb-2">Search listings</h3>
            <p className="text-gray-400 text-sm mb-5">
              Search by name, city, cuisine or tag
            </p>

            <form className="flex flex-col sm:flex-row gap-3" action="/search" method="GET">
              <input
                name="q"
                className="flex-1 rounded-full px-4 py-3 bg-transparent border border-gray-700 text-gray-200 outline-none text-sm sm:text-base"
                placeholder="Search restaurants, hotels, cafes..."
              />

              <button className="rounded-full px-6 py-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-sm sm:text-base font-semibold">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl p-8 sm:p-12 shadow-xl"
            style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
          >
            <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2">
              Stay Updated!
            </h2>
            <p className="text-white/90 text-sm sm:text-base">
              Get events, openings & curated hospitality updates.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4 mt-6 max-w-lg mx-auto"
              method="POST"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full text-black text-sm sm:text-base"
              />
              <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:scale-105 transition text-sm sm:text-base">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl text-white font-semibold">
              Ready to find your next favorite place?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              Explore curated lists and top-rated venues.
            </p>
          </div>

          <a
            href="/restaurants"
            className="inline-block rounded-full bg-linear-to-r from-yellow-400 to-yellow-500 px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-lg"
          >
            Browse Restaurants
          </a>
        </div>
      </section>
    </>
  );
}
