"use client";

import { Button } from "@/components/ui/button";
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
    <section className="py-10 inset-0 bg-[#141414] relative">
      <div className="absolute inset-0 bg-linear-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>
      <div className="relative w-full max-w-7xl mx-auto px-4 text-center rounded-lg shadow-lg p-30 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
          Subscribe Our Newsletter
        </h2>

        <p className="text-gray-400 text-lg mb-8 leading-relaxed text-pretty">
          Get the latest cybersecurity insights, threat intelligence, and
          industry best practices delivered directly to your inbox. Stay ahead
          of emerging threats.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 cursor-pointer"
          >
            Subscribe
          </Button>
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
