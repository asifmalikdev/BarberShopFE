'use client'

import { useState, useEffect } from 'react'
import { X, Calendar, Clock, MapPin, User } from 'lucide-react'
import { format, addDays, setHours, setMinutes, isAfter, addHours } from 'date-fns'
import Toast from './Toast'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedLocation?: string | null
}

const locations = [
  { id: 'location1', name: 'Milton - Main Street' },
  { id: 'location2', name: 'Milton - Location 2' },
]

const services = [
  { id: 'mens-cut', name: "Men's Haircut", price: 35, duration: 20 },
  { id: 'beard', name: 'Beard Trim', price: 20, duration: 20 },
  { id: 'combo', name: 'Haircut + Beard', price: 50, duration: 40 },
  { id: 'kids', name: 'Kids Haircut', price: 25, duration: 20 },
  { id: 'senior', name: 'Senior Haircut', price: 30, duration: 20 },
]

const barbers = [
  { id: 'any', name: 'Any Available' },
  { id: 'barber1', name: 'Barber 1' },
  { id: 'barber2', name: 'Barber 2' },
]

export default function BookingModal({ isOpen, onClose, preselectedLocation }: BookingModalProps) {
  // State variables for the booking flow
  const [step, setStep] = useState(1)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedBarber, setSelectedBarber] = useState('any')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null)

  useEffect(() => {
    if (preselectedLocation) {
      setSelectedLocation(preselectedLocation)
    }
  }, [preselectedLocation])

  const generateTimeSlots = () => {
    if (!selectedDate) return []
    
    const slots = []
    const now = new Date()
    const minBookingTime = addHours(now, 2) // 2 hours minimum advance booking
    
    for (let hour = 10; hour < 19; hour++) {
      for (let minute = 0; minute < 60; minute += 20) {
        const slotTime = setMinutes(setHours(selectedDate, hour), minute)
        
        // Check if slot is at least 2 hours in the future
        if (isAfter(slotTime, minBookingTime)) {
          slots.push(format(slotTime, 'h:mm a'))
        }
      }
    }
    
    return slots
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s()+-]+$/
    if (!phoneRegex.test(customerInfo.phone) || customerInfo.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    // Name validation
    if (customerInfo.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    const bookingData = {
      location: locations.find(l => l.id === selectedLocation)?.name,
      service: services.find(s => s.id === selectedService)?.name,
      barber: barbers.find(b => b.id === selectedBarber)?.name,
      date: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : '',
      time: selectedTime,
      customer: customerInfo,
    }

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (result.success) {
        // Show success message
        setToast({
          message: 'Booking confirmed! You will receive a confirmation email shortly.',
          type: 'success'
        })
        
        // Reset form and close modal after delay
        setTimeout(() => {
          resetForm()
          onClose()
        }, 2000)
      } else {
        setToast({
          message: 'There was an error processing your booking. Please try again or call us at (365) 877-6644.',
          type: 'error'
        })
      }
    } catch (error) {
      console.error('Booking error:', error)
      setToast({
        message: 'There was an error processing your booking. Please try again or call us at (365) 877-6644.',
        type: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    setSelectedLocation(preselectedLocation || '')
    setSelectedService('')
    setSelectedBarber('any')
    setSelectedDate(null)
    setSelectedTime('')
    setCustomerInfo({ name: '', email: '', phone: '' })
  }

  if (!isOpen) return null

  return (
    <>
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-brand-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-brand-light-gray shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-brand-white border-b border-brand-light-gray p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-brand-blue">Book Your Appointment</h2>
          <button
            onClick={() => {
              resetForm()
              onClose()
            }}
            className="text-brand-dark-text hover:text-brand-red transition-colors"
            aria-label="Close booking modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="p-6 border-b border-brand-light-gray">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= i ? 'bg-brand-red text-brand-white' : 'bg-brand-light-gray text-brand-dark-text'
                }`}>
                  {i}
                </div>
                {i < 4 && (
                  <div className={`w-full h-1 mx-2 ${
                    step > i ? 'bg-brand-red' : 'bg-brand-light-gray'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Location & Service */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-brand-red" />
                  Select Location
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location.id)}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedLocation === location.id
                          ? 'border-brand-red bg-brand-red/10'
                          : 'border-brand-light-gray hover:border-brand-red/50'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-semibold text-brand-dark-text">{location.name}</div>
                        <div className="text-sm text-gray-600">6050 Main St W</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4">Select Service</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full p-4 rounded-lg border transition-all flex justify-between items-center ${
                        selectedService === service.id
                          ? 'border-brand-red bg-brand-red/10'
                          : 'border-brand-light-gray hover:border-brand-red/50'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-semibold text-brand-dark-text">{service.name}</div>
                        <div className="text-sm text-gray-600">{service.duration} minutes</div>
                      </div>
                      <div className="text-xl font-bold text-brand-gold">${service.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!selectedLocation || !selectedService}
                className="w-full bg-brand-red text-brand-white py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-all"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Barber & Date */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4 flex items-center gap-2">
                  <User size={20} className="text-brand-red" />
                  Select Barber (Optional)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {barbers.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedBarber === barber.id
                          ? 'border-brand-red bg-brand-red/10'
                          : 'border-brand-light-gray hover:border-brand-red/50'
                      }`}
                    >
                      <div className="font-semibold text-brand-dark-text">{barber.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4 flex items-center gap-2">
                  <Calendar size={20} className="text-brand-red" />
                  Select Date
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {[...Array(14)].map((_, i) => {
                    const date = addDays(new Date(), i)
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-lg border transition-all text-center ${
                          selectedDate?.toDateString() === date.toDateString()
                            ? 'border-brand-red bg-brand-red/10'
                            : 'border-brand-light-gray hover:border-brand-red/50'
                        }`}
                      >
                        <div className="text-sm text-gray-600">{format(date, 'EEE')}</div>
                        <div className="font-semibold text-brand-dark-text">{format(date, 'd')}</div>
                        <div className="text-xs text-gray-600">{format(date, 'MMM')}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-brand-light-gray text-brand-dark-text py-3 rounded-full font-semibold hover:bg-brand-off-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate}
                  className="flex-1 bg-brand-red text-brand-white py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Time */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-brand-red" />
                  Select Time
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {generateTimeSlots().map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border transition-all ${
                        selectedTime === time
                          ? 'border-brand-red bg-brand-red/10'
                          : 'border-brand-light-gray hover:border-brand-red/50'
                      }`}
                    >
                      <div className="font-semibold text-brand-dark-text">{time}</div>
                    </button>
                  ))}
                </div>
                {generateTimeSlots().length === 0 && (
                  <p className="text-gray-600 text-center py-8">
                    No available slots for this date. Please select another date.
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-brand-light-gray text-brand-dark-text py-3 rounded-full font-semibold hover:bg-brand-off-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={!selectedTime}
                  className="flex-1 bg-brand-red text-brand-white py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-blue mb-4">Your Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Name</label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full bg-brand-white border border-brand-light-gray rounded-lg px-4 py-3 text-brand-dark-text focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Email</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full bg-brand-white border border-brand-light-gray rounded-lg px-4 py-3 text-brand-dark-text focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full bg-brand-white border border-brand-light-gray rounded-lg px-4 py-3 text-brand-dark-text focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="(416) 123-4567"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-brand-off-white rounded-lg p-4 space-y-2 border border-brand-light-gray">
                <h4 className="font-semibold text-brand-blue mb-3">Booking Summary</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-brand-dark-text">{locations.find(l => l.id === selectedLocation)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service:</span>
                  <span className="text-brand-dark-text">{services.find(s => s.id === selectedService)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Barber:</span>
                  <span className="text-brand-dark-text">{barbers.find(b => b.id === selectedBarber)?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-brand-dark-text">{selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Time:</span>
                  <span className="text-brand-dark-text">{selectedTime}</span>
                </div>
                <div className="border-t border-brand-light-gray pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-brand-dark-text">Total:</span>
                    <span className="font-semibold text-brand-gold">
                      ${services.find(s => s.id === selectedService)?.price || 0}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 border border-brand-light-gray text-brand-dark-text py-3 rounded-full font-semibold hover:bg-brand-off-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone || isSubmitting}
                  className="flex-1 bg-brand-red text-brand-white py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    {toast && (
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(null)}
      />
    )}
    </>
  )
}