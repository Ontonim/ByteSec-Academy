import { ServiceCard } from "@/components/website/PageSections/services/service-card";

const services = [
  {
    id: 1,
    title: "Threat Intelligence",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Security Assessment",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    icon: "📋",
  },
  {
    id: 3,
    title: "Compromise Assessment",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    icon: "🔗",
  },
  {
    id: 4,
    title: "Incident Response",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    icon: "🚨",
  },
  {
    id: 5,
    title: "Cloud Security",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    icon: "☁️",
  },
  {
    id: 6,
    title: "Security Training",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    icon: "👨‍🏫",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      <div className="px-6 py-16 text-center relative">
        <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-base leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex justify-center items-center gap-2 text-sm">
          <a href="#" className="text-neutral-300 hover:text-white transition">
            Home
          </a>
          <span className="text-neutral-600">/</span>
          <span className="text-red-500">Our Services</span>
        </div>
      </div>

      <div className="px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
}
