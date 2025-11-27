export default function TermsConditions() {
  return (
    <div className="relative min-h-screen w-full bg-black text-gray-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e] via-[#2a1d1a] to-black opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-20">
        <div className="w-full max-w-4xl bg-gray-900 bg-opacity-90 rounded-xl shadow-2xl p-10 overflow-y-auto max-h-[90vh]">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Terms and Conditions
          </h1>

          <p className="text-gray-300 mb-6">
            Welcome to our website. Please read these terms and conditions
            carefully before using our services.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                2. Privacy Policy
              </h2>
              <p className="text-gray-300">
                Your privacy is important to us. Please review our Privacy
                Policy for information on how we collect, use, and disclose
                personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                3. User Responsibilities
              </h2>
              <p className="text-gray-300">
                You agree to use the website only for lawful purposes and not to
                engage in any activity that may harm the website or other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                4. Intellectual Property
              </h2>
              <p className="text-gray-300">
                All content on this site, including text, graphics, logos, and
                images, is the property of the website and protected by
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-2">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-300">
                We are not liable for any damages arising from the use or
                inability to use the website, including direct, indirect,
                incidental, or consequential damages.
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
