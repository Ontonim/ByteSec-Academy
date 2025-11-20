"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Globe, Shield, TrendingUp, Users } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  number: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { icon: <Globe className="w-12 h-12" />, number: 3325, suffix: "+", label: "Global Projects" },
  { icon: <Shield className="w-12 h-12" />, number: 4579, suffix: "+", label: "Clients Protect" },
  { icon: <TrendingUp className="w-12 h-12" />, number: 100, suffix: "%", label: "Service Guarantee" },
  { icon: <Users className="w-12 h-12" />, number: 7845, suffix: "+", label: "Experts Team" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      start = Math.floor(progress * target)
      setCurrent(start)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrent(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target])

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-bold text-white">
      {current.toLocaleString()}
      {suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="w-full py-10 px-4 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100">
      <div className="max-w-6xl mx-auto">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-8 rounded-lg transition-all duration-500 overflow-hidden group bg-transparent border border-red-800 ${
        isHovered ? "scale-105 -translate-y-2 border-slate-700" : "scale-100"
      }`}
    >
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-red-500 transition-all duration-500 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />

      <div className="relative z-10">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-500 ${
            isHovered ? "bg-red-500 text-white" : "bg-slate-800 text-gray-400"
          }`}
        >
          {stat.icon}
        </div>

        <AnimatedNumber target={stat.number} suffix={stat.suffix} />

        <p className="mt-3 text-lg text-gray-400">{stat.label}</p>
      </div>
    </div>
  )
}
