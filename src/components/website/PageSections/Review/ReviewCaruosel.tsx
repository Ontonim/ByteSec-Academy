"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO - Tech Innovations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    quote:
      "Working with this team has transformed how we approach our marketing strategy. The results exceeded all our expectations and we've seen a 150% increase in engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Founder - Digital Solutions",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    quote:
      "The expertise and dedication shown by the team is unmatched. They understood our vision immediately and delivered exceptional results on time and within budget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Director - Creative Agency",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    quote:
      "Outstanding service from start to finish. The team's attention to detail and creative approach helped us stand out in a competitive market. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    title: "VP - Global Marketing",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    quote:
      "This partnership has been instrumental in scaling our business. The strategic insights and implementation support were invaluable to our success.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Williams",
    title: "Owner - E-commerce Platform",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&h=300&fit=crop",
    quote:
      "Best decision we made all year. The team went above and beyond to ensure our project was successful. Their professionalism is truly commendable.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(true);
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <div>
      <div
        className="max-w-7xl mx-auto overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full flex gap-6">
                <div className="flex-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
                <div className="hidden lg:flex flex-1">
                  <TestimonialCard
                    testimonial={
                      testimonials[
                        (testimonials.indexOf(testimonial) + 1) %
                          testimonials.length
                      ]
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-500 w-8 h-3"
                : "bg-slate-600 w-3 h-3 hover:bg-slate-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-xl p-8 h-full flex flex-col transition-all duration-300 ${
        isHovered
          ? "bg-linear-to-br from-red-900/40 via-slate-800 to-slate-900 border-2 border-red-500 shadow-lg shadow-red-500/20"
          : "bg-slate-900 border border-slate-700"
      }`}
    >
      {/* Top Section with Image and Info */}
      <div className="flex items-start gap-6 mb-6">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={400}
          height={400}
          className={`w-20 h-20 rounded-lg shrink-0 object-cover transition-all duration-300 ${!isHovered ? "grayscale" : ""}`}
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 text-white">
            {testimonial.name}
          </h3>
          <p
            className={`text-sm font-medium transition-colors duration-300 ${isHovered ? "text-red-500" : "text-slate-400"}`}
          >
            {testimonial.title}
          </p>
        </div>
        <div
          className={`text-4xl transition-colors duration-300 ${isHovered ? "text-slate-600" : "text-slate-800"}`}
        >
          &quot;
        </div>
      </div>

      {/* Quote */}
      <p
        className={`leading-relaxed flex-1 mb-6 transition-colors duration-300 ${isHovered ? "text-slate-300" : "text-slate-400"}`}
      >
        {testimonial.quote}
      </p>

      {/* Bottom Section - Border and Stars */}
      <div
        className={`pt-4 transition-colors duration-300 ${isHovered ? "border-t border-slate-700" : "border-t border-slate-800"}`}
      >
        <div className="flex gap-1">
          {Array(testimonial.rating)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={18}
                className={`transition-colors duration-300 ${isHovered ? "fill-red-500 text-red-500" : "fill-slate-600 text-slate-600"}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
