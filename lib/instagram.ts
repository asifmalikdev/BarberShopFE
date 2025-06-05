// Instagram API utilities
export interface InstagramPost {
  id: string
  permalink: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url?: string
  thumbnail_url?: string
  caption?: string
  timestamp: string
  like_count?: number
  comments_count?: number
}

export interface InstagramOEmbedResponse {
  version: string
  type: string
  title: string
  author_name: string
  author_url: string
  author_id: number
  width: number
  height: number
  html: string
  thumbnail_url: string
  thumbnail_width: number
  thumbnail_height: number
  provider_name: string
  provider_url: string
}

/**
 * Fetch Instagram oEmbed data for a single post
 * @param postUrl - Instagram post URL (e.g., "https://www.instagram.com/p/ABC123/")
 * @returns Promise with oEmbed data
 */
export async function fetchInstagramOEmbed(postUrl: string): Promise<InstagramOEmbedResponse | null> {
  try {
    const oembedUrl = `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&access_token=YOUR_ACCESS_TOKEN`
    
    // Note: This requires a valid Facebook/Instagram app access token
    // For production, you'd need to set up Instagram Basic Display API
    const response = await fetch(oembedUrl)
    
    if (!response.ok) {
      throw new Error(`Instagram oEmbed API error: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching Instagram oEmbed:', error)
    return null
  }
}

/**
 * Extract post ID from Instagram URL
 * @param url - Instagram post URL
 * @returns Post ID or null
 */
export function extractInstagramPostId(url: string): string | null {
  const match = url.match(/\/p\/([A-Za-z0-9_-]+)\//)
  return match ? match[1] : null
}

/**
 * Sample Instagram posts for New Style Barber Shop
 * Replace these with actual post URLs from @newstylebarbershop50
 */
export const SAMPLE_INSTAGRAM_POSTS = [
  {
    id: 'sample1',
    url: 'https://www.instagram.com/p/SAMPLE1/',
    caption: 'Fresh fade and beard trim for our client! 💈 #NewStyleBarber #FreshCut #MiltonBarber',
    likes: 42,
    comments: 7,
    image: '/api/placeholder/400/400', // Placeholder image
    timestamp: '2024-01-15T10:30:00Z'
  },
  {
    id: 'sample2', 
    url: 'https://www.instagram.com/p/SAMPLE2/',
    caption: 'Transformation Tuesday! Before & after classic gentleman\'s cut ✂️ #TransformationTuesday #ClassicCut',
    likes: 67,
    comments: 12,
    image: '/api/placeholder/400/400', // Placeholder image
    timestamp: '2024-01-12T14:20:00Z'
  },
  {
    id: 'sample3',
    url: 'https://www.instagram.com/p/SAMPLE3/', 
    caption: 'Little man getting his first haircut! We love working with kids 👶 #KidsHaircut #FirstCut #NewStyleBarber',
    likes: 89,
    comments: 15,
    image: '/api/placeholder/400/400', // Placeholder image
    timestamp: '2024-01-10T16:45:00Z'
  },
  {
    id: 'sample4',
    url: 'https://www.instagram.com/p/SAMPLE4/',
    caption: 'Perfect blend and lineup! Thanks for trusting us with your look 🔥 #Barbering #PerfectCut #MiltonON',
    likes: 53,
    comments: 9,
    image: '/api/placeholder/400/400', // Placeholder image
    timestamp: '2024-01-08T11:15:00Z'
  },
  {
    id: 'sample5',
    url: 'https://www.instagram.com/p/SAMPLE5/',
    caption: 'Beard game strong! Trim and shape for the perfect look 🧔 #BeardTrim #BeardGame #NewStyleBarber',
    likes: 34,
    comments: 5,
    image: '/api/placeholder/400/400', // Placeholder image
    timestamp: '2024-01-05T13:30:00Z'
  },
  {
    id: 'sample6',
    url: 'https://www.instagram.com/p/SAMPLE6/',
    caption: 'Another satisfied customer! Book your appointment today 📞 (365) 877-6644 #BookNow #NewStyleBarber',
    likes: 71,
    comments: 8,
    image: '/api/placeholder/400/400', // Placeholder image
    timestamp: '2024-01-03T09:45:00Z'
  }
]

/**
 * Get Instagram account statistics
 * Note: This would require Instagram Basic Display API in production
 */
export const INSTAGRAM_STATS = {
  username: 'newstylebarbershop50',
  followers: 2847,
  following: 203,
  posts: 156,
  verified: false,
  bio: 'Professional Barber Shop in Milton, ON 🇨🇦\n📍 6050 Main St W Unit 1\n📞 (365) 877-6644\n✂️ Fresh Cuts Daily'
}
