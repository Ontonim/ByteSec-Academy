import NewsletterSubscribe from "@/components/website/PageSections/HomePage/newsletter";
import TestimonialCarousel from "@/components/website/PageSections/Review/ReviewCaruosel";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen relative">
      {/* Carousel Section */}
      <div className="relative z-10">
        <TestimonialCarousel />
      </div>

      <div className="">
        <NewsletterSubscribe />
      </div>
    </main>
  );
}
