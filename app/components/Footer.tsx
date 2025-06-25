'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-lux-secondary text-lux-text py-12 px-4 shadow-inner border-t border-lux-primary/20">
      {/* Decorative 3D gradient */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-lux-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-lux-accent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/images/exterior-logo.png"
            alt="New Style Barber Shop"
            width={120}
            height={48}
            className="rounded-lg shadow-md border border-lux-primary/30 bg-lux-bg"
          />
          <span className="text-lux-primary font-semibold text-lg">
            New Style Barber Shop
          </span>
          <span className="text-lux-text/70 text-sm">
            Premium Cuts & Grooming in Milton
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row items-center gap-6 text-base font-medium">
          <Link href="#home" className="hover:text-lux-primary transition-colors">Home</Link>
          <Link href="#services" className="hover:text-lux-primary transition-colors">Services</Link>
          <Link href="#team" className="hover:text-lux-primary transition-colors">Our Team</Link>
          <Link href="#locations" className="hover:text-lux-primary transition-colors">Locations</Link>
          <Link href="#footer" className="hover:text-lux-primary transition-colors">Contact</Link>
        </nav>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <a href="tel:4161234567" className="text-lux-accent font-semibold hover:text-lux-primary transition-colors">
            (416) 123-4567
          </a>
          <span className="text-lux-text/70 text-sm">6050 Main St W, Milton, ON</span>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-lux-primary transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lux-text"><circle cx="12" cy="12" r="4"/><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M17.5 6.5v.001"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-lux-primary transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lux-text"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Google" className="hover:text-lux-primary transition-colors">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lux-text"><path d="M21.35 11.1H12v2.8h5.35c-.23 1.2-1.4 3.5-5.35 3.5-3.2 0-5.8-2.7-5.8-6s2.6-6 5.8-6c1.8 0 3 .7 3.7 1.4l2.5-2.4C17.1 2.7 14.8 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.7 0 9.5-4 9.5-9.7 0-.7-.1-1.2-.15-1.7z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-lux-text/50">
        &copy; {new Date().getFullYear()} New Style Barber Shop. All rights reserved.
      </div>
    </footer>
  )
}