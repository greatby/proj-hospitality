// app/cafes/page.jsx
export const metadata = {
  title: "Cafes & Coffee Shops — World Hospitality Guide (Premium)",
  description:
    "Discover specialty coffee, tea houses, bakery cafes, brunch spots and premium cafe experiences worldwide. Curated guides, accessibility info and curated picks.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Cafe Guide - World Hospitality Guide",
  "url": "https://yourwebsite.com/cafes",
  "description":
    "Premium cafe guide covering specialty coffee, tea houses, bakery cafes, study cafes and themed cafés worldwide.",
};

export default function CafesPage() {
  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        aria-label="Cafes hero"
        className="relative w-full bg-cover bg-center flex items-center min-h-[68vh] lg:min-h-[78vh] text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(3,7,12,0.75), rgba(6,8,12,0.5)), url('https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=2000&q=60')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-sm font-medium border border-yellow-600/15">
                <span className="text-sm">Curated Picks</span>
                <span className="ml-2 text-xs text-gray-300">Specialty & premium cafés</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight drop-shadow-lg">
                Specialty Cafés & Coffee Culture — Curated Worldwide
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
                Explore specialty coffee, artisanal bakeries, refined tea houses and immersive themed cafés — guides, reviews and practical tips to find the perfect café experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="#collections"
                  className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-semibold text-black shadow-lg transform hover:-translate-y-0.5 transition"
                >
                  View Curated Collections
                </a>

                <a
                  href="#search"
                  className="inline-block rounded-full border border-gray-600/40 px-6 py-3 text-gray-200 hover:bg-white/5 transition"
                >
                  Quick Cafe Search
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-400 flex flex-wrap gap-4">
                <span>Single-origin roasters</span>
                <span>•</span>
                <span>Tea specialists</span>
                <span>•</span>
                <span>Bakery collaborations</span>
              </div>
            </div>

            {/* Collage */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=60",
                  alt: "Barista latte art",
                },
                {
                  src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=60",
                  alt: "Cozy cafe interior",
                },
                {
                  src: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=60",
                  alt: "Bakery pastries",
                },
                {
                  src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=60",
                  alt: "People working in cafe",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collections / Featured */}
      <section id="collections" className="py-16 bg-[#06080b] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-white">Curated Cafe Collections</h2>
            <p className="text-sm text-gray-400">Handpicked by our editors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Third Wave Roasters",
                subtitle: "Single-origin & micro-lot cafes",
                img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Bakery Collaborations",
                subtitle: "Patisseries & artisan breads",
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Tea Houses & Ceremonial",
                subtitle: "Matcha, gongfu & tasting rooms",
                img: "https://images.unsplash.com/photo-1739868352011-18b6c26614d7?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Study & Cowork Cafés",
                subtitle: "Quiet zones & charging hubs",
                img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=60",
              },
            ].map((c) => (
              <article key={c.title} className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-[#071017] to-[#0b1014]">
                <img src={c.img} alt={c.title} className="w-full h-44 object-cover" />
                <div className="p-5 bg-gradient-to-t from-black/60 to-transparent absolute inset-0 flex flex-col justify-end">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <p className="text-sm text-gray-300">{c.subtitle}</p>
                  <a href="#" className="mt-4 inline-block text-sm bg-yellow-400 text-black px-4 py-2 rounded-full font-medium">Explore</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guide intro (refined welcome) */}
     <section className="py-16 border-t border-gray-800 bg-[#040506]">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="relative rounded-3xl p-12 bg-gradient-to-br from-[#0a0f17] to-[#06080d] shadow-2xl border border-gray-800 overflow-hidden">

      {/* Top subtle gold glow */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>

      {/* Decorative blurred glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="relative prose prose-invert max-w-none lg:prose-xl">

        <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
          Welcome to the <span className="text-yellow-400">Complete Café Guide</span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Explore the world’s finest specialty coffee shops, artisanal bakeries, ceremonial tea houses,
          and quiet study cafés — thoughtfully curated to help you discover the perfect space for your
          coffee ritual, creative sessions, conversations, or weekend exploration.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed border-l-4 border-yellow-500/30 pl-4">
          Whether you're chasing the perfect espresso, a cozy corner to work from, or a unique
          themed café to experience — our guide helps you navigate the best offerings across cities worldwide.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Regional & Cuisine highlights (refined) */}
      <section className="py-20 border-t border-gray-800 bg-[#06080b]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

    {/* LEFT — Regional Traditions */}
    <article className="rounded-2xl p-8 bg-gradient-to-br from-[#0a0f16] to-[#05070b] border border-gray-800 shadow-xl prose prose-invert max-w-none relative overflow-hidden">

      {/* Gold Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>

      <h3 className="text-2xl font-semibold text-white mb-4">
        Regional Coffee & Tea Traditions
      </h3>

      <p className="text-gray-300 leading-relaxed">
        From Indian filter coffee to Japanese matcha ceremonies, Nordic light roasts to
        Southeast Asian milk tea culture — regional brewing traditions influence flavor,
        café ambience, and service style. Understanding these traditions helps you know
        what to order and what to expect in different café formats.
      </p>

      <h4 className="text-yellow-400 mt-6 mb-2 font-medium">
        Quick Regional Notes
      </h4>

      <ul className="text-gray-300 space-y-2">
        <li><strong className="text-white">India</strong> — Filter coffee, Irani cafés, South Indian traditions, emerging specialty scenes.</li>
        <li><strong className="text-white">Japan</strong> — Kissaten culture, slow brewing, precision matcha bars.</li>
        <li><strong className="text-white">Nordics</strong> — Light roast philosophy, single-origin purity, clean flavor profiles.</li>
        <li><strong className="text-white">Southeast Asia</strong> — Milk tea houses, bubble-tea innovations, condensed-milk brews.</li>
      </ul>
    </article>

    {/* RIGHT — Specialty Formats */}
    <article className="rounded-2xl p-8 bg-gradient-to-br from-[#0a0f16] to-[#05070b] border border-gray-800 shadow-xl prose prose-invert max-w-none relative overflow-hidden">

      {/* Gold Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>

      <h3 className="text-2xl font-semibold text-white mb-4">
        Specialty Café Formats & Service
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Modern cafés vary widely — from third-wave specialty bars to pastry-driven bakeries,
        serene tea salons, and productivity-focused study cafés. Each format is designed
        around different experiences, brewing methods, and service styles.
      </p>

      <h4 className="text-yellow-400 mt-6 mb-2 font-medium">
        Formats to Look For
      </h4>

      <ul className="text-gray-300 space-y-2">
        <li><strong className="text-white">Micro-roaster cafés</strong> — Hyper-focused on single-origin or house roasts.</li>
        <li><strong className="text-white">Bakery cafés</strong> — Viennoiserie, fresh breads, and coffee crafted for pastry pairings.</li>
        <li><strong className="text-white">Tea salons</strong> — Ceremonial service, curated tastings, premium loose-leaf menus.</li>
        <li><strong className="text-white">Study cafés</strong> — Quiet zones, ergonomic seating, hourly billing models.</li>
      </ul>
    </article>

  </div>
</section>


      {/* Search section */}
      <section id="search" className="py-16 bg-[#040506] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl p-8 bg-gradient-to-b from-[#071017] to-[#041018] border border-gray-800 shadow-lg">
            <h3 className="text-xl text-white mb-2">Find Cafés</h3>
            <p className="text-sm text-gray-400 mb-6">Search by name, city, style or tag (this is a server-safe search form).</p>

            <form className="flex gap-3" action="/search" method="GET">
              <input
                name="q"
                className="flex-1 rounded-full px-5 py-3 bg-transparent border border-gray-700 text-gray-200 outline-none"
                placeholder="Search cafés, roasters, or neighborhoods..."
                aria-label="Search cafes"
              />
              <button className="rounded-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold">Search</button>
            </form>
          </div>
        </div>
      </section>

      {/* Features / tips (refined Finding the Right Restaurant -> Cafe) */}
    <section className="py-20 border-t border-gray-800 bg-[#06080b]">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">

    <div className="rounded-2xl p-10 bg-gradient-to-br from-[#0a0f16] to-[#05070b] border border-gray-800 shadow-xl prose prose-invert max-w-none relative overflow-hidden">

      {/* Gold Accent Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>

      <h3 className="text-white text-2xl font-semibold mb-4">
        Choosing the Perfect Café
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Whether you're searching for a quiet study corner, a specialty roaster for single-origin
        tastings, or a cozy bakery café for slow brunches, the right café depends on your mood,
        purpose, and preferences. Great cafés combine atmosphere, comfort, and quality — from
        reliable Wi-Fi to clear menus and thoughtful service.
      </p>

      <h4 className="text-yellow-400 mt-6 mb-2 font-medium">
        Key Features Worth Checking
      </h4>

      <ul className="text-gray-300 space-y-2">
        <li>
          <strong className="text-white">Hours & peak times</strong> — plan around rush hours,
          especially for long work sessions.
        </li>

        <li>
          <strong className="text-white">Seating & layout</strong> — booths for comfort,
          communal tables for groups, single desks for focused work.
        </li>

        <li>
          <strong className="text-white">Wi-Fi & power outlets</strong> — essential for
          remote workers, students, and digital nomads.
        </li>

        <li>
          <strong className="text-white">Dietary & allergen clarity</strong> — vegan, gluten-free,
          nut-free, or sugar-free options clearly labeled.
        </li>

        <li>
          <strong className="text-white">Accessibility</strong> — step-free entrances, ramps,
          accessible restrooms, and comfortable spacing.
        </li>

        <li>
          <strong className="text-white">Ambience & noise levels</strong> — choose quiet zones
          for productivity or lively cafés for social time.
        </li>
      </ul>
    </div>

  </div>
</section>


      {/* Guides grid (refined In-depth Guides) */}
      <section className="py-16 bg-[#040506] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white mb-6">In-Depth Cafe Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Accessibility & Family Friendly",
                desc: "Rooms for strollers, family seating and clear accessibility info.",
                icon: "☕",
              },
              {
                title: "Work & Study Spots",
                desc: "Long-stay friendly cafés, strong Wi-Fi and power access.",
                icon: "💻",
              },
              {
                title: "Sustainability & Sourcing",
                desc: "Ethical roasters, composting programs and local sourcing.",
                icon: "🌱",
              },
            ].map((g) => (
              <article key={g.title} className="p-6 rounded-2xl bg-gradient-to-br from-[#071017] to-[#09121a] border border-gray-800 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{g.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-yellow-400 mb-1">{g.title}</h4>
                    <p className="text-sm text-gray-300">{g.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-gray-800 bg-[#040506]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold text-white">Ready to discover your next favorite café?</h4>
            <p className="text-sm text-gray-400">Browse curated lists, check menus and read verified reviews.</p>
          </div>

          <a href="/cafes/collections" className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-semibold text-black shadow-lg">
            Browse Collections
          </a>
        </div>
      </section>
    </>
  );
}
