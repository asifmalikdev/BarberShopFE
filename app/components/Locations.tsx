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
		phone: '(365) 877-6644',
		hours: '10:00 AM - 7:00 PM',
		mapUrl: 'https://maps.google.com/?q=6050+Main+St+W+Unit+1+Milton+ON+L9T+2M3',
	},
	{
		id: 'location2',
		name: 'Milton - Location 2',
		address: '6050 Main St W Unit 1',
		city: 'Milton, ON L9T 2M3',
		phone: '(365) 877-6644',
		hours: '10:00 AM - 7:00 PM',
		mapUrl: 'https://maps.google.com/?q=6050+Main+St+W+Unit+1+Milton+ON+L9T+2M3',
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
			<section id="locations" className="py-20 bg-brand-blue relative">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-4">
							Our Locations
						</h2>
						<p className="text-xl text-brand-light-gray max-w-2xl mx-auto">
							Two convenient locations to serve you better
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{locations.map((location, index) => (
							<div
								key={location.id}
								className="bg-brand-white border border-brand-light-gray rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 group"
							>
								{/* Location Image */}
								<div className="h-48 relative overflow-hidden">
									<Image
										src="/images/exterior-logo.png"
										alt={location.name}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
									<div className="absolute top-4 right-4 bg-brand-red/90 backdrop-blur-sm px-3 py-1 rounded-full">
										<span className="text-sm text-brand-white">
											Location {index + 1}
										</span>
									</div>
								</div>

								{/* Location Details */}
								<div className="p-8">
									<h3 className="text-2xl font-bold text-brand-blue mb-4">
										{location.name}
									</h3>

									<div className="space-y-3 mb-6">
										<div className="flex items-start gap-3 text-brand-dark-text">
											<MapPin className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
											<div>
												<div>{location.address}</div>
												<div>{location.city}</div>
											</div>
										</div>

										<div className="flex items-center gap-3 text-brand-dark-text">
											<Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
											<a
												href={`tel:${location.phone}`}
												className="hover:text-brand-red transition-colors"
											>
												{location.phone}
											</a>
										</div>

										<div className="flex items-center gap-3 text-brand-dark-text">
											<Clock className="w-5 h-5 text-brand-red flex-shrink-0" />
											<span>Daily: {location.hours}</span>
										</div>
									</div>

									<div className="flex gap-3">
										<button
											onClick={() => handleBookLocation(location.id)}
											className="flex-1 bg-brand-red text-brand-white px-4 py-3 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
										>
											Book Here
										</button>
										<a
											href={location.mapUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 border-2 border-brand-gold/50 text-brand-gold px-4 py-3 rounded-full font-semibold hover:bg-brand-gold/10 hover:border-brand-gold transition-all text-center"
										>
											Get Directions
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
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