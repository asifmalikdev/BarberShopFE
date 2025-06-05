'use client'

import { useState } from 'react'
import { Star, Scissors, Award } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Tony Rodriguez',
    title: 'Master Barber & Owner',
    experience: '15+ years',
    specialties: ['Classic Cuts', 'Beard Styling', 'Hot Towel Shaves'],
    image: '/images/barber-1.jpg',
    rating: 4.9,
    description: 'Tony has been perfecting his craft for over 15 years. Known for his precision cuts and attention to detail, he specializes in classic gentleman\'s styles.',
    certifications: ['Master Barber License', 'Straight Razor Certified']
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    title: 'Senior Barber',
    experience: '8+ years',
    specialties: ['Modern Fades', 'Kids Cuts', 'Hair Washing'],
    image: '/images/barber-2.jpg',
    rating: 4.8,
    description: 'Marcus brings energy and creativity to every cut. He stays up-to-date with the latest trends while maintaining classic barbering principles.',
    certifications: ['Licensed Barber', 'Fade Specialist']
  },
  {
    id: 3,
    name: 'Alex Thompson',
    title: 'Barber',
    experience: '5+ years',
    specialties: ['Buzz Cuts', 'Beard Trims', 'Styling'],
    image: '/images/barber-3.jpg',
    rating: 4.7,
    description: 'Alex is passionate about creating the perfect look for each client. Known for his friendly personality and consistent quality cuts.',
    certifications: ['Licensed Barber', 'Customer Service Excellence']
  }
]

export default function Team() {
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null)

  return (
    <section className="py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-brand-red"></div>
            <Scissors className="text-brand-red" size={24} />
            <div className="w-12 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our skilled barbers bring decades of combined experience to deliver the perfect cut every time.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-brand-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedBarber(selectedBarber === member.id ? null : member.id)}
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center">
                <div className="text-brand-white text-6xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-brand-dark-text">{member.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="text-brand-gold fill-current" size={16} />
                    <span className="text-sm font-medium text-brand-dark-text">{member.rating}</span>
                  </div>
                </div>
                
                <p className="text-brand-red font-semibold mb-1">{member.title}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience} experience</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-dark-text text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Expanded Content */}
                {selectedBarber === member.id && (
                  <div className="mt-4 pt-4 border-t border-brand-light-gray animate-fade-in">
                    <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-brand-dark-text text-sm flex items-center gap-2">
                        <Award className="text-brand-gold" size={16} />
                        Certifications:
                      </h5>
                      <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        {member.certifications.map((cert, index) => (
                          <li key={index}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <button
                  className="w-full mt-4 bg-brand-red text-brand-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Add booking logic here - could open booking modal with preselected barber
                    console.log(`Book with ${member.name}`)
                  }}
                >
                  Book with {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-brand-blue rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-brand-white mb-4">
              Ready for Your Perfect Cut?
            </h3>
            <p className="text-brand-white/90 mb-6">
              Book your appointment today with any of our expert barbers.
            </p>
            <button className="bg-brand-red text-brand-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
