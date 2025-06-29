import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Locations from './components/Locations'
import Footer from './components/Footer'
import InstagramFeed from './components/InstagramFeed'
import BlogCard from './components/BlogCard'
import Link from 'next/link'
import Image from 'next/image'

const featuredBlogs = [
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
]

export default function Home() {
	return (
		<main className="min-h-screen bg-brand-white">
			<Header />
			<section id="home">
				<Hero />
			</section>
			<section>
				<InstagramFeed />
			</section>
			<Services />
			<section id="team">
				<Team />
			</section>
			{/* Featured Blogs Section */}
			<section className="py-16 bg-gradient-to-b from-black via-lux-bg to-lux-secondary flex flex-col items-center">
				<h2 className="text-3xl md:text-4xl font-extrabold text-lux-primary mb-8 drop-shadow-glow">
					From Our Blog
				</h2>
				<div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
					{featuredBlogs.map(blog => (
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
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								</div>
								<div className="p-6">
									<h3 className="text-2xl font-bold text-lux-primary mb-2 drop-shadow-glow">
										{blog.title}
									</h3>
									<p className="text-lux-text/80 text-base">
										{blog.summary}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<Link
					href="/blog"
					className="mt-8 text-lux-accent font-semibold hover:text-lux-primary transition-colors underline text-lg"
				>
					See all blog posts &rarr;
				</Link>
			</section>
			<Locations />
			<Footer />
		</main>
	)
}