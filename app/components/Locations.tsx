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
			<section
				id="locations"
				className="relative min-h-screen py-20 bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-100 overflow-hidden"
			>
				<div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl -z-10" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl -z-10" />
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 mb-4 drop-shadow-2xl">
							Our Locations
						</h2>
						<p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
							Two convenient locations to serve you better
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">
						{locations.map((location, index) => (
							<div
								key={location.id}
								className="relative bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-gray-200 hover:scale-[1.03] hover:shadow-3xl transition-transform duration-300"
								style={{
									boxShadow:
										'0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 6px 0 rgba(255, 193, 7, 0.10)',
								}}
							>
								<div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
								{/* Location Image */}
								<div className="h-48 relative overflow-hidden rounded-2xl shadow-lg">
									<Image
										src="/images/exterior-logo.png"
										alt={location.name}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
									<div className="absolute top-4 right-4 bg-brand-red/90 backdrop-blur-sm px-3 py-1 rounded-full shadow">
										<span className="text-sm text-brand-white font-bold">
											Location {index + 1}
										</span>
									</div>
								</div>

								{/* Location Details */}
								<div>
									<h3 className="text-2xl font-bold text-blue-700 mb-4 drop-shadow">
										{location.name}
									</h3>

									<div className="space-y-3 mb-6">
										<div className="flex items-start gap-3 text-gray-700 font-medium">
											<MapPin className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
											<div>
												<div>{location.address}</div>
												<div>{location.city}</div>
											</div>
										</div>

										<div className="flex items-center gap-3 text-gray-700 font-medium">
											<Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
											<a
												href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
												className="hover:text-brand-red transition-colors"
											>
												{location.phone}
											</a>
										</div>

										<div className="flex items-center gap-3 text-gray-700 font-medium">
											<Clock className="w-6 h-6 text-yellow-500 flex-shrink-0" />
											<span>Daily: {location.hours}</span>
										</div>
									</div>

									<div className="rounded-xl overflow-hidden border-2 border-blue-200 shadow-lg mt-4">
										<iframe
											src={location.mapEmbed}
											title={location.name}
											width="100%"
											height="220"
											className="w-full"
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"
											style={{ border: 0 }}
											allowFullScreen
										/>
									</div>

									<div className="flex gap-3 mt-6">
										<button
											onClick={() => handleBookLocation(location.id)}
											className="flex-1 bg-gradient-to-r from-blue-600 to-yellow-400 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:from-yellow-400 hover:to-blue-600 hover:scale-105 transition-all"
										>
											Book Here
										</button>
										<a
											href={location.mapEmbed.replace('embed?', 'maps?')}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 border-2 border-yellow-400 text-yellow-700 px-4 py-3 rounded-full font-semibold hover:bg-yellow-50 hover:border-yellow-500 transition-all text-center shadow"
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