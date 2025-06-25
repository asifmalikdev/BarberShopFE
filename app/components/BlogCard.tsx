'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ blog }: { blog: { slug: string, title: string, summary: string, image: string } }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <div className="bg-gradient-to-br from-lux-secondary via-lux-bg to-black rounded-3xl shadow-2xl border border-lux-primary/20 hover:border-lux-primary hover:shadow-3xl transition-all duration-300 overflow-hidden animate-pop-in">
        <div className="relative w-full h-56 md:h-64 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-lux-primary mb-2 group-hover:text-lux-accent transition-colors drop-shadow-glow">
            {blog.title}
          </h3>
          <p className="text-lux-text/80 text-base">{blog.summary}</p>
        </div>
      </div>
    </Link>
  )
}