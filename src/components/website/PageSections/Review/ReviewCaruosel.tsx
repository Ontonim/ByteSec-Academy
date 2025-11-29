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
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % testimonials.length),
      7000
    );
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(true);
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <div className="relative w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[#202020] z-0"></div>

      {/* Header */}
      <div className="text-center relative z-10 pt-28 sm:pt-32 md:pt-36 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Testimonials
        </h1>
        <p className="text-slate-300 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Hear from our satisfied clients about their experience working with us
          and the impact we&apos;ve made on their business growth.
        </p>
      </div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <Image
          src="/images/about-section2-left-img.png"
          alt="Decorative"
          width={200} // adjust size
          height={200} // adjust size
          className="object-contain"
        />
      </div>

      {/* Carousel Wrapper */}
      <div
        className="max-w-7xl mx-auto overflow-hidden relative z-10 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 py-16"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-4 sm:gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="min-w-full flex gap-4 sm:gap-6"
              >
                {/* First Card */}
                <div className="flex-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>

                {/* Second Card for lg+ */}
                <div className="hidden lg:flex flex-1">
                  <TestimonialCard
                    testimonial={testimonials[(idx + 1) % testimonials.length]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 pb-12 relative z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-500 w-6 sm:w-8 h-2 sm:h-3"
                : "bg-slate-600 w-2.5 h-2.5 sm:w-3 sm:h-3 hover:bg-slate-500"
            }`}
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
      className={`rounded-xl p-6 sm:p-8 h-full flex flex-col transition-all duration-300 mt-6 sm:mt-10 ${
        isHovered
          ? "shadow-lg shadow-red-500/20 bg-[#1a1a1a]"
          : "bg-[#191919] border border-slate-700"
      }`}
    >
      {/* Top Section: Image + Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={400}
          height={400}
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg shrink-0 object-cover transition-all duration-300 ${
            !isHovered ? "grayscale" : ""
          }`}
        />

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white">
            {testimonial.name}
          </h3>
          <p
            className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
              isHovered ? "text-red-500" : "text-slate-400"
            }`}
          >
            {testimonial.title}
          </p>
        </div>

        <div
          className={`text-3xl sm:text-4xl mt-2 sm:mt-0 transition-colors duration-300 ${
            isHovered ? "text-slate-600" : "text-slate-800"
          }`}
        >
          &quot;
        </div>
      </div>

      {/* Quote */}
      <p
        className={`leading-relaxed flex-1 mb-4 sm:mb-6 text-sm sm:text-base transition-colors duration-300 ${
          isHovered ? "text-slate-300" : "text-slate-400"
        }`}
      >
        {testimonial.quote}
      </p>

      {/* Bottom Section: Stars */}
      <div
        className={`pt-3 sm:pt-4 border-t transition-colors duration-300 ${
          isHovered ? "border-slate-700" : "border-slate-800"
        }`}
      >
        <div className="flex justify-center sm:justify-start gap-1 sm:gap-1.5">
          {Array(testimonial.rating)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={16} // Mobile friendly
                className={`transition-colors duration-300 ${
                  isHovered
                    ? "fill-red-500 text-red-500"
                    : "fill-slate-600 text-slate-600"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
