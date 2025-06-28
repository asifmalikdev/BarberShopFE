'use client'

import { useState } from 'react'
import { X, Calendar, Clock, ExternalLink } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedLocation?: string | null
}

const services = [
  { id: 'mens-cut', name: "Men's Haircut", price: 35, duration: 20 },
  { id: 'beard', name: 'Beard Trim', price: 20, duration: 20 },
  { id: 'combo', name: 'Haircut + Beard', price: 50, duration: 40 },
  { id: 'kids', name: 'Kids Haircut', price: 25, duration: 20 },
  { id: 'senior', name: 'Senior Haircut', price: 30, duration: 20 },
]

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
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '' })

  if (!isOpen) return null

  const handleServiceSelect = (service: typeof services[0]) => {
    setSelectedService(service)
    setShowConfirmation(false)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowConfirmation(true)
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
          {/* Business Info */}
          <div className="mb-6 text-center">
            <div className="font-semibold text-brand-dark-text text-lg">
              6050 Main St W Unit 1, Milton, ON
            </div>
            <div className="text-brand-blue text-base mt-1">
              <a href="tel:+13658776644" className="hover:underline">
                +1 365-877-6644
              </a>
            </div>
          </div>
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
                  Select a service and fill out your details to book instantly online.
                </p>
                <div className="space-y-2">
                  {showConfirmation ? (
                    <div className="text-center text-brand-blue font-semibold py-8">
                      Thank you! Your booking has been received.<br />
                      We’ll contact you soon to confirm your appointment.
                    </div>
                  ) : selectedService ? (
                    <form onSubmit={handleBookingSubmit} className="flex flex-col gap-3">
                      <div className="font-medium text-brand-dark-text mb-2">
                        Service: <span className="text-brand-blue">{selectedService.name}</span>
                      </div>
                      <input
                        name="name"
                        required
                        placeholder="Your Name"
                        className="input input-bordered"
                        value={form.name}
                        onChange={handleFormChange}
                      />
                      <input
                        name="phone"
                        required
                        placeholder="Phone Number"
                        className="input input-bordered"
                        value={form.phone}
                        onChange={handleFormChange}
                      />
                      <input
                        name="date"
                        type="date"
                        required
                        className="input input-bordered"
                        value={form.date}
                        onChange={handleFormChange}
                      />
                      <input
                        name="time"
                        type="time"
                        required
                        className="input input-bordered"
                        value={form.time}
                        onChange={handleFormChange}
                      />
                      <button
                        type="submit"
                        className="bg-brand-blue text-white font-bold py-2 rounded-xl hover:bg-brand-dark-text transition"
                      >
                        Book Now
                      </button>
                      <button
                        type="button"
                        className="text-brand-red mt-2 underline"
                        onClick={() => setSelectedService(null)}
                      >
                        &larr; Back to services
                      </button>
                    </form>
                  ) : (
                    services.map((service) => (
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
                    ))
                  )}
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
                  <span>+1 365-877-6644</span>
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
