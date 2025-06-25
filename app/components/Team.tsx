'use client'

import Image from 'next/image'

const team = [
	{
		name: 'Alex Carter',
		role: 'Master Barber',
		img: '/images/team1.jpg',
		desc: 'Specialist in modern fades and classic cuts. 10+ years of experience.',
	},
	{
		name: 'Maria Lopez',
		role: 'Senior Stylist',
		img: '/images/team2.jpg',
		desc: 'Expert in beard sculpting and luxury shaves. Friendly and creative.',
	},
	{
		name: 'Samir Patel',
		role: 'Color Specialist',
		img: '/images/team3.jpg',
		desc: 'Known for flawless highlights and color blending. Always on trend.',
	},
	{
		name: 'Jenna Kim',
		role: 'Junior Barber',
		img: '/images/team4.jpg',
		desc: 'Great with kids and seniors. Gentle, patient, and detail-oriented.',
	},
]

export default function Team() {
	return (
		<section className="relative py-20 bg-lux-bg" id="team">
			<div className="container mx-auto px-4">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-2 tracking-wide drop-shadow-lg animate-fade-in">
						Meet Our Team
					</h2>
					<div className="mx-auto w-24 h-1 bg-gradient-to-r from-lux-accent via-lux-primary to-lux-accent rounded-full mb-4 animate-slide-up" />
					<p className="text-lg text-lux-text/80 max-w-xl mx-auto animate-fade-in animation-delay-200">
						Our talented barbers and stylists are dedicated to giving you the best
						experience.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					{team.map((member, idx) => (
						<div
							key={member.name}
							className="group bg-gradient-to-br from-lux-secondary via-lux-bg to-black rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border border-lux-primary/20 hover:border-lux-primary hover:shadow-3xl transition-all duration-300 animate-fade-in"
							style={{
								animationDelay: `${100 + idx * 120}ms`,
								animationFillMode: 'both',
							}}
						>
							<div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-lux-primary/40 group-hover:scale-105 transition-transform duration-300 animate-hero-float">
								<Image
									src={member.img}
									alt={member.name}
									fill
									className="object-cover"
									sizes="112px"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
							</div>
							<h3 className="text-xl font-bold text-lux-primary mb-1 group-hover:text-lux-accent transition-colors drop-shadow-glow">
								{member.name}
							</h3>
							<div className="text-lux-accent font-semibold mb-2">
								{member.role}
							</div>
							<p className="text-lux-text/80 text-sm">{member.desc}</p>
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
