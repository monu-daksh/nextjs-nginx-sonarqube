"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      {/* 🔝 HEADER */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-indigo-600">DevOps Optics</h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#features" className="hover:text-indigo-500 transition">Features</a>
          <a href="#metrics" className="hover:text-indigo-500 transition">Metrics</a>
          <a href="#about" className="hover:text-indigo-500 transition">About</a>
        </nav>

        <button className="md:hidden border rounded-md px-3 py-1">Menu</button>
      </header>

      {/* 🔍 HERO + SEARCH */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-4 py-20 bg-gradient-to-b from-indigo-100 to-white">
        <h2 className="text-5xl font-extrabold mb-4 text-indigo-700">
          Monitor • Deploy • Automate
        </h2>
        <p className="max-w-2xl text-gray-600 mb-8">
          Stay on top of your infrastructure with live CI/CD metrics, container health, and automated deployment insights.
        </p>

        <form
          onSubmit={handleSearch}
          className="flex w-full max-w-lg items-center bg-white shadow rounded-full overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search deployments, builds, or logs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-3 focus:outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-3 flex items-center gap-2 hover:bg-indigo-700 transition"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </form>
      </section>

      {/* 📊 DEVOPS OPTICS SECTION */}
      <section id="features" className="grid gap-8 md:grid-cols-3 px-8 py-16 bg-white">
        {[
          {
            title: "CI/CD Pipeline",
            desc: "Track build and deploy stages with real-time logs and status indicators.",
            icon: "🧱",
          },
          {
            title: "Container Insights",
            desc: "Monitor Docker container health, CPU, and memory usage instantly.",
            icon: "🐳",
          },
          {
            title: "Infrastructure Metrics",
            desc: "Visualize uptime, latency, and server performance using live dashboards.",
            icon: "📈",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border shadow hover:shadow-lg transition bg-gray-50"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* 🧾 FOOTER */}
      <footer className="bg-indigo-700 text-white text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} DevOps Optics — Built with Next.js 15 + Tailwind + TypeScript</p>
      </footer>
    </main>
  );
}
