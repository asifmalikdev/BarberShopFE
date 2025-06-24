'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-lux-bg px-4 py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/photo-1671750145646-0f4d791b8025.avif"
            alt="Barber Shop Background"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-lux-bg/40" />
        </div>

        {/* Decorative Gradient Circles */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-lux-primary opacity-20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lux-accent opacity-20 rounded-full blur-3xl -z-10" />

        <div className="max-w-xl z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-lux-primary mb-6 drop-shadow-lg">
            Welcome to <span className="text-lux-accent">New Style</span> Barber Shop
          </h1>
          <p className="text-xl md:text-2xl text-lux-text mb-8 font-medium">
            Experience premium haircuts and grooming in Milton.<br />Book your appointment today!
          </p>
          <a
            href="#booking"
            className="inline-block bg-lux-accent text-lux-text px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-lux-primary hover:text-lux-bg transition-all"
          >
            Book Now
          </a>
        </div>
        <div className="relative w-full md:w-[480px] h-[320px] md:h-[480px] mt-12 md:mt-0 rounded-3xl shadow-2xl overflow-hidden border-4 border-lux-primary/10 z-10">
          <Image
            src="/images/photo-1671750145646-0f4d791b8025.avif"
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