import Image from 'next/image'

import jack from '../public/icons/jack-of-hearts.svg'

import costaRica from '../public/images/costa-rica.jpg'

const About = () => {
	return (
		<main>
			<section className='h-[80vh] full-width bg-hero-background bg-cover'></section>
			<section className='pb-40'>
				<div className='grid grid-cols-12 gap-5'>
					<div className='col-span-12 lg:col-span-8'>
						<h2 className='font-mono'>01. jack-of-all-trades</h2>
						<p className='w-full lg:w-3/4'>
							Being the wizkid of the family, I always had a knack for computers
							and anything technical. This quickly turned into design and
							programming skills after I started my Bachelors Degree
							Mediatechnology at the University of Applied Sciences Rotterdam.
							In my fourth year I wanted to be able to provide the full package
							and as such chose the minor Security and Networking. Now I can
							proudly say I am a fullstack webdeveloper at heart with the
							know-how to get my way around design and deployment of websites.
						</p>
					</div>
					<Image
						src={jack}
						alt='jack of hearts'
						className='col-span-12 lg:col-span-3 m-auto'
					/>
				</div>
			</section>
			<section className='pb-40'>
				<div className='grid grid-cols-12 gap-5'>
					<div className='col-span-12 lg:col-span-8'>
						<h2 className='font-mono'>Costa Rica Based</h2>
						<p className='w-full lg:w-3/4'>
							When I say I love adventure, I truly mean that. While my first 31
							years took place in my home country - The Netherlands - we moved
							to Costa Rica in the fall of 2022. While there are definitely some
							hurdles to overcome from time to time, we love living here and are
							living the best time of our lives!
						</p>
					</div>
					<Image
						src={costaRica}
						alt='view from our home in the jungle'
						className='col-span-12 lg:col-span-3'
					/>
				</div>
			</section>
		</main>
	)
}

export default About
