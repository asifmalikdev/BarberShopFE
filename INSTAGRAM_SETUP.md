# How to Add Real Instagram Pictures to Your Website

## Quick Start Guide

The Instagram feed component is ready to display real Instagram posts! Here's how to make it show actual photos:

### Step 1: Find Instagram Post URLs
1. Go to [@newstylebarbershop50](https://www.instagram.com/newstylebarbershop50/) on Instagram
2. Click on any post you want to feature on your website
3. Copy the URL from your browser (it will look like: `https://www.instagram.com/p/ABC123/`)

### Step 2: Replace Sample URLs
Open `/app/components/InstagramFeed.tsx` and find these lines:
```tsx
data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_1/"
data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_2/"
data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_3/"
```

Replace them with real URLs:
```tsx
data-instgrm-permalink="https://www.instagram.com/p/YOUR_REAL_POST_ID_1/"
data-instgrm-permalink="https://www.instagram.com/p/YOUR_REAL_POST_ID_2/"
data-instgrm-permalink="https://www.instagram.com/p/YOUR_REAL_POST_ID_3/"
```

### Step 3: Save and Refresh
- Save the file
- Refresh your website
- Instagram will automatically load the real photos, captions, and engagement data!

## Example
If you have a post at `https://www.instagram.com/p/CxYz123ABC/`, replace:
```tsx
data-instgrm-permalink="https://www.instagram.com/p/SAMPLE_POST_1/"
```
With:
```tsx
data-instgrm-permalink="https://www.instagram.com/p/CxYz123ABC/"
```

## What Happens Next?
- ✅ Real Instagram photos will display
- ✅ Actual captions will show
- ✅ Real like/comment counts will appear
- ✅ Users can click to view the full post on Instagram

## Adding More Posts
To add more than 3 posts, copy one of the existing `<blockquote>` blocks and paste it below the others with a new Instagram URL.

## Troubleshooting
- Make sure the Instagram post is public (not private)
- URLs must include `/p/` (for posts, not reels or stories)
- Wait a few seconds after refreshing for Instagram to load the embeds
- If a post doesn't load, try a different public post URL

That's it! Your website will now show real Instagram content from @newstylebarbershop50.
