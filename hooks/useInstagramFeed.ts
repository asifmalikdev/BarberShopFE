'use client'

import { useState, useEffect } from 'react'
import { SAMPLE_INSTAGRAM_POSTS } from '@/lib/instagram'

interface InstagramPostData {
  id: string
  url: string
  caption: string
  likes: number
  comments: number
  image: string
  timestamp: string
  embedHtml?: string
}

export function useInstagramFeed() {
  const [posts, setPosts] = useState<InstagramPostData[]>(SAMPLE_INSTAGRAM_POSTS)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRealInstagramPosts = async (postUrls: string[]) => {
    setLoading(true)
    setError(null)
    
    try {
      const embedPromises = postUrls.map(async (url) => {
        try {
          const response = await fetch(`/api/instagram/oembed?url=${encodeURIComponent(url)}`)
          const result = await response.json()
          
          if (result.success) {
            return {
              url,
              embedHtml: result.data.html,
              thumbnail: result.data.thumbnail_url,
              author: result.data.author_name
            }
          }
          return null
        } catch (err) {
          console.error(`Failed to fetch embed for ${url}:`, err)
          return null
        }
      })

      const embedResults = await Promise.all(embedPromises)
      
      // Update posts with real embed data
      const updatedPosts = posts.map((post, index) => {
        const embedData = embedResults[index]
        if (embedData) {
          return {
            ...post,
            embedHtml: embedData.embedHtml,
            image: embedData.thumbnail || post.image
          }
        }
        return post
      })

      setPosts(updatedPosts)
    } catch (err) {
      setError('Failed to load Instagram posts')
      console.error('Instagram feed error:', err)
    } finally {
      setLoading(false)
    }
  }

  return {
    posts,
    loading,
    error,
    fetchRealInstagramPosts
  }
}

// Hook for Instagram account stats
export function useInstagramStats() {
  const [stats, setStats] = useState({
    followers: 2847,
    following: 203,
    posts: 156
  })

  // In a real implementation, this would fetch from Instagram API
  const refreshStats = async () => {
    // Placeholder for real API call
    console.log('Refreshing Instagram stats...')
  }

  return {
    stats,
    refreshStats
  }
}
