export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen w-full bg-black text-gray-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] via-[#2a1d1a] to-black opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-20">
        <div className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-xl shadow-2xl p-10 overflow-y-auto max-h-[90vh]">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-300 mb-6">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            website.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                1. Information Collection
              </h2>
              <p className="text-gray-300">
                We may collect personal information such as your name, email
                address, and payment details when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                2. Use of Information
              </h2>
              <p className="text-gray-300">
                The information we collect is used to provide and improve our
                services, communicate with you, and ensure a secure experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                3. Information Sharing
              </h2>
              <p className="text-gray-300">
                We do not sell or rent your personal information. We may share
                it with trusted third-party partners for service-related
                purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                4. Data Security
              </h2>
              <p className="text-gray-300">
                We implement reasonable security measures to protect your data
                from unauthorized access, disclosure, or alteration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                5. Changes to this Policy
              </h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the updated date.
              </p>
            </section>
          </div>

          <p className="mt-8 text-gray-400 text-sm text-center">
            Last updated: November 27, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
