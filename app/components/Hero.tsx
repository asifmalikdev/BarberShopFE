'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-lux-bg px-4 py-16 md:py-24 overflow-hidden">
        {/* 3D Animated Glass Card */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-page-img.jpeg"
            alt="Barber Shop Background"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-lux-bg/80 via-lux-bg/60 to-transparent" />
        </div>

        {/* Animated 3D Gradient Spheres */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-lux-primary opacity-30 rounded-full blur-3xl -z-10 animate-hero-sphere1" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-lux-accent opacity-25 rounded-full blur-3xl -z-10 animate-hero-sphere2" />
        <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-lux-primary opacity-20 rounded-full blur-2xl -z-10 animate-hero-sphere3" />

        {/* Glassmorphic Card */}
        <div className="relative z-10 max-w-xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-lux-primary/30 p-10 animate-hero-glass">
          <h1 className="text-5xl md:text-6xl font-extrabold text-lux-primary mb-6 drop-shadow-glow animate-fade-in">
            Welcome to <span className="text-lux-accent">New Style</span> Barber Shop
          </h1>
          <p className="text-xl md:text-2xl text-lux-text mb-8 font-medium animate-fade-in animation-delay-200">
            Experience premium haircuts and grooming in Milton.<br />Book your appointment today!
          </p>
          <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-lux-accent text-lux-text px-6 py-2 rounded-full font-semibold hover:bg-lux-primary hover:text-lux-bg transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
        </div>

        {/* 3D Floating Barber Image */}
        <div className="relative w-full md:w-[420px] h-[300px] md:h-[420px] mt-12 md:mt-0 rounded-3xl shadow-2xl overflow-hidden border-4 border-lux-primary/20 z-10 animate-hero-float">
          <Image
            src="/images/hero-page-img.jpeg"
            alt="Barber Shop Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </section>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}