"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewsletterSubscribe from "@/components/website/PageSections/HomePage/newsletter";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>

      <div
        className="
    absolute inset-0 
    bg-[radial-gradient(ellipse_at_center,rgba(46,28,28,0.35)_0%,rgba(32,32,32,0)_80%)]
    backdrop-blur-sm
  "
      ></div>

      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
        <Image
          src="/images/about-us-section-right-icon.png"
          alt="Decorative"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Header Section */}
      <section className="py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <nav className="flex justify-center items-center gap-2 text-gray-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-red-500">Contact Us</span>
        </nav>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Drop Us A Message For Any Query
              </h2>
              <p className="text-gray-200 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elitanean
                commodolligula egetmassa.
              </p>
            </div>

            {/* Contact Information Blocks */}
            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 hover:bg-red-500 transition duration-300">
                  <MapPin className="w-6 h-6 text-gray-400 hover:text-white transition" />
                </div>
                <div>
                  <h3 className="text-red-500 font-bold mb-2">Where We Are:</h3>
                  <p className="text-gray-400">
                    121 King Street Melbourne, 3000, Australia
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 hover:bg-red-500 transition duration-300">
                  <Phone className="w-6 h-6 text-gray-400 hover:text-white transition" />
                </div>
                <div>
                  <h3 className="text-red-500 font-bold mb-2">Phone:</h3>
                  <p className="text-gray-400">
                    +1 234 567 89 0 | +1 234 567 89 0
                  </p>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 hover:bg-red-500 transition duration-300">
                  <Mail className="w-6 h-6 text-gray-400 hover:text-white transition" />
                </div>
                <div>
                  <h3 className="text-red-500 font-bold mb-2">Email:</h3>
                  <p className="text-gray-400">support@redlight.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-red-500 focus:outline-none transition"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-red-500 focus:outline-none transition"
                />
              </div>

              {/* Subject Input */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-red-500 focus:outline-none transition"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-red-500 focus:outline-none transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mt-6 cursor-pointer"
              >
                Send Message
              </Button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-center animate-fade-in">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <div className="py-10">
        <NewsletterSubscribe />
      </div>
    </main>
  );
}
