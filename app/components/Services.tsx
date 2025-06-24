'use client'

import { Scissors, User, Sparkles, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		icon: <Scissors className="w-10 h-10 text-lux-primary" />,
		title: "Modern Haircuts",
		desc: "Trendy, classic, and custom cuts for all ages and styles.",
	},
	{
		icon: <User className="w-10 h-10 text-lux-primary" />,
		title: "Beard Grooming",
		desc: "Precision beard trims, shaping, and hot towel shaves.",
	},
	{
		icon: <Sparkles className="w-10 h-10 text-lux-primary" />,
		title: "Styling & Finish",
		desc: "Expert styling, blow-dry, and premium product finish.",
	},
	{
		icon: <ShieldCheck className="w-10 h-10 text-lux-primary" />,
		title: "Kids & Seniors",
		desc: "Gentle, stylish cuts for kids and seniors in a friendly setting.",
	},
]

export default function Services() {
	return (
		<section className="relative py-20 bg-lux-bg" id="services">
			<div className="container mx-auto px-4">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-2 tracking-wide drop-shadow-lg">
						Our Services
					</h2>
					<div className="mx-auto w-24 h-1 bg-lux-primary rounded-full mb-4" />
					<p className="text-lg text-lux-text/80 max-w-xl mx-auto">
						Experience the best in modern barbering with our full range of grooming services.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="group bg-lux-secondary rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-lux-primary/20 hover:border-lux-primary hover:shadow-2xl transition-all duration-300"
						>
							<div className="mb-6">{service.icon}</div>
							<h3 className="text-2xl font-bold text-lux-primary mb-2 group-hover:text-lux-accent transition-colors">
								{service.title}
							</h3>
							<p className="text-lux-text/80">{service.desc}</p>
						</div>
					))}
				</div>
			</div>
			{/* Decorative gold gradient circle */}
			<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-lux-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
		</section>
	)
}