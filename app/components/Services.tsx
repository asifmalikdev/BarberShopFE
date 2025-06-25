'use client'

import { Scissors, User, Sparkles, ShieldCheck, SprayCan, Smile, Sun, Star } from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		icon: <Scissors className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "Modern Haircuts",
		desc: "Trendy, classic, and custom cuts for all ages and styles.",
	},
	{
		icon: <User className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "Beard Grooming",
		desc: "Precision beard trims, shaping, and hot towel shaves.",
	},
	{
		icon: <Sparkles className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "Styling & Finish",
		desc: "Expert styling, blow-dry, and premium product finish.",
	},
	{
		icon: <ShieldCheck className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "Kids & Seniors",
		desc: "Gentle, stylish cuts for kids and seniors in a friendly setting.",
	},
	{
		icon: <SprayCan className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "Color & Highlights",
		desc: "Professional color, highlights, and grey blending for a fresh look.",
	},
	{
		icon: <Smile className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "Facial Waxing",
		desc: "Eyebrow, ear, and facial waxing for a clean, sharp appearance.",
	},
	{
		icon: <Sun className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "Hot Towel Service",
		desc: "Relaxing hot towel treatments with every shave or beard trim.",
	},
	{
		icon: <Star className="w-10 h-10 text-lux-primary drop-shadow-glow" />,
		title: "VIP Experience",
		desc: "Book our VIP chair for the ultimate luxury grooming session.",
	},
]

export default function Services() {
	return (
		<section className="relative py-20 bg-lux-bg" id="services">
			<div className="container mx-auto px-4">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-2 tracking-wide drop-shadow-lg animate-fade-in">
						Our Services
					</h2>
					<div className="mx-auto w-24 h-1 bg-gradient-to-r from-lux-accent via-lux-primary to-lux-accent rounded-full mb-4 animate-slide-up" />
					<p className="text-lg text-lux-text/80 max-w-xl mx-auto animate-fade-in animation-delay-200">
						Experience the best in modern barbering with our full range of grooming services.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="group bg-gradient-to-br from-lux-secondary via-lux-bg to-black rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center border border-lux-primary/20 hover:border-lux-primary hover:shadow-3xl transition-all duration-300 animate-fade-in"
							style={{
								animationDelay: `${100 + idx * 80}ms`,
								animationFillMode: 'both',
							}}
						>
							<div className="mb-6 flex items-center justify-center">
								{service.icon}
							</div>
							<h3 className="text-2xl font-bold text-lux-primary mb-2 group-hover:text-lux-accent transition-colors drop-shadow-glow">
								{service.title}
							</h3>
							<p className="text-lux-text/80">{service.desc}</p>
						</div>
					))}
				</div>
			</div>
			{/* Decorative gold gradient circle */}
			<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-lux-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -top-24 -left-24 w-72 h-72 bg-lux-accent opacity-10 rounded-full blur-3xl pointer-events-none" />
		</section>
	)
}

/* Add this to your globals.css for a glowing icon effect: */
