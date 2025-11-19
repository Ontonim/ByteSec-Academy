'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 500))
    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <section className="w-full rounded-2xl inset-0 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100 py-20 px-4 sm:py-32">
      <div className="mx-auto max-w-2xl rounded-lg">
        {/* Heading */}
        <h1 className="text-balance text-center text-4xl font-bold text-white sm:text-5xl">
          Subscribe Our Newsletter
        </h1>

        {/* Description */}
        <p className="mt-6 text-center text-lg text-gray-400">
          Get the latest cybersecurity training insights, exclusive pentesting techniques, real-world hacking scenarios, and industry trends delivered straight to your inbox
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex flex-col sm:flex-row gap-3 rounded-xl overflow-hidden bg-white p-1.5">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-transparent text-gray-900 placeholder-gray-500 outline-none"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
