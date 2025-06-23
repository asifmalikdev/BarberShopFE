'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Scissors, Sparkles, Star, Instagram, Users } from 'lucide-react'
import BookingModal from './BookingModal'

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue/10 via-brand-gold/10 to-brand-red/10">
        {/* Animated SVG Waves */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-40 md:h-64" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFD700" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Exterior.png"
            alt="New Style Barber Shop Exterior"
            fill
            className="object-cover object-center scale-105 blur-[1px] brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/60 via-brand-gold/30 to-brand-red/40 opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-brand-gold animate-bounce" />
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-brand-white drop-shadow-lg mb-4 animate-slide-up">
              Where Style
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue animate-gradient-x">
                Meets Precision
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-brand-white/90 mb-10 animate-fade-in font-medium max-w-2xl mx-auto">
              Modern cuts, timeless style. Experience the difference at 
              <span className="inline-flex items-center font-bold text-brand-gold gap-2">
                <Image
                  src="/images/logo.png"
                  alt="New Style Barber Shop Logo"
                  width={36}
                  height={36}
                  className="inline-block align-middle rounded shadow"
                  style={{ marginBottom: '2px' }}
                />
                New Style Barber Shop
              </span>
              — the most trusted name in Milton.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-brand-gold text-brand-blue px-10 py-5 rounded-full font-extrabold text-xl hover:bg-brand-red hover:text-white transition-all transform hover:scale-105 shadow-2xl border-4 border-brand-blue/20"
              >
                Book Your Appointment
              </button>
              <a
                href="#services"
                className="text-brand-gold border-2 border-brand-gold px-10 py-5 rounded-full font-extrabold text-xl hover:bg-brand-gold hover:text-brand-blue hover:border-brand-blue transition-all"
              >
                View Services
              </a>
            </div>
            {/* Social proof and awards */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center gap-2 bg-brand-white/80 px-4 py-2 rounded-full shadow">
                <Star className="w-5 h-5 text-brand-gold" />
                <span className="font-bold text-brand-blue">5.0</span>
                <span className="text-brand-dark-text">on Google</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-white/80 px-4 py-2 rounded-full shadow">
                <Scissors className="w-5 h-5 text-brand-red" />
                <span className="font-bold text-brand-blue">10+ Years</span>
                <span className="text-brand-dark-text">of Excellence</span>
              </div>
              <a href="#locations" className="flex items-center gap-2 bg-brand-white/80 px-4 py-2 rounded-full shadow hover:bg-brand-gold/20 transition focus:ring-2 focus:ring-brand-gold">
                <Users className="w-5 h-5 text-brand-blue" />
                <span className="font-bold text-brand-blue">2 Locations</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-white/80 px-4 py-2 rounded-full shadow hover:bg-brand-gold/20 transition">
                <Instagram className="w-5 h-5 text-brand-blue" />
                <span className="font-bold text-brand-blue">@newstylebarber</span>
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
          <div className="w-6 h-10 border-2 border-brand-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-red rounded-full mt-2" />
          </div>
        </div>
      </section>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}