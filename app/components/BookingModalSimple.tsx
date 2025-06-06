'use client'

import { useState } from 'react'
import { X, Calendar, Clock, ExternalLink } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedLocation?: string | null
}

const services = [
  { 
    id: 'mens-cut', 
    name: "Men's Haircut", 
    price: 35, 
    duration: 20,
    // Replace with your actual Calendly/booking URLs
    bookingUrl: 'https://calendly.com/new-style-barber/mens-haircut'
  },
  { 
    id: 'beard', 
    name: 'Beard Trim', 
    price: 20, 
    duration: 20,
    bookingUrl: 'https://calendly.com/new-style-barber/beard-trim'
  },
  { 
    id: 'combo', 
    name: 'Haircut + Beard', 
    price: 50, 
    duration: 40,
    bookingUrl: 'https://calendly.com/new-style-barber/haircut-beard'
  },
  { 
    id: 'kids', 
    name: 'Kids Haircut', 
    price: 25, 
    duration: 20,
    bookingUrl: 'https://calendly.com/new-style-barber/kids-haircut'
  },
  { 
    id: 'senior', 
    name: 'Senior Haircut', 
    price: 30, 
    duration: 20,
    bookingUrl: 'https://calendly.com/new-style-barber/senior-haircut'
  },
]

// Alternative booking services you can use
const bookingServices = {
  calendly: {
    name: 'Calendly',
    description: 'Free scheduling with 1 calendar',
    color: 'bg-blue-500',
    icon: Calendar
  },
  square: {
    name: 'Square Appointments',
    description: 'Completely free appointment booking',
    color: 'bg-green-500',
    icon: Calendar
  },
  acuity: {
    name: 'Acuity Scheduling',
    description: 'Free plan for up to 50 clients',
    color: 'bg-purple-500',
    icon: Clock
  }
}

export default function BookingModalSimple({ isOpen, onClose }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState('')
  const [bookingMethod, setBookingMethod] = useState<'widget' | 'redirect'>('redirect')

  if (!isOpen) return null

  const handleServiceSelect = (service: typeof services[0]) => {
    setSelectedService(service.id)
    
    if (bookingMethod === 'redirect') {
      // Open booking service in new tab
      window.open(service.bookingUrl, '_blank')
      onClose()
    } else {
      // Could embed widget here
      // For now, redirect
      window.open(service.bookingUrl, '_blank')
      onClose()
    }
  }

  const handlePhoneBooking = () => {
    window.location.href = 'tel:3658776644'
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-brand-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-light-gray">
          <h2 className="text-2xl font-bold text-brand-blue">Book Your Appointment</h2>
          <button 
            onClick={onClose}
            className="text-brand-dark-text hover:text-brand-red transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Booking Options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-brand-dark-text mb-4">Choose Your Booking Method</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Online Booking */}
              <div className="p-4 border-2 border-brand-light-gray rounded-lg hover:border-brand-blue transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-brand-blue" size={24} />
                  <h4 className="font-semibold text-brand-dark-text">Online Booking</h4>
                </div>
                <p className="text-brand-light-text text-sm mb-4">
                  Select a service below to book instantly online with available time slots.
                </p>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className="w-full text-left p-3 border border-brand-light-gray rounded hover:border-brand-red hover:bg-brand-red/5 transition-all group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium text-brand-dark-text group-hover:text-brand-red">
                            {service.name}
                          </span>
                          <span className="text-sm text-brand-light-text block">
                            {service.duration} min • ${service.price}
                          </span>
                        </div>
                        <ExternalLink size={16} className="text-brand-light-text group-hover:text-brand-red" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone Booking */}
              <div className="p-4 border-2 border-brand-light-gray rounded-lg hover:border-brand-gold transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-brand-gold" size={24} />
                  <h4 className="font-semibold text-brand-dark-text">Call to Book</h4>
                </div>
                <p className="text-brand-light-text text-sm mb-4">
                  Prefer to speak with someone? Call us directly to schedule your appointment.
                </p>
                <button
                  onClick={handlePhoneBooking}
                  className="w-full bg-brand-gold text-brand-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors flex items-center justify-center gap-2"
                >
                  <span>(365) 877-6644</span>
                </button>
                <p className="text-xs text-brand-light-text mt-2 text-center">
                  Mon-Sat: 10am-7pm
                </p>
              </div>
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="bg-brand-light-gray/20 p-4 rounded-lg">
            <h4 className="font-semibold text-brand-dark-text mb-2">🚀 Setup Your Online Booking</h4>
            <p className="text-sm text-brand-light-text mb-3">
              To enable online booking, choose one of these free services:
            </p>
            <div className="grid gap-2">
              {Object.entries(bookingServices).map(([key, service]) => (
                <div key={key} className="flex items-center gap-3 p-2 bg-brand-white rounded border">
                  <div className={`w-8 h-8 ${service.color} rounded flex items-center justify-center`}>
                    <service.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <span className="font-medium text-brand-dark-text">{service.name}</span>
                    <span className="text-xs text-brand-light-text block">{service.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
