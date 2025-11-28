import CoursesGrid from "@/components/website/PageSections/Course/CourseGrid";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(46,28,28,0.3) 0%, rgba(46,28,28,0.8) 50%, rgba(46,28,28,0.3) 100%)",
        }}
      ></div>

      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Cybersecurity Courses
        </h1>
        <p className="text-gray-100 max-w-2xl mx-auto text-lg mb-8">
          Master advanced cybersecurity skills with industry-leading courses.
          From ethical hacking to red team operations, advance your career.
        </p>
        <div className="flex justify-center gap-2">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-red-500">Courses</span>
        </div>
      </div>

      {/* Courses Grid */}

      <CoursesGrid />
    </div>
  );
}
