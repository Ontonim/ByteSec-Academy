'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, Lock, Award } from 'lucide-react'

interface CardData {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const cardsData: CardData[] = [
  {
    id: 'security',
    icon: <Shield className="w-8 h-8" />,
    title: 'Security Services',
    description: 'Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean',
  },
  {
    id: 'privacy',
    icon: <Lock className="w-8 h-8" />,
    title: 'Data Privacy',
    description: 'Lorem ipsum dolor sit ametconsectetuer adipiscing elitenean commodo ligula eget dolor aenean massa',
  },
  {
    id: 'certified',
    icon: <Award className="w-8 h-8" />,
    title: 'Industry Certified',
    description: 'Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean',
  },
]

export function WhyChooseUsEnhanced() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="relative bg-[#141414] py-20 inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-linear-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elitanean commodo ligula eget dolorenean massa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-8 rounded-lg transition-all duration-500 cursor-pointer transform ${
                hoveredCard === card.id
                  ? 'bg-red-600/15 border border-red-500 shadow-2xl shadow-red-600/20 scale-105'
                  : 'bg-slate-900/50 border border-slate-800 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30'
              }`}
            >
              
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 transition-all duration-300 ${
                  hoveredCard === card.id ? 'bg-red-600 text-white' : 'bg-red-600/10 text-red-500'
                }`}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{card.description}</p>

              {/* Learn More Link */}
              <Link
                href={`/why-choose-us/${card.id}`}
                className={`inline-flex items-center text-sm font-semibold transition-all duration-300 ${
                  hoveredCard === card.id ? 'text-red-400' : 'text-slate-400'
                } hover:text-red-400 group`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              {/* Bottom border accent */}
              {hoveredCard === card.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
