'use client'

import { useState, useEffect } from 'react'
import { Instagram, ExternalLink } from 'lucide-react'

export default function InstagramFeed() {
  const [embedLoaded, setEmbedLoaded] = useState(false)

  useEffect(() => {
    // Load Instagram embed script
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.instagram.com/embed.js'
      script.onload = () => {
        setEmbedLoaded(true)
        // Process Instagram embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }
      document.head.appendChild(script)
    } else {
      setEmbedLoaded(true)
      // Process Instagram embeds if script already loaded
      setTimeout(() => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }, 100)
    }
  }, [])

  return (
    <section className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-brand-red"></div>
            <Instagram className="text-brand-red" size={24} />
            <div className="w-12 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Follow Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Stay updated with our latest cuts, styles, and transformations. Check out our real Instagram feed!
          </p>
          <a
            href="https://www.instagram.com/newstylebarbershop50/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <Instagram size={20} />
            Follow @newstylebarbershop50
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Instagram Feed Section */}
        <div className="mb-12">
          <div className="bg-brand-off-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">
                Latest Instagram Posts
              </h3>
              <p className="text-gray-600">
                See our recent work and customer transformations
              </p>
            </div>

            {/* Real Instagram Posts - Replace URLs with actual posts from @newstylebarbershop50 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* Instagram Post 1 - Replace with real post URL */}
              <div className="instagram-embed-container">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_1/"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '8px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      href="https://www.instagram.com/newstylebarbershop50/"
                      style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                        display: 'block'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full p-1 mx-auto mb-4">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <Instagram size={32} className="text-brand-blue" />
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-brand-blue mb-2">@newstylebarbershop50</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Fresh cuts and professional barbering in Milton, ON
                        </p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium">
                          <Instagram size={16} />
                          View on Instagram
                        </div>
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>

              {/* Instagram Post 2 - Replace with real post URL */}
              <div className="instagram-embed-container">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_2/"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '8px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      href="https://www.instagram.com/newstylebarbershop50/"
                      style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                        display: 'block'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-red rounded-full p-1 mx-auto mb-4">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <Instagram size={32} className="text-brand-blue" />
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-brand-blue mb-2">Professional Cuts</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Quality barbering services for the whole family
                        </p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium">
                          <Instagram size={16} />
                          View Post
                        </div>
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>

              {/* Instagram Post 3 - Replace with real post URL */}
              <div className="instagram-embed-container">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_3/"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '8px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      href="https://www.instagram.com/newstylebarbershop50/"
                      style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                        display: 'block'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full p-1 mx-auto mb-4">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <Instagram size={32} className="text-brand-blue" />
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-brand-blue mb-2">Fresh Styles</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Modern cuts with classic techniques
                        </p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium">
                          <Instagram size={16} />
                          View Post
                        </div>
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>

            {/* How to Get Real Instagram Pictures */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-semibold text-brand-blue mb-3 flex items-center gap-2">
                🖼️ To Show Real Instagram Pictures
              </h4>
              <div className="text-sm text-gray-700 space-y-3">
                <p><strong>Follow these steps to display actual Instagram photos:</strong></p>
                <ol className="list-decimal list-inside ml-4 space-y-2">
                  <li>Go to <a href="https://www.instagram.com/newstylebarbershop50/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@newstylebarbershop50</a> on Instagram</li>
                  <li>Click on individual posts you want to feature</li>
                  <li>Copy the post URL (like: https://www.instagram.com/p/ABC123/)</li>
                  <li>Replace the URLs above (SAMPLE_POST_1, SAMPLE_POST_2, etc.) with real post URLs</li>
                  <li>Save the file and refresh - Instagram will automatically load the real images!</li>
                </ol>
                
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-brand-blue">
                  <p><strong>Example:</strong> Replace <code className="bg-gray-100 px-1 rounded text-xs">data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_1/"</code></p>
                  <p>With: <code className="bg-gray-100 px-1 rounded text-xs">data-instgrm-permalink="https://www.instagram.com/p/REAL_POST_ID/"</code></p>
                </div>
                
                <p className="text-green-700 font-medium">✅ Once you add real URLs, Instagram will automatically display the actual photos, captions, and engagement data!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-brand-off-white rounded-xl p-8 border border-brand-light-gray">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              Share Your Fresh Look!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Got a fresh cut from New Style Barber? Share your photo and tag us <span className="font-semibold text-brand-blue">@newstylebarbershop50</span> with <span className="font-semibold text-brand-red">#NewStyleBarber</span> to be featured on our Instagram!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/newstylebarbershop50/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <Instagram size={20} />
                Follow Us on Instagram
                <ExternalLink size={16} />
              </a>
              <button className="bg-brand-red text-brand-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg">
                Book Your Appointment
              </button>
            </div>
            
            {/* Recent hashtags */}
            <div className="mt-6 pt-6 border-t border-brand-light-gray">
              <p className="text-sm text-gray-600 mb-3">Popular hashtags:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['#NewStyleBarber', '#MiltonBarber', '#FreshCuts', '#BarberLife', '#ClassicCuts', '#FadeLife'].map((hashtag) => (
                  <span
                    key={hashtag}
                    className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium hover:bg-brand-blue/20 transition-colors cursor-pointer"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
