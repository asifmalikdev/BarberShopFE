'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import BookingModalSimple from './BookingModalSimple'
import Link from './Link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 w-full bg-lux-bg/95 backdrop-blur-sm z-50 border-b-2 border-lux-secondary/50 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-lux-primary/10 via-transparent to-lux-accent/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <span className="inline-flex items-center justify-center bg-white/80 rounded-full shadow-lg border-2 border-lux-primary/30 p-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <Image
                    src="/images/logo.jpeg"
                    alt="New Style Barber Shop"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    priority
                  />
                </span>
                {/* <span className="font-extrabold text-xl md:text-2xl text-lux-primary tracking-wide drop-shadow-glow group-hover:text-lux-accent transition-colors">
                  New Style
                </span> */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-lux-text hover:text-lux-primary transition-colors font-medium">
                Home
              </Link>
              <a href="#services" className="text-lux-text hover:text-lux-primary transition-colors font-medium">
                Services
              </a>
              <a href="#team" className="text-lux-text hover:text-lux-primary transition-colors font-medium">
                Our Team
              </a>
              <a href="/blog" className="text-lux-text hover:text-lux-primary transition-colors font-medium">
                Blog
              </a>
              {/* <a href="#locations" className="text-lux-text hover:text-lux-primary transition-colors font-medium">
                Locations
              </a> */}
              <a href="#footer" className="text-lux-text hover:text-lux-primary transition-colors font-medium">
                Contact
              </a>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-lux-accent text-lux-text px-6 py-2 rounded-full font-semibold hover:bg-lux-primary hover:text-lux-bg transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-lux-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-lux-bg/95 backdrop-blur-sm border-t border-lux-secondary">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#home"
                className="text-lux-text hover:text-lux-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-lux-text hover:text-lux-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#team"
                className="text-lux-text hover:text-lux-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </a>
              <a
                href="/blog"
                className="text-lux-text hover:text-lux-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#locations"
                className="text-lux-text hover:text-lux-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </a>
              <a
                href="#footer"
                className="text-lux-text hover:text-lux-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setIsBookingOpen(true)
                  setIsMenuOpen(false)
                }}
                className="bg-lux-accent text-lux-text px-6 py-2 rounded-full font-semibold hover:bg-lux-primary hover:text-lux-bg transition-all w-full"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      <BookingModalSimple isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}