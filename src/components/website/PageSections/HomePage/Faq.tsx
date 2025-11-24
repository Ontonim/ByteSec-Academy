import Image from "next/image";
import FAQAccordion from "./FaqAccordian";

const Faq = () => {
  return (
    <section className="relative py-10">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start w-full">
            <div className="relative w-3/4">
              <div className=""></div>
              <Image
                src="https://designingmedia.com/redlight/wp-content/uploads/2023/12/accordian-left-img.png"
                alt="FAQ Support"
                className="relative rounded-2xl w-full h-auto object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-px bg-red-600"></div>
              <span className="text-red-600 font-semibold text-sm tracking-widest uppercase">
                FAQ
              </span>
            </div>

            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                General Questions <br />
                Frequently Asked{" "}
                <span className="text-red-600">Questions?</span>
              </h2>
            </div>

            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
