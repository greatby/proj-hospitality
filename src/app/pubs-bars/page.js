// src/app/pubs-bars/page.jsx
export const metadata = {
  title: "Pubs & Bars Guide — Rooftops, Craft Beer, Cocktails & Nightlife",
  description:
    "Complete guide to pubs, bars and nightlife worldwide — craft beer pubs, cocktail lounges, rooftop bars, sports bars, wine bars, and live music venues. Curated picks, tips and regional scenes.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "World Hospitality Guide - Pubs & Bars",
  "url": "https://yourwebsite.com/pubs-bars",
  "description": "Directory and guide to pubs, bars and nightlife venues worldwide.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yourwebsite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function PubsBarsPage() {
  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        aria-label="Nightlife hero"
        className="relative min-h-[60vh] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(3,7,12,0.75), rgba(9,12,16,0.5)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-sm font-medium border border-yellow-600/20 mb-4">
                <span>Nightlife Picks</span>
                <span className="ml-2 text-xs text-gray-300">Curated & Verified</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight drop-shadow-lg">
                Pubs, Bars & Nightlife — The Complete Guide
              </h1>

              <p className="mt-4 max-w-xl text-gray-200 text-lg">
                Discover craft beer pubs, cocktail bars, rooftop terraces and live-music venues — curated picks, regional scenes and practical tips to plan the perfect night out.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#featured"
                  className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-semibold text-black shadow-lg"
                >
                  Explore Featured
                </a>
                <a
                  href="#search"
                  className="inline-block rounded-full border border-gray-300/20 px-6 py-3 text-gray-200 hover:bg-white/5 transition"
                >
                  Find Venues
                </a>
              </div>

              <ul className="mt-6 text-sm text-gray-300 flex gap-4 flex-wrap">
                <li>Verified listings</li>
                <li>Craft & cocktails</li>
                <li>Global coverage</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=60", alt: "Cocktails on bar" },
                { src: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Rooftop terrace" },
                { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=60", alt: "Bar interior" },
                { src: "https://plus.unsplash.com/premium_photo-1661340650679-1821be737919?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Live music bar" }
              ].map((img) => (
                <div key={img.src} className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
                  <img src={img.src} alt={img.alt} className="w-full h-44 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="featured" className="py-12 bg-[#05070a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Featured Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Craft Beer Pubs", desc: "Rotating taps, local brews & brewpubs", img: "https://plus.unsplash.com/premium_photo-1722513608008-699ede10b1a2?q=80&w=532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { title: "Cocktail Bars", desc: "Mixology, speakeasies & tasting menus", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=60" },
              { title: "Rooftop Bars", desc: "Skyline views and sunset sessions", img: "https://images.unsplash.com/photo-1758165532022-a68f291317ba?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { title: "Live Music Venues", desc: "Jazz, rock & curated concerts", img: "https://images.unsplash.com/photo-1585812928194-747d57be4d75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
            ].map((c) => (
              <article key={c.title} className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={c.img} alt={c.title} className="w-full h-44 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <p className="text-sm text-gray-300">{c.desc}</p>
                  <a href="#" className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">Explore</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-dive sections (organized & refined from provided content) */}
    {/* SECTION 1 — TRADITIONAL PUBS & CRAFT BEER */}
<section className="py-24 border-t border-gray-800 bg-[#030409]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Traditional Pubs */}
    <div className="prose prose-invert max-w-none">
      <h3 className="text-white font-semibold tracking-tight">
        Traditional Pubs & Gastropubs
      </h3>
      <p className="text-gray-300 leading-relaxed">
        From centuries-old British taverns and warm Irish bars to contemporary gastropubs,
        these venues blend nostalgia, comfort and modern culinary flair. Expect inviting
        interiors, hearty menus and a sense of familiarity where conversations feel effortless.
      </p>

      <h4 className="text-yellow-400 font-medium mt-6">What you’ll love</h4>
      <ul className="text-gray-300 space-y-2">
        <li>Cozy, community-driven spaces with weekly events & live entertainment</li>
        <li>Elevated comfort food — roasts, grills, pies and seasonal chef specials</li>
        <li>Carefully maintained taps offering cask ales, local lagers & classic pub pours</li>
      </ul>
    </div>

    {/* Craft Beer */}
    <div className="prose prose-invert max-w-none">
      <h3 className="text-white font-semibold tracking-tight">
        Craft Beer Pubs & Brewpubs
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Designed for beer enthusiasts and curious explorers, these spaces highlight creativity
        and craftsmanship — from experimental brews and limited-series drops to fresh pours
        straight from the tank. It’s the perfect stop for tasting flights and discovering new styles.
      </p>

      <h4 className="text-yellow-400 font-medium mt-6">Highlights</h4>
      <ul className="text-gray-300 space-y-2">
        <li>Rotating tap lists featuring IPAs, sours, stouts & seasonal small batches</li>
        <li>On-site brewing at taprooms and brewpubs for the freshest pours</li>
        <li>Outdoor beer gardens, communal seating & relaxed taproom culture</li>
      </ul>
    </div>

  </div>
</section>


{/* SECTION 2 — COCKTAIL BARS & ROOFTOPS */}
<section className="py-24 border-t border-gray-800 bg-[#05060c]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Cocktail Bars */}
    <div className="prose prose-invert max-w-none">
      <h3 className="text-white font-semibold tracking-tight">
        Cocktail Bars & Lounges
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Whether it’s a candle-lit speakeasy tucked behind a secret door or a sleek bar
        experimenting with molecular mixology, cocktail venues focus on craft, storytelling
        and ambience. These are the spaces where technique and creativity meet elegance.
      </p>

      <h4 className="text-yellow-400 font-medium mt-6">Popular formats</h4>
      <ul className="text-gray-300 space-y-2">
        <li>
          <strong>Speakeasies</strong> — discreet entrances, low-light interiors & timeless classics
        </li>
        <li>
          <strong>Experimental cocktail labs</strong> — infusions, smoked cocktails & dramatic plating
        </li>
        <li>
          <strong>Hotel lounges</strong> — refined service, skyline views & premium spirit collections
        </li>
      </ul>
    </div>

    {/* Rooftop & Beach Bars */}
    <div className="prose prose-invert max-w-none">
      <h3 className="text-white font-semibold tracking-tight">
        Rooftop, Beach & Seasonal Bars
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Elevate your evenings with panoramic rooftop views, open-air beach decks, and
        seasonal pop-up concepts. These venues are perfect for sunset sessions, celebrations,
        curated playlists and relaxed conversations under the sky.
      </p>

      <h4 className="text-yellow-400 font-medium mt-6">Good to know</h4>
      <ul className="text-gray-300 space-y-2">
        <li>Sunset slots and premium seating often require advance reservations</li>
        <li>Look for weather-friendly setups — heaters, shaded cabanas, wind protection</li>
        <li>Some rooftops may have dress codes, entry cover or minimum spend rules</li>
      </ul>
    </div>

  </div>
</section>



      {/* Regional scenes & booking tips */}
      <section className="py-16 border-t border-gray-800 bg-[#04050a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-white">Regional Bar Scenes</h3>
            <p className="text-gray-300">
              Each city builds its own bar culture — microbreweries often thrive in some metros, while rooftop and cocktail cultures define others. Local regulations also shape nightlife availability and operating hours.
            </p>

            <ul className="text-gray-300">
              <li><strong>India:</strong> Microbreweries, rooftops & cocktail bars in major metros; state regulations vary.</li>
              <li><strong>Europe:</strong> Wine bars, beer gardens and historic pubs with strong local traditions.</li>
              <li><strong>Asia:</strong> Busy cocktail scenes, themed bars and late-night clubs in regional capitals.</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071017] to-[#0b1320] border border-gray-800 shadow-lg">
            <h4 className="text-yellow-400 text-xl font-semibold">Booking Tips & Safety</h4>
            <ol className="mt-4 list-decimal list-inside text-sm text-gray-300 space-y-2">
              <li>Compare direct and OTA rates for hotel bars & bottle service.</li>
              <li>Reserve in advance for peak hours and rooftop sunset slots.</li>
              <li>Check ID & local drinking laws (age limits, license hours).</li>
              <li>Plan transport home — late-night options may be limited in parts of town.</li>
              <li>Respect local customs and follow venue house rules.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Search block (no client handlers) */}
      <section id="search" className="py-12 border-t border-gray-800 bg-[#05060a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#061018] border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl text-white mb-2">Search venues</h3>
            <p className="text-sm text-gray-400 mb-6">Search by name, city, category or tag</p>

            <form action="/search" method="GET" className="flex gap-3">
              <input
                name="q"
                aria-label="Search pubs and bars"
                className="flex-1 rounded-full px-5 py-3 bg-transparent border border-gray-700 text-gray-200 outline-none"
                placeholder="e.g. craft beer, rooftop, jazz bar, Mumbai..."
              />
              <button className="rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 border-t border-gray-800 bg-[#04050a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold text-white">Ready for a great night out?</h4>
            <p className="text-sm text-gray-400">Explore curated lists, event guides and local recommendations across categories.</p>
          </div>
          <div>
            <a href="/featured" className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-semibold text-black shadow-lg">
              Browse Featured Venues
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
