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
              <Link href="/">
                <div className="relative group">
                  <Image
                    src="/images/exterior-logo.png"
                    alt="New Style Barber Shop"
                    width={180}
                    height={70}
                    className="h-14 w-auto rounded-lg shadow-md border border-lux-secondary/50 transition-all duration-300 group-hover:shadow-lg group-hover:border-lux-accent/30"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lux-primary/10 to-lux-accent/10 rounded-lg opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-lg ring-1 ring-lux-primary/20 group-hover:ring-lux-accent/40 transition-all duration-300"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-lux-text hover:text-lux-primary transition-colors font-medium">
                Home
              </a>
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