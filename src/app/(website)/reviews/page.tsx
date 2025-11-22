import TestimonialCarousel from "@/components/website/PageSections/Review/ReviewCaruosel"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-16 relative">
      <div className="absolute inset-0 bg-linear-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>
      {/* Header Section */}
      <div className="pt-16 pb-12 text-center px-4 relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6">Testimonials</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Hear from our satisfied clients about their experience working with us and the impact we&apos;ve made on their
          business growth.
        </p>

        {/* Breadcrumb */}
        <div className="flex justify-center gap-2 mt-8 text-slate-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-red-500">Testimonials</span>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-16 relative z-10">
        <TestimonialCarousel />
      </div>
    </main>
  )
}
