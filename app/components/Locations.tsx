'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

const location = {
    id: 'location1',
    name: 'New Style Barber Shop',
    address: '6050 Main St W Unit 1',
    city: 'Milton, ON',
    phone: '+1 365-877-6644',
    hours: 'Mon-Sat: 10am - 7pm',
    mapEmbed: 'https://www.google.com/maps?q=6050+Main+St+W+Unit+1,+Milton,+ON&output=embed',
}

export default function Locations() {
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

    const handleBookLocation = () => {
        setSelectedLocation(location.id)
        setIsBookingOpen(true)
    }

    return (
        <>
            <section className="relative py-20 bg-lux-bg" id="locations">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-2 tracking-wide drop-shadow-lg animate-fade-in">
                            Our Location
                        </h2>
                        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-lux-accent via-lux-primary to-lux-accent rounded-full mb-4 animate-slide-up" />
                        <p className="text-lg text-lux-text/80 max-w-xl mx-auto animate-fade-in animation-delay-200">
                            Visit us at our premium location in Milton.
                        </p>
                    </div>
                    <div className="max-w-xl mx-auto">
                        <div
                            className="group bg-gradient-to-br from-lux-secondary via-lux-bg to-black rounded-3xl shadow-2xl p-8 border border-lux-primary/20 hover:border-lux-primary hover:shadow-3xl transition-all duration-300 animate-fade-in flex flex-col gap-6"
                            style={{
                                animationDelay: `120ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            {/* 3D Floating Location Image */}
                            <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-lux-primary/30 mb-4 animate-hero-float flex items-center justify-center bg-white">
                                <Image
                                    src="/images/logo.jpeg"
                                    alt={location.name}
                                    width={120}
                                    height={120}
                                    className="object-cover rounded-full shadow-lg"
                                />
                            </div>
                            {/* Location Details */}
                            <div>
                                <div className="flex items-center gap-3 text-lux-text font-medium mb-2 justify-center">
                                    <MapPin className="w-6 h-6 text-lux-primary" />
                                    <span>
                                        {location.address}, {location.city}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-lux-text font-medium mb-2 justify-center">
                                    <Phone className="w-6 h-6 text-lux-accent" />
                                    <a
                                        href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}
                                        className="hover:text-lux-primary transition-colors"
                                    >
                                        {location.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-lux-text font-medium mb-4 justify-center">
                                    <Clock className="w-6 h-6 text-lux-primary" />
                                    <span>{location.hours}</span>
                                </div>
                                <div className="relative rounded-xl overflow-hidden border-2 border-lux-primary/20 shadow-lg mt-2 animate-pop-in">
                                	<iframe
                                        src={location.mapEmbed}
                                        title={location.name}
                                        width="100%"
                                        height="180"
                                        className="w-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                    />
                                    <div className="absolute inset-0 bg-black/60 pointer-events-none" />
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <button
                                        onClick={handleBookLocation}
                                        className="flex-1 bg-gradient-to-r from-lux-accent to-lux-primary text-lux-text px-4 py-3 rounded-full font-semibold shadow-lg hover:from-lux-primary hover:to-lux-accent hover:scale-105 transition-all"
                                    >
                                        Book Here
                                    </button>
                                    <a
                                        href="https://www.google.com/maps/place/6050+Main+St+W+Unit+1,+Milton,+ON"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 border-2 border-lux-primary text-lux-primary px-4 py-3 rounded-full font-semibold hover:bg-lux-primary/10 hover:border-lux-accent transition-all text-center shadow"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative gradient circles for 3D effect */}
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-lux-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-lux-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
            </section>
            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => {
                    setIsBookingOpen(false)
                    setSelectedLocation(null)
                }}
                preselectedLocation={selectedLocation}
            />
        </>
    )
}