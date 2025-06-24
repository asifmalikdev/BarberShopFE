import { Facebook, Instagram, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-14 shadow-2xl rounded-t-3xl mt-24 overflow-hidden">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-extrabold text-3xl mb-2 tracking-widest drop-shadow-lg text-yellow-400">
            New Style Barber Shop
          </h3>
          <p className="text-base opacity-80 font-medium">Modern Cuts in Milton</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125"
            >
              <Facebook className="w-7 h-7 hover:text-yellow-400 drop-shadow" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125"
            >
              <Instagram className="w-7 h-7 hover:text-yellow-400 drop-shadow" />
            </a>
            <a
              href="tel:4161234567"
              aria-label="Phone"
              className="transition-transform hover:scale-125"
            >
              <Phone className="w-7 h-7 hover:text-yellow-400 drop-shadow" />
            </a>
          </div>
          <span className="text-sm mt-2 opacity-90 font-semibold">Call us: (416) 123-4567</span>
        </div>
        <div className="text-xs text-gray-300 mt-4 md:mt-0 text-center font-mono">
          &copy; {new Date().getFullYear()} New Style Barber Shop.
          <br className="md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  )
}