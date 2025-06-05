import { Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-blue border-t-2 border-brand-red relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-transparent to-brand-blue/90"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              NEW STYLE
              <span className="block text-sm font-normal text-brand-gold">BARBER SHOP</span>
            </h3>
            <p className="text-brand-light-gray">
              Where style meets precision. Modern cuts, timeless service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-brand-light-gray hover:text-brand-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-brand-light-gray hover:text-brand-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-brand-light-gray hover:text-brand-gold transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#locations" className="text-brand-light-gray hover:text-brand-gold transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#footer" className="text-brand-light-gray hover:text-brand-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-brand-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="tel:3658776644"
                className="flex items-center gap-3 text-brand-light-gray hover:text-brand-gold transition-colors"
              >
                <Phone size={18} className="text-brand-red" />
                (365) 877-6644
              </a>
              <div className="flex items-start gap-3 text-brand-light-gray">
                <MapPin size={18} className="text-brand-red mt-0.5" />
                <div>
                  6050 Main St W Unit 1<br />
                  Milton, ON L9T 2M3
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-gold text-center">
          <p className="text-brand-light-gray text-sm">
            © {new Date().getFullYear()} New Style Barber Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}