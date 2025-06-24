import { MapPin, Phone, Clock } from 'lucide-react'

const locations = [
	{
		name: 'Milton - Main Street',
		address: '6050 Main St W, Milton, ON',
		phone: '(416) 123-4567',
		hours: 'Mon-Sat: 10am - 7pm',
		mapEmbed:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.512345!2d-79.878!3d43.512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDPCsDMwJzQzLjIiTiA3OcKwNTInNDIuOCJX!5e0!3m2!1sen!2sca!4v1680000000000',
	},
	{
		name: 'Milton - Location 2',
		address: '1234 Second St, Milton, ON',
		phone: '(416) 765-4321',
		hours: 'Mon-Sat: 10am - 7pm',
		mapEmbed:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.512345!2d-79.888!3d43.522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDPCsDMxJzEwLjAiTiA3OcKwNTMnMTIuMCJX!5e0!3m2!1sen!2sca!4v1680000000001',
	},
]

export default function LocationsPage() {
	return (
		<div className='relative min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-100 py-20 px-4'>
			<div className='absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl -z-10' />
			<div className='absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl -z-10' />
			<h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 mb-16 text-center drop-shadow-2xl'>
				Our Locations Are Here
			</h1>
			<div className='grid md:grid-cols-2 gap-14 max-w-6xl mx-auto'>
				{locations.map((loc, idx) => (
					<div
						key={idx}
						className='relative bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-gray-200 hover:scale-[1.03] hover:shadow-3xl transition-transform duration-300'
						style={{
							boxShadow:
								'0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 6px 0 rgba(255, 193, 7, 0.10)',
						}}
					>
						<div className='absolute -top-8 -right-8 w-28 h-28 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none' />
						<h2 className='text-2xl font-bold text-blue-700 mb-2 drop-shadow'>
							{loc.name}
						</h2>
						<div className='flex items-center gap-3 text-gray-700 font-medium'>
							<MapPin className='w-6 h-6 text-red-500' />{' '}
							<span>{loc.address}</span>
						</div>
						<div className='flex items-center gap-3 text-gray-700 font-medium'>
							<Phone className='w-6 h-6 text-green-600' />{' '}
							<span>{loc.phone}</span>
						</div>
						<div className='flex items-center gap-3 text-gray-700 font-medium'>
							<Clock className='w-6 h-6 text-yellow-500' />{' '}
							<span>{loc.hours}</span>
						</div>
						<div className='rounded-xl overflow-hidden border-2 border-blue-200 shadow-lg mt-4'>
							<iframe
								src={loc.mapEmbed}
								title={loc.name}
								width='100%'
								height='220'
								className='w-full'
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								style={{ border: 0 }}
								allowFullScreen
							/>
						</div>
						<a
							href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
							className='mt-4 inline-block bg-gradient-to-r from-blue-600 to-yellow-400 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-yellow-400 hover:to-blue-600 hover:scale-105 transition-all'
						>
							Call This Location
						</a>
					</div>
				))}
			</div>
		</div>
	)
}