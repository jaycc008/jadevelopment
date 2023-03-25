import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import Interests from '../components/Interests'

import jack from '../public/images/jack-of-hearts.svg'
import costaRica from '../public/images/costa-rica.jpg'
import monkey from '../public/images/monkey.png'

const About = () => {
	useEffect(() => {
		document.title = 'JA Development | About'
	}, [])

	return (
		<main>
			<section className='h-[80vh] full-width bg-about-background bg-cover bg-center lg:bg-right-top mb-20'></section>
			<section className='mb-20'>
				<div className='grid grid-cols-12 gap-5'>
					<h2 className='col-span-12 font-serif mb-10'>
						<span className='text-lightgreen'>01</span> - Jack-of-all-trades
					</h2>
					<Image
						src={jack}
						alt='jack of hearts'
						className='col-span-2 col-start-2'
					/>
					<div className='col-span-8 col-start-5 grid grid-cols-8 gap-5'>
						<p className='col-span-7 pt-30 mb-8'>
							Starting out as tester, I learned programming and designing once I
							started my Bachelor&quot;s Degree Mediatechnology at the
							University of Applied Sciences Rotterdam. In my fourth year I
							wanted to be able to provide the full package, thus I chose the
							minor Security and Networking. This resulted in me being a
							fullstack developer with the know-how of design and deployment.
						</p>
						<p className='col-span-7 col-start-2 mb-8'>
							After working in FinTech, e-commerce, startups and even the Dutch
							Ski Association I have seen my fair share of different projects.
							With my diverse work experience, it was only logical to build my
							own brand and so JA (which is Dutch for YES) was born.
						</p>
						<Link
							href='/work'
							className='font-serif text-cta text-yellow col-span-8'
						>
							YES, I can make your project a success!
						</Link>
					</div>
				</div>
			</section>
			<section className='mt-8 mb-20'>
				<h2 className='font-serif mb-10'>
					<span className='text-lightgreen'>02</span> - Costa Rica Based
				</h2>
				<Image
					src={monkey}
					alt='photo of monkey in the trees'
					className='full-width max-w-none mb-20'
				/>
				<div className='grid grid-cols-12 gap-5'>
					<p className='col-span-7 col-start-2'>
						When I say I love adventure, I truly mean that. While my first 31
						years took place in my home country - The Netherlands - we moved to
						Costa Rica in the fall of 2022. While there might be some time
						difference, I treat each project with the attention it deserves. Do
						you want to go on an{' '}
						<span className='text-yellow font-bold'>adventure</span> with me?
					</p>
				</div>
			</section>
			<section className='mt-8 mb-20'>
				<h2 className='font-serif mb-10'>
					<span className='text-lightgreen'>03</span> - Personal interests
				</h2>
				<Interests />
			</section>
		</main>
	)
}

export default About
