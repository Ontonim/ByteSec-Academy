import { Check } from "lucide-react"
import Image from "next/image"

export default function SecurityFeatures() {
  return (
    <section className="relative py-10">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="https://designingmedia.com/redlight/wp-content/uploads/2023/12/cyber-security-right-img.png"
            alt="Cybersecurity Protection"
            className="w-full h-auto rounded-xl shadow-2xl"
            width={800}
            height={800}
          />
        </div>

        <div className="order-2 md:order-1">
          <h3 className="text-4xl md:text-4xl font-bold text-white mb-6 text-balance">
           Providing Best <span className="text-red-600">Cyber Security</span>  Solutions
          </h3>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Protect your organization with our comprehensive security solutions. Our advanced threat detection system
            monitors and prevents cyberattacks in real-time, ensuring your data remains safe and secure.
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <div className="shrink-0 mt-1">
                <Check className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Real-time Threat Detection</h4>
                <p className="text-gray-400">24/7 monitoring and instant alerts for potential security threats</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="shrink-0 mt-1">
                <Check className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Data Encryption</h4>
                <p className="text-gray-400">Military-grade encryption to protect sensitive information</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="shrink-0 mt-1">
                <Check className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Compliance Management</h4>
                <p className="text-gray-400">Meet regulatory requirements with automated compliance tracking</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
