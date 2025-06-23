'use client'

import { Scissors, User, Users, Clock, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		name: "Men's Haircut",
		price: "$35",
		duration: "20 min",
		description: "Precision cut tailored to your style by expert barbers. Includes wash, style, and finishing touches.",
		icon: Scissors,
		featured: true,
	},
	{
		name: "Beard Trim",
		price: "$20",
		duration: "20 min",
		description: "Shape and style your beard to perfection with premium products.",
		icon: User,
	},
	{
		name: "Haircut + Beard",
		price: "$50",
		duration: "40 min",
		description: "Complete grooming package for a sharp, fresh look.",
		icon: Users,
	},
	{
		name: "Kids Haircut",
		price: "$25",
		duration: "20 min",
		description: "Patient and friendly service for young ones in a fun environment.",
		icon: User,
	},
	{
		name: "Senior Haircut",
		price: "$30",
		duration: "20 min",
		description: "Classic cuts with care and precision for seniors.",
		icon: Clock,
	},
]

export default function Services() {
	return (
		<section id="services" className="relative py-24 bg-gradient-to-br from-brand-blue/5 via-brand-gold/5 to-brand-red/10 overflow-hidden">
			{/* Banner/Hero */}
			<div className="relative z-10 mb-16 text-center">
				<h2 className="text-5xl md:text-6xl font-extrabold text-brand-blue drop-shadow-lg flex items-center justify-center gap-2">
					<Sparkles className="w-10 h-10 text-brand-gold animate-bounce" />
					Premium Services
				</h2>
				<p className="mt-4 text-xl md:text-2xl text-brand-dark-text max-w-2xl mx-auto">
					Experience the best in modern grooming. Our expert barbers deliver style, comfort, and confidence.
				</p>
			</div>

			{/* Services Grid */}
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
					{services.map((service, index) => {
						const Icon = service.icon
						return (
							<div
								key={index}
								className={`relative bg-white border-2 rounded-3xl p-10 shadow-xl transition-all duration-300 group hover:scale-105 hover:border-brand-gold/60 ${service.featured ? 'border-brand-gold/80 shadow-brand-gold/30 scale-105' : 'border-brand-light-gray/40'}`}
							>
								{service.featured && (
									<div className="absolute -top-4 -right-4 bg-brand-gold text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md animate-pulse">
										<Star className="w-4 h-4" /> Featured
									</div>
								)}
								<div className="flex items-center justify-center mb-6">
									<Icon className="w-12 h-12 text-brand-blue group-hover:text-brand-red transition-colors duration-300" />
								</div>
								<h3 className="text-2xl font-bold text-brand-blue mb-2 text-center">
									{service.name}
								</h3>
								<div className="flex justify-center gap-4 mb-2">
									<span className="text-lg font-semibold text-brand-red">{service.price}</span>
									<span className="text-sm text-brand-light-gray">{service.duration}</span>
								</div>
								<p className="text-brand-dark-text text-center mb-4 min-h-[56px]">
									{service.description}
								</p>
								<div className="flex justify-center">
									<Link href="/" className="inline-block px-6 py-2 rounded-full bg-brand-blue text-white font-semibold shadow hover:bg-brand-red transition-colors duration-300">
										Book Now
									</Link>
								</div>
							</div>
						)
					})}
				</div>

				{/* CTA Section */}
				<div className="mt-20 text-center">
					<h4 className="text-2xl font-bold text-brand-blue mb-2">Not sure what to book?</h4>
					<p className="text-brand-dark-text mb-6 text-lg max-w-xl mx-auto">
						Walk in for a free consultation or contact us for personalized recommendations. We’re here to help you look your best!
					</p>
					<Link href="/" className="inline-block px-8 py-3 rounded-full bg-brand-gold text-white font-bold shadow-lg hover:bg-brand-blue hover:text-brand-gold transition-colors duration-300">
						Contact Us
					</Link>
				</div>
			</div>

			{/* Decorative background stripes */}
			<div className="absolute inset-0 pointer-events-none opacity-10 z-0">
				<div className="absolute inset-0 barber-stripes-subtle" />
			</div>
		</section>
	)
}