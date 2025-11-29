"use client";
import type React from "react";

import { useState } from "react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  

  return (
    <section className="relative py-10">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      <div
        className="
    absolute inset-0 
    bg-[radial-gradient(ellipse_at_center,rgba(46,28,28,0.35)_0%,rgba(32,32,32,0)_80%)]
    backdrop-blur-sm
  "
      ></div>
      <div
        className="relative w-full max-w-7xl mx-auto text-center rounded-2xl shadow-xl p-8 md:p-14 z-10 
                  bg-[#2E1C1C] bg-[linear-gradient(90deg,rgba(46,28,28,1)_0%,rgba(25,25,25,1)_37%)]
                  flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Subscribe Our Newsletter
        </h2>

        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
          Get the latest cybersecurity insights, threat intelligence, and
          industry best practices delivered directly to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 rounded-lg bg-white overflow-hidden shadow-lg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-6 text-gray-700 placeholder-gray-500 focus:outline-none text-sm md:text-base focus:ring-2 focus:ring-red-500"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 sm:px-8 bg-red-600 hover:bg-red-700 text-white font-semibold transition-all text-sm md:text-base"
            >
              Subscribe
            </button>
          </div>
        </form>

        {isSubmitted && (
          <p className="mt-4 text-green-400 font-medium animate-pulse">
            ✓ Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
}
