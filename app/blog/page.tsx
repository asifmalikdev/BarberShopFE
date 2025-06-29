'use client'

import Header from '../components/Header'
import Image from 'next/image'
import Link from 'next/link'

const blogs = [
	{
		slug: 'perfect-fade-tips',
		title: 'The Secret to a Perfect Fade: Pro Barber Tips',
		summary:
			'Unlock the secrets to flawless fades with expert advice from our master barbers. Learn about the tools, techniques, and attention to detail that make every fade sharp and seamless. Whether you want a low, mid, or high fade, these pro tips will keep your style looking fresh and modern.',
		image: '/images/blog1.jpg',
	},
	{
		slug: 'beard-grooming-101',
		title: 'Beard Grooming 101: Shape, Trim & Care',
		summary:
			'Everything you need to know to keep your beard sharp, healthy, and stylish. Discover the best trimming routines, shaping secrets, and essential products for every beard type. Our barbers share their favorite grooming hacks for a beard that turns heads.',
		image: '/images/blog2.jpg',
	},
	{
		slug: 'right-haircut-face-shape',
		title: 'How to Choose the Right Haircut for Your Face Shape',
		summary:
			'Find the perfect cut that complements your unique features and style. We break down the best haircuts for round, oval, square, and heart-shaped faces, so you always leave the shop looking your best.',
		image: '/images/blog3.jpg',
	},
	{
		slug: 'skin-care-for-men',
		title: 'Essential Skin Care for Men: Look Sharp, Feel Fresh',
		summary:
			'Simple routines and products to keep your skin healthy and vibrant. From daily cleansing to moisturizing and sun protection, our guide helps you achieve a clear, confident complexion with minimal effort.',
		image: '/images/blog4.jpg',
	},
	{
		slug: 'hot-towel-shaves',
		title: 'Hot Towel Shaves: Why Every Man Should Try One',
		summary:
			'Experience the luxury and benefits of a classic hot towel shave. Learn why this timeless barber ritual is more than just a shave—it’s relaxation, skin care, and a confidence boost all in one.',
		image: '/images/blog5.jpg',
	},
	{
		slug: 'kids-haircuts',
		title: 'Kids’ Haircuts: Making the First Cut Fun & Stylish',
		summary:
			'Tips for a stress-free and stylish first haircut for your child. Discover how our barbers create a welcoming environment, offer trendy styles, and make every visit a positive experience for kids and parents alike.',
		image: '/images/blog6.jpg',
	},
	{
		slug: 'top-hair-products',
		title: 'Top 5 Hair Products Every Man Should Own',
		summary:
			'Our barbers’ favorite products for every hair type and style. From pomades to clays and sprays, find out which essentials will keep your hair looking its best—no matter your routine.',
		image: '/images/blog7.jpg',
	},
]

export default function BlogPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-lux-bg py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-12 text-center drop-shadow-glow">
						Our Blog
					</h1>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
						{blogs.map(blog => (
							<div
								key={blog.slug}
								className="group block cursor-not-allowed opacity-70"
								tabIndex={-1}
								aria-disabled="true"
							>
								<div className="bg-gradient-to-br from-lux-secondary via-lux-bg to-black rounded-3xl shadow-2xl border border-lux-primary/20 transition-all duration-300 overflow-hidden animate-pop-in">
									<div className="relative w-full h-56 md:h-64 overflow-hidden">
										<Image
											src={blog.image}
											alt={blog.title}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
									</div>
									<div className="p-6">
										<h3 className="text-2xl font-bold text-lux-primary mb-2 drop-shadow-glow">
											{blog.title}
										</h3>
										<p className="text-lux-text/80 text-base">{blog.summary}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	)
}