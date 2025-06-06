#!/bin/bash

# Quick Setup Script for Appointment Booking Services
# Run this after choosing your booking service

echo "🗓️  New Style Barber Shop - Booking Service Setup"
echo "=================================================="

echo ""
echo "Choose your booking service:"
echo "1) Calendly (Free plan available)"
echo "2) Square Appointments (Completely free)"
echo "3) Acuity Scheduling (Free for 50 clients)"
echo "4) Setmore (Free for 100 bookings)"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
  1)
    echo ""
    echo "🎯 Calendly Setup Instructions:"
    echo "1. Go to https://calendly.com and create account"
    echo "2. Create event types for:"
    echo "   - Men's Haircut (20 min, $35)"
    echo "   - Beard Trim (20 min, $20)"
    echo "   - Haircut + Beard (40 min, $50)"
    echo "   - Kids Haircut (20 min, $25)"
    echo "   - Senior Haircut (20 min, $30)"
    echo "3. Set availability: Mon-Sat 10am-7pm"
    echo "4. Add location: 6050 Main St W Unit 1, Milton, ON"
    echo "5. Copy your booking URLs"
    echo ""
    echo "Example URL format: https://calendly.com/your-username/mens-haircut"
    ;;
  2)
    echo ""
    echo "🎯 Square Appointments Setup Instructions:"
    echo "1. Go to https://squareup.com/appointments"
    echo "2. Create free Square account"
    echo "3. Set up business info:"
    echo "   - Name: New Style Barber Shop"
    echo "   - Address: 6050 Main St W Unit 1, Milton, ON L9T 2M3"
    echo "   - Phone: (365) 877-6644"
    echo "4. Add services with pricing"
    echo "5. Enable online booking"
    echo "6. Get your booking widget code"
    echo ""
    echo "✅ Square is 100% free with all features!"
    ;;
  3)
    echo ""
    echo "🎯 Acuity Scheduling Setup Instructions:"
    echo "1. Go to https://acuityscheduling.com"
    echo "2. Start free trial (50 clients/month free)"
    echo "3. Set up services and staff"
    echo "4. Configure intake forms"
    echo "5. Set availability and business hours"
    echo "6. Get embedding code or booking URLs"
    ;;
  4)
    echo ""
    echo "🎯 Setmore Setup Instructions:"
    echo "1. Go to https://www.setmore.com"
    echo "2. Create free account (100 bookings/month)"
    echo "3. Add staff and services"
    echo "4. Set business hours and availability"
    echo "5. Enable online booking page"
    echo "6. Get your booking page URL"
    ;;
  *)
    echo "Invalid choice. Please run the script again."
    exit 1
    ;;
esac

echo ""
echo "📝 After setup, update these files:"
echo "   - app/components/BookingModalSimple.tsx"
echo "   - Replace booking URLs with your actual URLs"
echo ""
echo "💡 Need help? Check BOOKING_INTEGRATION_GUIDE.md"
echo ""
echo "🚀 Quick test: npm run dev and click 'Book Now'"
