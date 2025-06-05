'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Scissors } from 'lucide-react'
import BookingModal from './BookingModal'

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-brand-white/75 z-10" />
        {/* Subtle stripes */}
        <div className="absolute inset-0 opacity-10 z-5">
          <div className="absolute inset-0 barber-stripes-subtle" />
        </div>
        
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Exterior.png"
            alt="New Style Barber Shop Exterior"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-blue mb-6 animate-slide-up">
              Where Style
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">
                Meets Precision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-dark-text mb-12 animate-fade-in font-medium" style={{ animationDelay: '200ms' }}>
              Modern cuts, timeless style. Experience the difference at New Style Barber Shop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-brand-red text-brand-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-gold transition-all transform hover:scale-105 shadow-xl"
              >
                Book Your Appointment
              </button>
              
              <a
                href="#services"
                className="text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-blue hover:text-brand-white transition-all"
              >
                View Services
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-brand-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-brand-red">2</div>
                <div className="text-brand-dark-text font-medium">Locations</div>
              </div>
              <div className="bg-brand-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-brand-gold">10-7</div>
                <div className="text-brand-dark-text font-medium">Open Daily</div>
              </div>
              <div className="bg-brand-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-brand-red">20</div>
                <div className="text-brand-dark-text font-medium">Min Service</div>
              </div>
              <div className="bg-brand-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-brand-gold">5★</div>
                <div className="text-brand-dark-text font-medium">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-red rounded-full mt-2" />
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}