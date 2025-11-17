// src/app/restaurants/page.jsx
export const metadata = {
  title: "Restaurants — World Hospitality Guide",
  description:
    "Complete restaurant guide: fine dining, casual dining, ethnic cuisine, fast food, and specialty restaurants worldwide.",
};

const heroImg =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80";
const heroThumbs = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
];

// JSON-LD for Restaurants Page
const restaurantsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Complete Restaurant Guide",
  url: "https://yourwebsite.com/restaurants",
  description:
    "Complete guide to restaurants worldwide including fine dining, casual dining, ethnic cuisine, street food and specialty dining.",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "World Hospitality Guide",
    url: "https://yourwebsite.com",
  },
  about: [
    "fine dining",
    "casual dining",
    "Indian cuisine",
    "international cuisine",
    "seafood restaurants",
    "vegetarian & vegan restaurants",
    "steakhouses",
    "food courts",
    "buffet restaurants",
  ],
};

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-slate-100">
      {/* HERO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantsJsonLd) }}
      />
      <section
        aria-label="Restaurants hero"
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.6), rgba(2,6,23,0.6)), url('${heroImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full bg-amber-400/10 text-amber-300 px-4 py-1 text-sm font-medium border border-amber-600/20">
                <span>Premium Editorial</span>
                <span className="text-xs text-slate-300">
                  Curated & Verified
                </span>
              </p>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight drop-shadow-lg">
                The Complete Restaurant Guide — Discover The Best Places To Eat
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Fine dining to casual eats, regional specialties to
                international cuisine — expertly curated listings, editorial
                features, and practical advice to help you find the perfect
                table.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 text-black font-semibold px-6 py-3 shadow-lg hover:scale-[1.02] transition"
                >
                  Explore Categories
                </a>
                <a
                  href="#search"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-slate-200 hover:bg-white/5 transition"
                >
                  Search Listings
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
                <li>Verified listings</li>
                <li>Expert reviews</li>
                <li>Global coverage</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {heroThumbs.map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition"
                >
                  <img
                    src={src}
                    alt={`Featured image ${i + 1}`}
                    className="w-full h-48 sm:h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + PUBLISHER NOTE */}
      <section className="relative py-20 border-t border-slate-800 bg-gradient-to-b from-slate-900/40 to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Welcome to the Complete Restaurant Guide
          </h2>

          {/* EXPLANATION WRAPPER */}
          <div className="mx-auto max-w-3xl">
            {/* Decorative line */}
            <div className="w-16 h-1 mx-auto bg-amber-400/70 rounded-full mb-8"></div>

            {/* Dropcap paragraph */}
            <p className="text-lg sm:text-xl leading-relaxed text-slate-300">
              <span className="float-left mr-2 -mt-1 text-5xl leading-none font-serif text-amber-400">
                T
              </span>
              his directory covers dining establishments across India and around
              the world — from luxurious fine dining and cozy casual eateries to
              authentic regional cuisine, bustling street food, and innovative
              specialty concepts.
            </p>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300">
              Whether you're planning a romantic evening, a family outing, a
              business meeting, or simply searching for a new culinary
              experience, our meticulously curated guide helps you choose the
              perfect venue based on cuisine, budget, occasion, and location.
            </p>

            {/* Accent card */}
            <div className="mt-10 p-6 sm:p-8 bg-slate-800/40 border border-slate-700 rounded-2xl shadow-xl backdrop-blur-md">
              <p className="text-base sm:text-lg text-slate-200">
                Updated regularly with new openings, chef-driven concepts,
                regional discoveries, and global dining trends — all verified
                for authenticity and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section id="categories" className="py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-6">Featured Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fine Dining",
                desc: "Tasting menus, seasonal ingredients, impeccable service.",
                img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Luxury Hotels",
                desc: "City palaces, boutique resorts and curated stays.",
                img: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Cozy Cafes",
                desc: "Artisan coffee, quiet corners and light bites.",
                img: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Rooftop Bars",
                desc: "Cocktails with a skyline view and night vibes.",
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-lg font-semibold">{c.title}</h4>
                  <p className="text-sm text-slate-300">{c.desc}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-medium"
                  >
                    Explore
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL TWO-COLUMN: REGIONAL INDIAN & INTERNATIONAL */}
      <section className="relative py-20 border-t border-slate-800 bg-gradient-to-b from-slate-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN — INDIAN CUISINE */}
          <article className="space-y-6">
            {/* Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-[2px] bg-amber-400"></span>
                <h3 className="text-2xl font-serif font-semibold text-white">
                  Indian Cuisine — Regional Flavors & Heritage
                </h3>
              </div>
            </div>

            {/* Para */}
            <p className="text-slate-300 leading-relaxed text-lg">
              Indian restaurants celebrate the country’s vast culinary diversity
              — from North Indian tandoor cooking and rich gravies to South
              Indian rice-based specialties, coastal seafood delicacies, and
              unique tribal cuisines from the Northeast. Each region offers
              deeply rooted traditions, spice profiles, and iconic dishes.
            </p>

            {/* List Block */}
            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 shadow-lg">
              <h4 className="text-amber-400 font-medium text-lg mb-3">
                Regional Specialties
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  🍢 <span className="text-white/90">North India —</span>{" "}
                  tandoori dishes, rich gravies, kebabs
                </li>
                <li>
                  🌾 <span className="text-white/90">South India —</span> dosa,
                  sambhar, filter coffee
                </li>
                <li>
                  🌊 <span className="text-white/90">Coastal & Goan —</span>{" "}
                  seafood, kokum, vindaloo variants
                </li>
                <li>
                  🌿 <span className="text-white/90">Northeast —</span> tribal
                  ingredients & fermented flavors
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg">
              Modern Indian restaurants elevate tradition with contemporary
              techniques, curated tasting menus, artistic plating, and
              farm-to-table sourcing that honors heritage while embracing
              innovation.
            </p>
          </article>

          {/* RIGHT COLUMN — INTERNATIONAL */}
          <article className="space-y-6">
            {/* Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-[2px] bg-amber-400"></span>
                <h3 className="text-2xl font-serif font-semibold text-white">
                  International Cuisines — Global Culinary Journeys
                </h3>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg">
              Experience authentic global flavors across Italian trattorias,
              Japanese sushi bars, French bistros, Mexican cantinas, Thai
              kitchens, Korean BBQ houses, and Middle Eastern dining rooms.
              Every cuisine brings its own techniques, ingredients, heritage,
              and story.
            </p>

            {/* Highlight Block */}
            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 shadow-lg">
              <h4 className="text-amber-400 font-medium text-lg mb-3">
                Highlights
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  🍝 <span className="text-white/90">Italian —</span> pasta,
                  wood-fired pizzas, regional wines
                </li>
                <li>
                  🥢 <span className="text-white/90">Chinese —</span> dim sum,
                  Szechuan spice, regional dishes
                </li>
                <li>
                  🍣 <span className="text-white/90">Japanese —</span> sushi,
                  ramen, kaiseki tasting menus
                </li>
                <li>
                  🌮 <span className="text-white/90">Mexican & Latin —</span>{" "}
                  tacos, mole, ceviche
                </li>
                <li>
                  🍛{" "}
                  <span className="text-white/90">Thai & Southeast Asia —</span>{" "}
                  curries, sweet-sour-spicy balance
                </li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg">
              Specialty dining concepts — from seafood bars and steakhouses to
              vegetarian, vegan and farm-to-table restaurants — highlight
              craftsmanship, quality sourcing, and culinary passion.
            </p>
          </article>
        </div>
      </section>

      {/* DEEP DIVE SECTIONS: SPECIALTY RESTAURANTS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-semibold mb-6">
            Specialty & Concept Dining
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="rounded-2xl bg-slate-800 p-6">
              <h4 className="text-lg font-semibold text-amber-300 mb-2">
                Seafood
              </h4>
              <p className="text-sm text-slate-300">
                Fresh catches, raw bars, and coastal traditions — from
                dock-to-table fish markets to upscale oyster bars.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-800 p-6">
              <h4 className="text-lg font-semibold text-amber-300 mb-2">
                Steakhouses
              </h4>
              <p className="text-sm text-slate-300">
                Premium beef programs, dry-ageing, and wine pairings — classic
                club-style interiors and modern reinterpretations.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-800 p-6">
              <h4 className="text-lg font-semibold text-amber-300 mb-2">
                Vegetarian & Vegan
              </h4>
              <p className="text-sm text-slate-300">
                Plant-forward chefs creating inventive menus using seasonal
                produce and modern techniques — fully plant-based tasting menus
                available.
              </p>
            </article>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-2xl overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1694557827553-7a53050d9d8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="chef at work"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-xl font-semibold">
                  Farm-to-Table & Organic
                </h4>
                <p className="text-sm text-slate-300 mt-2">
                  Restaurants prioritizing local sourcing and sustainability;
                  menus rotate with seasons and farmers' harvests.
                </p>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
                alt="rooftop bar"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-xl font-semibold">Rooftop & Waterfront</h4>
                <p className="text-sm text-slate-300 mt-2">
                  Panoramic views enhance cocktails and evening dining — perfect
                  for celebrations and sunsets.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PRACTICALS: HOW TO CHOOSE & FEATURES */}
      <section className="relative py-20 border-t border-slate-800 bg-gradient-to-b from-black to-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-[2px] bg-amber-400"></span>
              <h3 className="text-3xl font-serif font-semibold text-white">
                Finding the Right Restaurant
              </h3>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              Choosing the ideal restaurant depends on your occasion, budget,
              cuisine preferences, dietary needs, accessibility requirements,
              and the kind of experience you want — whether it’s a romantic
              evening, a family meal, or a quick casual outing. Explore menus,
              reviews, ambiance, and practical factors before making your
              choice.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Online Reservations",
                desc: "Check availability, wait times, and cancellation rules before visiting.",
                icon: "🗓️",
              },
              {
                title: "Accessibility",
                desc: "Wheelchair ramps, accessible restrooms, and step-free entrances.",
                icon: "♿",
              },
              {
                title: "Family Friendly",
                desc: "Kids menus, high chairs, wide seating, and a welcoming atmosphere.",
                icon: "👨‍👩‍👧",
              },
              {
                title: "Pet Friendly",
                desc: "Outdoor seating for guests with pets and water bowl provisions.",
                icon: "🐾",
              },
              {
                title: "Modern Convenience",
                desc: "Digital menus, QR ordering, contactless payments, and loyalty programs.",
                icon: "📱",
              },
              {
                title: "Entertainment & Private Dining",
                desc: "Live music, chef’s tables, private rooms, and event-ready spaces.",
                icon: "🎶",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-slate-800/40 border border-slate-700 hover:border-amber-400/40 
                     transition shadow-lg"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-xl text-white font-medium mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH BLOCK */}
      <section id="search" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 p-8">
            <h4 className="text-lg font-semibold mb-2">Search listings</h4>
            <p className="text-sm text-slate-400 mb-4">
              Search by name, city, cuisine, or tag
            </p>

            <form action="/search" method="GET" className="flex gap-3">
              <input
                name="q"
                placeholder="Search restaurants, hotels, cafes..."
                className="flex-1 rounded-full px-5 py-3 bg-transparent border border-slate-700 text-slate-100 outline-none"
                aria-label="Search restaurants"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 bg-amber-400 text-black font-semibold"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NEWSLETTER (no client JS) */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="rounded-2xl p-10"
            style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
          >
            <h4 className="text-2xl font-bold text-white">Stay Updated</h4>
            <p className="text-white/90 mt-2">
              Get curated hospitality updates, events and seasonal picks.
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
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full outline-none text-black"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 bg-white text-indigo-700 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* QUICK CTA */}
      <section className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold">
              Ready to find your next favorite place?
            </h4>
            <p className="text-slate-400">
              Browse curated lists, read editorial features and check verified
              reviews.
            </p>
          </div>
          <a
            href="/restaurants"
            className="inline-flex items-center rounded-full bg-amber-400 text-black px-6 py-3 font-semibold shadow"
          >
            Browse Restaurants
          </a>
        </div>
      </section>
    </main>
  );
}
