'use client'

import { useEffect } from 'react'

export default function InstagramFeed() {
  useEffect(() => {
    // Dynamically load the LightWidget script only on the client
    const script = document.createElement('script')
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-b from-lux-bg via-lux-secondary to-black flex flex-col items-center overflow-hidden">
      {/* Decorative blurred gold and accent circles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-lux-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lux-accent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-lux-primary mb-10 drop-shadow-glow z-10">
        Follow Us On Instagram
      </h2>
      <div className="relative w-full max-w-5xl flex justify-center z-10">
        <div className="rounded-[2.5rem] border-4 border-lux-primary/30 bg-lux-bg/80 shadow-2xl p-4 md:p-8 flex-1 transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(251,191,36,0.15)]">
          <iframe
            src="//lightwidget.com/widgets/a304453e49475bab8da48ba891770fdf.html"
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget w-full rounded-3xl"
            style={{
              border: 0,
              overflow: 'hidden',
              height: 600,
              background: 'transparent',
            }}
          ></iframe>
        </div>
      </div>
      <p className="mt-8 text-lux-text/70 text-lg z-10">
        <a
          href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lux-accent font-semibold hover:text-lux-primary transition-colors underline"
        >
          @your_instagram_username
        </a>
      </p>
    </section>
  )
}