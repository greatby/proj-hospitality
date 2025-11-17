// src/components/Newsletter.jsx
"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 'ok' | 'error' | ''

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    try {
      // placeholder: integrate with your API / service
      setStatus("ok");
      setEmail("");
      setTimeout(() => setStatus(""), 3500);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl p-12 shadow-xl" style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}>
      <h2 className="text-3xl font-bold text-white mb-2">Stay Updated!</h2>
      <p className="text-white/90">Get curated hospitality updates, events and premium picks.</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-6 max-w-lg mx-auto">
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-6 py-3 rounded-full text-black"
          aria-label="Email address"
        />
        <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:scale-105 transition">
          Subscribe
        </button>
      </form>

      {status === "ok" && <p className="mt-4 text-sm text-green-200">Subscribed — thank you!</p>}
      {status === "error" && <p className="mt-4 text-sm text-red-200">Something went wrong. Try again later.</p>}
    </div>
  );
}
