# Instagram Feed Integration Guide

This document explains how to implement a real Instagram feed for the New Style Barber Shop website.

## Current Implementation

The website currently displays sample Instagram posts with the correct styling and layout. The components are ready to display real Instagram content when configured properly.

## Files Overview

- `app/components/InstagramFeed.tsx` - Main Instagram feed component
- `app/components/InstagramPost.tsx` - Individual Instagram post component
- `hooks/useInstagramFeed.ts` - Hook for managing Instagram data
- `lib/instagram.ts` - Instagram utilities and sample data
- `app/api/instagram/oembed/route.ts` - API route for fetching Instagram oEmbed data

## Quick Start (Recommended)

### Method 1: Manual Post URLs (Easiest)

1. Visit [@newstylebarbershop50](https://www.instagram.com/newstylebarbershop50/) on Instagram
2. Open individual posts and copy their URLs (format: `https://www.instagram.com/p/POST_ID/`)
3. Update the `SAMPLE_INSTAGRAM_POSTS` array in `lib/instagram.ts`:

```typescript
export const SAMPLE_INSTAGRAM_POSTS = [
  {
    id: 'real1',
    url: 'https://www.instagram.com/p/ACTUAL_POST_ID_1/', // ← Replace with real URL
    caption: 'Fresh fade and beard trim for our client! 💈 #NewStyleBarber',
    likes: 42,
    comments: 7,
    image: '/api/placeholder/400/400',
    timestamp: '2024-01-15T10:30:00Z'
  },
  // Add more real posts...
]
```

4. The Instagram embeds will automatically load when users visit the page

### Method 2: Using the Load Real Posts Button

1. Update the `loadRealPosts` function in `InstagramFeed.tsx`:

```typescript
const loadRealPosts = () => {
  const realPostUrls = [
    'https://www.instagram.com/p/REAL_POST_ID_1/',
    'https://www.instagram.com/p/REAL_POST_ID_2/',
    'https://www.instagram.com/p/REAL_POST_ID_3/',
  ]
  
  fetchRealInstagramPosts(realPostUrls)
}
```

2. Click the "Try Load Real Posts" button on the website to load them dynamically

## Advanced Implementation Options

### Option 1: Instagram Basic Display API

For dynamic content that updates automatically:

1. Create a Facebook/Instagram App at [developers.facebook.com](https://developers.facebook.com/apps/)
2. Set up Instagram Basic Display product
3. Get access tokens and implement in the API route
4. Configure webhooks for real-time updates

**Required Environment Variables:**
```bash
INSTAGRAM_APP_ID=your_app_id
INSTAGRAM_APP_SECRET=your_app_secret
INSTAGRAM_ACCESS_TOKEN=your_access_token
```

### Option 2: Third-Party Services

Easier alternatives that don't require coding:

1. **SnapWidget** - [snapwidget.com](https://snapwidget.com)
2. **Juicer** - [juicer.io](https://juicer.io)
3. **Instagram Feed Plugin** - Various WordPress-style plugins

### Option 3: Instagram oEmbed API

Already implemented in `app/api/instagram/oembed/route.ts`. This fetches individual post data without requiring authentication.

## Testing the Implementation

1. Start the development server:
```bash
npm run dev
```

2. Navigate to the Instagram section on the homepage
3. Try the "Load Real Posts" button (it will show errors with sample URLs)
4. Replace sample URLs with real ones to test

## Styling and Customization

The Instagram feed uses the existing brand color palette:
- `brand-blue` - Primary blue color
- `brand-red` - Accent red color  
- `brand-white` - White backgrounds
- `brand-off-white` - Light gray backgrounds

All components are fully responsive and match the website's design system.

## Troubleshooting

### Common Issues

1. **Posts not loading**: Check that Instagram URLs are correct and public
2. **Embed script errors**: Instagram's embed script can be temperamental; refresh the page
3. **API rate limits**: Instagram/Facebook APIs have usage limits

### Error Messages

- "Failed to fetch Instagram post data" - Usually means invalid post URL or private post
- "Instagram API responded with status: 400" - Invalid oEmbed request

## Production Checklist

- [ ] Replace all sample Instagram URLs with real ones
- [ ] Test that posts load correctly
- [ ] Verify Instagram embed script loads properly
- [ ] Check responsive design on mobile devices
- [ ] Test external links open in new tabs
- [ ] Ensure proper error handling

## Support

For questions about Instagram API integration, refer to:
- [Instagram oEmbed Documentation](https://developers.facebook.com/docs/instagram-oembed)
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)

## Security Notes

- Never commit API keys or access tokens to version control
- Use environment variables for sensitive data
- Instagram embeds load external content - ensure CSP policies allow it
- Consider implementing rate limiting for the oEmbed API route
