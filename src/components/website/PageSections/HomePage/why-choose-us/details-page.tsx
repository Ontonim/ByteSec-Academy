'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Shield, Lock, Award } from 'lucide-react'
import NewsletterSubscribe from '../newsletter'
interface DetailsProps {
  cardId: string
}

const detailsContent: Record<string, any> = {
  security: {
    title: 'Security Services',
    icon: <Shield className="w-16 h-16" />,
    mainDescription: 'Comprehensive threat detection and prevention systems that monitor, analyze, and respond to security threats in real-time, protecting your critical infrastructure.',
    sections: [
      {
        heading: 'Real-Time Threat Detection',
        content: 'Our advanced AI-powered systems continuously monitor your network 24/7, detecting potential threats before they become critical issues. We employ machine learning algorithms that adapt to emerging threat patterns.',
      },
      {
        heading: 'Rapid Response Protocol',
        content: 'When threats are detected, our automated response systems take immediate action to contain and neutralize risks. Our security team is always on standby for manual intervention if needed.',
      },
      {
        heading: 'Infrastructure Protection',
        content: 'We protect critical infrastructure including servers, databases, and cloud environments with multi-layered security protocols ensuring your business continuity.',
      },
    ],
    benefits: [
      'Zero-downtime threat detection',
      'Automated incident response',
      '24/7 monitoring and support',
      'Compliance with international standards',
    ],
  },
  privacy: {
    title: 'Data Privacy',
    icon: <Lock className="w-16 h-16" />,
    mainDescription: 'Ensure your sensitive data remains protected with our advanced encryption and compliance solutions, meeting international security standards and regulations.',
    sections: [
      {
        heading: 'Advanced Encryption',
        content: 'We use military-grade encryption (AES-256) for all data at rest and in transit. Your information is protected by the highest standards in the industry.',
      },
      {
        heading: 'Compliance Management',
        content: 'Stay compliant with GDPR, CCPA, HIPAA, and other regulations. Our systems are built to meet and exceed international privacy requirements.',
      },
      {
        heading: 'Data Minimization',
        content: 'We follow the principle of data minimization, collecting only the information necessary for operations and securely disposing of data when no longer needed.',
      },
    ],
    benefits: [
      'AES-256 encryption standard',
      'GDPR & CCPA compliant',
      'Audit trails and logging',
      'Regular security assessments',
    ],
  },
  certified: {
    title: 'Industry Certified',
    icon: <Award className="w-16 h-16" />,
    mainDescription: 'Our team holds industry-recognized certifications and expertise in cybersecurity, ensuring your organization receives world-class protection and support.',
    sections: [
      {
        heading: 'Certified Professionals',
        content: 'All team members hold certifications including CISSP, CEH, CCSK, and other industry-recognized credentials from leading security organizations.',
      },
      {
        heading: 'Continuous Training',
        content: 'Our team undergoes continuous professional development to stay updated with the latest security threats, techniques, and best practices.',
      },
      {
        heading: 'Expert Support',
        content: 'With over 15 years of combined experience, our team is equipped to handle complex security challenges and provide strategic guidance.',
      },
    ],
    benefits: [
      'CISSP certified experts',
      'Industry-leading certifications',
      'Continuous skill development',
      'Proven track record',
    ],
  },
}

export function DetailsPage({ cardId }: DetailsProps) {
  const details = detailsContent[cardId]

  if (!details) {
    return (
      <div className="min-h-screen inset-0 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-4">Details not found</h1>
          <Link
            href="/#services"
            className="inline-flex items-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen inset-0 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#services"
          className="inline-flex items-center mb-8 px-4 py-2 rounded-lg bg-slate-900/50 text-slate-300 hover:bg-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Image/Visual Section */}
          <div className="relative group rounded-xl overflow-hidden h-96 bg-gradient-to-br from-red-600/20 to-slate-900 border border-red-500/30 flex items-center justify-center">
            <div className="text-red-500 opacity-50">
              {details.icon}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-start space-y-6">
            {/* Icon and Title */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-4 bg-red-600/10 rounded-xl text-red-500">
                {details.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{details.title}</h1>
              </div>
            </div>

            {/* Main Description */}
            <p className="text-slate-300 text-lg leading-relaxed">{details.mainDescription}</p>

            {/* Benefits List */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {details.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-600 mt-1" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.sections.map((section: any, index: number) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{section.heading}</h3>
              <p className="text-slate-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
<div className='my-24 '>
          <NewsletterSubscribe />
</div>      </div>
    </section>
  )
}
