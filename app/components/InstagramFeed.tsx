'use client'

export default function InstagramFeed() {
  const media = [
    '/images/insta-page-left-image.jpg',
    '/images/insta video.mp4',
    '/images/insta-page-right-image.jpg',
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-lux-bg via-lux-secondary to-black flex flex-col items-center overflow-hidden">
      {/* Decorative blurred gold and accent circles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-lux-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lux-accent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-12 drop-shadow-glow z-10">
        Follow Us On Instagram
      </h2>
      <div className="relative w-full max-w-5xl flex justify-center z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full">
          {media.map((src, idx) => (
            <div
              key={idx}
              className="rounded-[2.5rem] overflow-hidden border-4 border-lux-primary/40 bg-lux-bg/90 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_48px_0_rgba(251,191,36,0.18)]"
              style={{ minHeight: 440 }} // Increased from 340 to 440
            >
              {src.endsWith('.mp4') ? (
                <video
                  src={src}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-[440px] object-cover" // Increased from h-[340px] to h-[440px]
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt={`Instagram trial ${idx + 1}`}
                  className="w-full h-[440px] object-cover" // Increased from h-[340px] to h-[440px]
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-12 text-lux-text/70 text-lg z-10 flex items-center gap-2">
        <a
          href="https://www.instagram.com/newstylebarbershop50"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lux-accent font-semibold hover:text-lux-primary transition-colors"
        >
          {/* Instagram SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
          @newstylebarbershop50
        </a>
      </p>
    </section>
  )
}