'use client'

import { Scissors, User, Users, Clock } from 'lucide-react'

const services = [
	{
		name: "Men's Haircut",
		price: "$35",
		duration: "20 min",
		description: "Precision cut tailored to your style",
		icon: Scissors,
	},
	{
		name: "Beard Trim",
		price: "$20",
		duration: "20 min",
		description: "Shape and style your beard to perfection",
		icon: User,
	},
	{
		name: "Haircut + Beard",
		price: "$50",
		duration: "40 min",
		description: "Complete grooming package",
		icon: Users,
	},
	{
		name: "Kids Haircut",
		price: "$25",
		duration: "20 min",
		description: "Patient and friendly service for young ones",
		icon: User,
	},
	{
		name: "Senior Haircut",
		price: "$30",
		duration: "20 min",
		description: "Classic cuts with care and precision",
		icon: Clock,
	},
]

export default function Services() {
	return (
		<section id="services" className="py-20 bg-brand-off-white relative overflow-hidden">
			{/* Vibrant barber stripes background */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 barber-stripes-subtle" />
			</div>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">
						Our Services
					</h2>
					<div className="w-20 h-1 bg-brand-red mx-auto mb-4 rounded"></div>
					<p className="text-xl text-brand-dark-text max-w-2xl mx-auto">
						Professional grooming services delivered with precision and style
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{services.map((service, index) => {
						const Icon = service.icon
						return (
							<div
								key={index}
								className="relative bg-brand-white border border-brand-light-gray rounded-2xl p-8 hover:border-brand-red transition-all duration-300 group shadow-lg hover:shadow-brand-gold/30"
							>
								{/* Hover effect - gold shimmer */}
								<div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
								<div className="flex items-start justify-between mb-4 relative z-10">
									<Icon className="w-8 h-8 text-brand-blue group-hover:text-brand-red transition-colors duration-300" />
									<div className="text-right">
										<div className="text-2xl font-bold text-brand-red">{service.price}</div>
										<div className="text-sm text-brand-light-gray">{service.duration}</div>
									</div>
								</div>

								<h3 className="text-xl font-semibold text-brand-blue mb-2 relative z-10">
									{service.name}
								</h3>
								<p className="text-brand-dark-text relative z-10">
									{service.description}
								</p>
							</div>
						)
					})}
				</div>

				<div className="mt-16 text-center">
					<p className="text-brand-dark-text mb-6 text-lg">
						All services include a complimentary consultation and styling advice.
					</p>
					<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
						{['Walk-ins Welcome','Online Booking Available','Professional Products Used'].map((item, i) => (
							<div key={i} className="flex items-center gap-2 text-brand-dark-text">
								<div className="w-2.5 h-2.5 bg-brand-red rounded-full animate-pulse" />
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}