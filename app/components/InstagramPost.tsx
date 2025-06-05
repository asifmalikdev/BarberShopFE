'use client'

import { useEffect, useRef } from 'react'
import { Instagram, Heart, MessageCircle, ExternalLink, Calendar } from 'lucide-react'

interface InstagramPostProps {
  id: string
  url: string
  caption: string
  likes: number
  comments: number
  timestamp: string
  embedHtml?: string
  className?: string
}

export default function InstagramPost({
  id,
  url,
  caption,
  likes,
  comments,
  timestamp,
  embedHtml,
  className = ''
}: InstagramPostProps) {
  const embedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If we have embed HTML, inject it and process
    if (embedHtml && embedRef.current) {
      embedRef.current.innerHTML = embedHtml
      
      // Process Instagram embeds if the script is loaded
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }
  }, [embedHtml])

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  // If we have real embed HTML, use it
  if (embedHtml) {
    return (
      <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
        <div ref={embedRef} className="instagram-embed-container" />
      </div>
    )
  }

  // Otherwise, show our custom styled version
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Post Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-brand-blue/10 to-brand-red/10 flex items-center justify-center relative group">
        <div className="text-center p-8">
          <Instagram size={48} className="mx-auto text-brand-blue mb-4" />
          <p className="text-sm text-gray-600 font-medium">Instagram Post</p>
          <p className="text-xs text-gray-500 mt-1">Click to view on Instagram</p>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-blue px-4 py-2 rounded-full font-semibold hover:bg-brand-off-white transition-colors flex items-center gap-2"
          >
            <Instagram size={16} />
            View on Instagram
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="p-4">
        {/* Post Header */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-0.5">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Instagram size={16} className="text-brand-blue" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm text-brand-blue">newstylebarbershop50</p>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Calendar size={12} />
              <span>{formatDate(timestamp)}</span>
            </div>
          </div>
        </div>

        {/* Post Caption */}
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {caption}
        </p>

        {/* Post Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <Heart size={16} className="text-brand-red" />
              <span className="text-sm font-medium">{likes}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <MessageCircle size={16} className="text-brand-blue" />
              <span className="text-sm font-medium">{comments}</span>
            </div>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:text-brand-red transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
