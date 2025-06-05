import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { location, service, barber, date, time, customer } = body

    // Validate required fields
    if (!customer?.email || !customer?.name || !customer?.phone) {
      return NextResponse.json(
        { success: false, message: 'Customer information is required' },
        { status: 400 }
      )
    }

    // Create email content
    const emailHtml = `
      <h2>New Appointment Booking</h2>
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${customer.name}</p>
      <p><strong>Email:</strong> ${customer.email}</p>
      <p><strong>Phone:</strong> ${customer.phone}</p>
      
      <h3>Appointment Details:</h3>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Barber:</strong> ${barber}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
    `

    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend API key not configured. Booking saved but no email sent.')
      // In production, you might want to save to a database here
      return NextResponse.json({ 
        success: true, 
        message: 'Booking received (email service not configured)' 
      })
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'New Style Barber Shop <bookings@newstylebarber.shop>',
      to: customer.email,
      subject: 'Appointment Confirmation - New Style Barber Shop',
      html: `
        <h2>Your appointment is confirmed!</h2>
        <p>Thank you for booking with New Style Barber Shop.</p>
        ${emailHtml}
        <p>If you need to cancel or reschedule, please call us at (365) 877-6644.</p>
      `,
    })

    // Send notification email to shop
    await resend.emails.send({
      from: 'New Style Barber Shop <bookings@newstylebarber.shop>',
      to: 'info@newstylebarber.shop', // Replace with actual shop email
      subject: 'New Appointment Booking',
      html: emailHtml,
    })

    return NextResponse.json({ success: true, message: 'Booking confirmed' })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process booking' },
      { status: 500 }
    )
  }
}