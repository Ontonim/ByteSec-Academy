import React from "react";
import Image from "next/image";

export default function NewsBlogSection() {
  const blogs = [
    {
      image:
        "https://designingmedia.com/redlight/wp-content/uploads/2023/12/01.jpg",
      title: "Protect Your Workplace From Cyber Attacks",
      description:
        "In an era where technology plays a central role in business operations, the threat of cyber attacks",
    },
    {
      image:
        "https://designingmedia.com/redlight/wp-content/uploads/2023/12/02-300x180.jpg",
      title: "The Security Risks Of Changing Package Owners",
      description:
        "In the dynamic landscape of software development, collaboration and code-sharing are common practice",
    },
    {
      image:
        "https://designingmedia.com/redlight/wp-content/uploads/2023/12/03-300x180.jpg",
      title: "Avoid Mistakes In Social Media Posts",
      description:
        "Social media has become an integral part of our daily lives, providing a platform for individuals an",
    },
  ];

  return (
    <div className="relative py-10">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Latest News & Blog
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo
            ligula eget dolorenean massa.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#191919] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 p-8"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-300 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
