'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModal'

const locations = [
	{
		id: 'location1',
		name: 'Milton - Main Street',
		address: '6050 Main St W Unit 1',
		city: 'Milton, ON L9T 2M3',
		phone: '(416) 123-4567',
		hours: '10:00 AM - 7:00 PM',
		mapEmbed:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.512345!2d-79.878!3d43.512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDPCsDMwJzQzLjIiTiA3OcKwNTInNDIuOCJX!5e0!3m2!1sen!2sca!4v1680000000000',
	},
	{
		id: 'location2',
		name: 'Milton - Location 2',
		address: '1234 Second St',
		city: 'Milton, ON L9T 2M3',
		phone: '(416) 765-4321',
		hours: '10:00 AM - 7:00 PM',
		mapEmbed:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.512345!2d-79.888!3d43.522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDPCsDMxJzEwLjAiTiA3OcKwNTMnMTIuMCJX!5e0!3m2!1sen!2sca!4v1680000000001',
	},
]

export default function Locations() {
	const [isBookingOpen, setIsBookingOpen] = useState(false)
	const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

	const handleBookLocation = (locationId: string) => {
		setSelectedLocation(locationId)
		setIsBookingOpen(true)
	}

	return (
		<>
			<section className="relative py-20 bg-lux-bg" id="locations">
				<div className="container mx-auto px-4">
					<div className="text-center mb-14">
						<h2 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-2 tracking-wide drop-shadow-lg animate-fade-in">
							Our Locations
						</h2>
						<div className="mx-auto w-24 h-1 bg-gradient-to-r from-lux-accent via-lux-primary to-lux-accent rounded-full mb-4 animate-slide-up" />
						<p className="text-lg text-lux-text/80 max-w-xl mx-auto animate-fade-in animation-delay-200">
							Visit us at any of our premium locations in Milton.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-12">
						{locations.map((location, idx) => (
							<div
								key={location.id}
								className="group bg-gradient-to-br from-lux-secondary via-lux-bg to-black rounded-3xl shadow-2xl p-8 border border-lux-primary/20 hover:border-lux-primary hover:shadow-3xl transition-all duration-300 animate-fade-in flex flex-col gap-6"
								style={{
									animationDelay: `${100 + idx * 120}ms`,
									animationFillMode: 'both',
								}}
							>
								{/* 3D Floating Location Image */}
								<div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-lux-primary/30 mb-4 animate-hero-float">
									<Image
										src="/images/exterior-logo.png"
										alt={location.name}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-black/70" />
									<div className="absolute top-4 right-4 bg-lux-accent/90 backdrop-blur-sm px-3 py-1 rounded-full shadow">
										<span className="text-sm text-lux-text font-bold">
											{location.name}
										</span>
									</div>
								</div>
								{/* Location Details */}
								<div>
									<div className="flex items-center gap-3 text-lux-text font-medium mb-2">
										<MapPin className="w-6 h-6 text-lux-primary" />
										<span>
											{location.address}, {location.city}
										</span>
									</div>
									<div className="flex items-center gap-3 text-lux-text font-medium mb-2">
										<Phone className="w-6 h-6 text-lux-accent" />
										<a
											href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
											className="hover:text-lux-primary transition-colors"
										>
											{location.phone}
										</a>
									</div>
									<div className="flex items-center gap-3 text-lux-text font-medium mb-4">
										<Clock className="w-6 h-6 text-lux-primary" />
										<span>Daily: {location.hours}</span>
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
											onClick={() => handleBookLocation(location.id)}
											className="flex-1 bg-gradient-to-r from-lux-accent to-lux-primary text-lux-text px-4 py-3 rounded-full font-semibold shadow-lg hover:from-lux-primary hover:to-lux-accent hover:scale-105 transition-all"
										>
											Book Here
										</button>
										<a
											href={location.mapEmbed.replace('embed?', 'maps?')}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 border-2 border-lux-primary text-lux-primary px-4 py-3 rounded-full font-semibold hover:bg-lux-primary/10 hover:border-lux-accent transition-all text-center shadow"
										>
											Get Directions
										</a>
									</div>
								</div>
							</div>
						))}
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