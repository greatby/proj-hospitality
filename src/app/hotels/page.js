// src/app/hotels/page.jsx
export const metadata = {
  title:
    "Complete Hotel Guide — Luxury hotels, boutique stays & global accommodations",
  description:
    "Find luxury hotels, boutique stays, resorts, business hotels and alternate accommodations worldwide. Comprehensive hotel guide with amenities, booking tips and regional highlights.",
};

// JSON-LD for Hotels Page
const hotelsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Complete Hotel Guide",
  url: "https://yourwebsite.com/hotels",
  description:
    "Complete guide to hotels, luxury stays, boutique properties, resorts, business hotels, budget hotels, heritage stays, and unique accommodations worldwide.",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "World Hospitality Guide",
    url: "https://yourwebsite.com",
  },
  about: [
    "luxury hotels",
    "boutique hotels",
    "business hotels",
    "resorts",
    "budget hotels",
    "extended stay",
    "heritage hotels",
    "unique hotels",
    "wellness hotels",
    "eco resorts",
  ],
};

export default function HotelsPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelsJsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(3,7,12,0.65), rgba(9,12,16,0.45)), url('https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.1.0&auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-label="Luxury hotel hero"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-sm font-medium border border-yellow-600/20 mb-4">
                <span>Expert Picks</span>
                <span className="ml-2 text-xs text-gray-300">
                  Curated hotel collections
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight drop-shadow-lg">
                Complete Hotel Guide — Luxury, Boutique & Unique Stays
              </h1>

              <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
                Discover world-class hotels, heritage properties, and curated
                boutique stays — detailed guides, amenities, booking tips and
                local highlights to help you pick the perfect accommodation for
                any journey.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#spotlight"
                  className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-semibold text-black shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  See Spotlight Hotels
                </a>

                <a
                  href="#search"
                  className="inline-block rounded-full border border-gray-300/20 px-6 py-3 text-gray-200 hover:bg-white/5 transition"
                >
                  Search Rooms
                </a>
              </div>

              <ul className="mt-6 text-sm text-gray-300 flex flex-wrap gap-3">
                <li>Worldwide coverage</li>
                <li>Verified listings</li>
                <li>Booking & amenity guides</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Collage thumbnails */}
              {[
                {
                  src: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Hotel lobby",
                },
                {
                  src: "https://plus.unsplash.com/premium_photo-1661964210723-ff22b41a8a5f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Suite interior",
                },
                {
                  src: "https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  alt: "Resort pool",
                },
                {
                  src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=60",
                  alt: "Hotel dining",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPOTLIGHT / HERO HIGHLIGHTS */}
      <section id="spotlight" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Spotlight — Handpicked Stays
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Heritage Palace — Rajasthan",
                desc: "Converted royal palace with restored suites, curated cultural experiences and fine dining.",
                img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60",
                tag: "Heritage",
              },
              {
                title: "Coastal Resort Escape — Maldives",
                desc: "Overwater villas, private butlers and aquatic adventures with an emphasis on seclusion.",
                img: "https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                tag: "Resort",
              },
              {
                title: "City Boutique — Tokyo",
                desc: "Design-led boutique with chef-driven restaurant and rooftop bar overlooking the skyline.",
                img: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=60",
                tag: "Boutique",
              },
            ].map((h) => (
              <article
                key={h.title}
                className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#071017] to-[#0b1320] border border-gray-800 shadow-xl"
              >
                <img
                  src={h.img}
                  alt={h.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-xs font-medium mb-3">
                    {h.tag}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">{h.desc}</p>
                  <div className="mt-4">
                    <a
                      className="inline-block text-sm bg-yellow-400 text-black px-4 py-2 rounded-full font-medium"
                      href="#"
                    >
                      View details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES & TYPES GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            Hotel Types & What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Luxury Hotels",
                items: [
                  "5-star service & gastronomy",
                  "Spas, private transfers",
                  "Concierge experiences",
                ],
                desc: "Exceptional attention to detail, premium amenities and bespoke services.",
              },
              {
                title: "Boutique & Design",
                items: [
                  "Unique design rooms",
                  "Locally sourced cuisine",
                  "Intimate service",
                ],
                desc: "Characterful properties with focused guest experiences and local identity.",
              },
              {
                title: "Resorts & Retreats",
                items: [
                  "All-inclusive options",
                  "Outdoor activities",
                  "Wellness programs",
                ],
                desc: "Destination properties for relaxation, activities and family stays.",
              },
            ].map((t) => (
              <div
                key={t.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#071017] to-[#09121a] border border-gray-800 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{t.desc}</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {t.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 inline-block w-2 h-2 rounded-full bg-yellow-400"
                      />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL HIGHLIGHTS + BOOKING TIPS */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT: Regional Highlights */}
          <div className="lg:pr-10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Regional Hotel Highlights
            </h3>

            <p className="text-gray-200 leading-relaxed">
              Discover curated stays across continents — from royal palace
              hotels in India and tropical island villas in Asia to boutique
              European escapes and wilderness lodges across the Americas.
            </p>

            <div className="mt-6 space-y-5 text-gray-200">
              <div className="flex gap-3">
                <span className="text-yellow-400 mt-1 text-lg">•</span>
                <p>
                  <strong className="text-white">India:</strong> Heritage
                  palaces, hill-station retreats, desert resorts & luxury
                  Ayurveda stays.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-yellow-400 mt-1 text-lg">•</span>
                <p>
                  <strong className="text-white">Europe:</strong> Boutique
                  hotels, countryside manors, castle stays & modern city suites.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-yellow-400 mt-1 text-lg">•</span>
                <p>
                  <strong className="text-white">Asia:</strong> Minimalist
                  design hotels, capsule concepts, spa retreats & island villas.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-yellow-400 mt-1 text-lg">•</span>
                <p>
                  <strong className="text-white">Americas:</strong> Urban
                  luxury, vineyard estates, eco-lodges, ski resorts & mountain
                  retreats.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Tips */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-semibold text-yellow-400">
              Booking Tips & Rate Strategies
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Save more while choosing the best hotels.
            </p>

            <ol className="mt-6 space-y-4 text-gray-200 text-[15px] leading-relaxed">
              <li>
                Compare hotel websites with OTAs — loyalty perks often beat
                discounted prices.
              </li>
              <li>
                Choose flexible bookings when unsure; non-refundable is cheaper
                but risky.
              </li>
              <li>
                Check hidden charges like breakfast, taxes, transfers & resort
                fees.
              </li>
              <li>
                Contact the hotel for upgrades, early check-in or room
                preferences.
              </li>
              <li>
                Travel off-season for lower rates; earn benefits through loyalty
                programs.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* DETAILED GUIDES (accordion-like cards but static) */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-10 text-black">
            In-depth Hotel Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <article className="group p-7 rounded-2xl bg-gradient-to-br from-[#0c1118] to-[#0f1a24] border border-slate-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span className="text-yellow-300 text-lg">●</span>
                Accessibility & Family Stays
              </h4>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                Identify hotels offering accessible layouts, family suites,
                children-friendly dining, and reliable childcare services.
                Always confirm accessibility features in advance.
              </p>
            </article>

            {/* CARD 2 */}
            <article className="group p-7 rounded-2xl bg-gradient-to-br from-[#0c1118] to-[#0f1a24] border border-slate-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span className="text-yellow-300 text-lg">●</span>
                Business Travel Essentials
              </h4>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                Choose accommodations with high-speed Wi-Fi, ergonomic in-room
                workspaces, early breakfast options, meeting rooms and proximity
                to key commercial districts.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="group p-7 rounded-2xl bg-gradient-to-br from-[#0c1118] to-[#0f1a24] border border-slate-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span className="text-yellow-300 text-lg">●</span>
                Eco-Friendly & Wellness Stays
              </h4>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                Look for properties with sustainability certifications,
                eco-friendly resources, plant-forward dining, spa & wellness
                programs, and regenerative tourism initiatives.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SEARCH BLOCK */}
      <section
        id="search"
        className="py-12 bg-gradient-to-b from-[#02060a] to-[#04121a] border-t border-slate-800"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl p-8 bg-[#061018] border border-gray-800 shadow-lg">
            <h3 className="text-xl text-white mb-2">
              Search hotels & availability
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Search by city, property name, or tag.
            </p>

            <form
              action="/search"
              method="GET"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <input
                name="q"
                placeholder="City, hotel or tag"
                className="col-span-2 rounded-full px-4 py-3 bg-transparent border border-gray-700 text-gray-200 outline-none"
                aria-label="search hotels"
              />
              <button className="rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NEWSLETTER (form posts to /api/subscribe) */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="rounded-2xl p-10 shadow-xl"
            style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
          >
            <h2 className="text-2xl font-bold text-white">Stay updated</h2>
            <p className="text-white/90 mt-2">
              Subscribe for curated hotel collections, exclusive offers and
              travel guides.
            </p>

            <form
              action="/api/subscribe"
              method="POST"
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-full text-black"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 bg-white text-indigo-600 font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/80 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold text-white">
              Ready to plan your stay?
            </h4>
            <p className="text-sm text-gray-400">
              Search curated hotels, compare amenities and book with confidence.
            </p>
          </div>
          <div>
            <a
              href="/hotels/list"
              className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-semibold text-black shadow-lg"
            >
              Browse Hotels
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
