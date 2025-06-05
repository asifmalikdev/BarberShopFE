import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const postUrl = searchParams.get('url')

  if (!postUrl) {
    return NextResponse.json({ error: 'Missing Instagram post URL' }, { status: 400 })
  }

  try {
    // Use Instagram's oEmbed API (no authentication required for public posts)
    const oembedUrl = `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&omitscript=true`
    
    const response = await fetch(oembedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NewStyleBarber/1.0)'
      }
    })

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    // Return the oEmbed data
    return NextResponse.json({
      success: true,
      data: {
        html: data.html,
        width: data.width,
        height: data.height,
        thumbnail_url: data.thumbnail_url,
        author_name: data.author_name,
        author_url: data.author_url,
        title: data.title,
        provider_name: data.provider_name
      }
    })

  } catch (error) {
    console.error('Instagram oEmbed API error:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch Instagram post data',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Example usage:
// GET /api/instagram/oembed?url=https://www.instagram.com/p/POST_ID/
