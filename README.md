# New Style Barber Shop

A modern, responsive booking website for New Style Barber Shop with two locations in Milton, ON.

## Features

- 🎨 Modern, sleek design with smooth animations
- 📱 Mobile-first responsive layout
- 📅 Online booking system with date/time selection
- 📍 Multiple location support
- 📧 Email confirmation system
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form
- **Email:** Resend
- **Icons:** Lucide React
- **Date Handling:** date-fns
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd new-style-barber
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_actual_resend_api_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Configuration

1. Sign up for a free account at [Resend.com](https://resend.com)
2. Verify your domain (newstylebarber.shop)
3. Get your API key and add it to `.env.local`
4. Update the email addresses in `/app/api/book-appointment/route.ts`

## Deployment to Vercel

1. Push your code to GitHub

2. Go to [Vercel.com](https://vercel.com) and sign up/login

3. Import your GitHub repository

4. Add environment variables in Vercel:
   - `RESEND_API_KEY`: Your Resend API key

5. Deploy!

## Domain Setup

1. Purchase `newstylebarber.shop` from:
   - [Namecheap](https://namecheap.com)
   - [Google Domains](https://domains.google)
   - [GoDaddy](https://godaddy.com)

2. In Vercel:
   - Go to your project settings
   - Navigate to "Domains"
   - Add `newstylebarber.shop`
   - Follow the DNS configuration instructions

3. DNS Records to add:
   - A Record: Point to Vercel's IP
   - CNAME: www subdomain to your Vercel app

## Customization

### Adding/Updating Services
Edit the `services` array in:
- `/app/components/Services.tsx`
- `/app/components/BookingModal.tsx`

### Updating Location Information
Edit the `locations` array in:
- `/app/components/Locations.tsx`
- `/app/components/BookingModal.tsx`

### Changing Colors/Theme
- Edit `/app/globals.css` for global styles
- Update Tailwind classes throughout components

### Adding Brand Assets
1. Add logo to `/public` folder
2. Update favicon in `/app` folder
3. Add images to `/public` and reference in components

## Future Enhancements

- [ ] SMS notifications (Twilio integration ready)
- [ ] Google Calendar integration
- [ ] Online payment processing
- [ ] Customer accounts and booking history
- [ ] Staff management system
- [ ] Real-time availability checking
- [ ] Multi-language support

## Support

For issues or questions, please contact the development team.

## License

© 2024 New Style Barber Shop. All rights reserved.