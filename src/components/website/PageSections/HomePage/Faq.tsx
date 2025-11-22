import Image from "next/image";
import FAQAccordion from "./FaqAccordian";

const Faq = () => {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 bg-linear-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start w-full">
            <div className="relative w-3/4">
              <div className="absolute inset-0 bg-linear-to-r from-red-600/20 to-transparent rounded-2xl blur-3xl"></div>
              <Image
                src="https://designingmedia.com/redlight/wp-content/uploads/2023/12/accordian-left-img.png"
                alt="FAQ Support"
                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border border-red-500/20"
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
