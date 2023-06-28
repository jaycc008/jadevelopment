import Image from 'next/image'
import { useEffect } from 'react'

import Interests from '../components/Interests'

import jack from '../public/images/jack-of-hearts.svg'
import KeyVisual from '../components/KeyVisual'
import PageSection from '../components/PageSection'
import { Cta } from '../components/Cta'
import { Cols } from '../components/Cols'

const About = () => {
	useEffect(() => {
		document.title = 'JA Development | About'
	}, [])

	return (
		<main>
			<KeyVisual pageName='About' pageHeader='Creative Web Developer' />
			<PageSection index='01' header='Jack-of-all-trades'>
				<Image
					src={jack}
					alt='jack of hearts'
					className='hidden md:block col-span-3 lg:col-span-2 lg:col-start-2'
				/>
				<div className='col-span-12 sm:col-span-10 md:col-span-8 md:col-span-6 lg:col-span-6 sm:col-start-2 md:col-start-5 pt-0 md:pt-30'>
					<p className='sm:mb-4 md:mb-8'>
						Starting out as tester, I learned programming and designing once I
						started my Bachelor&quot;s Degree Mediatechnology at the University
						of Applied Sciences Rotterdam. In my fourth year I wanted to be able
						to provide the full package, thus I chose the minor Security and
						Networking. This resulted in me being a fullstack developer with the
						know-how of design and deployment.
					</p>
					<p className='sm:mb-4 md:mb-8'>
						After working in FinTech, e-commerce, startups and even the Dutch
						Ski Association I have seen my fair share of different projects.
						With my diverse work experience, it was only logical to build my own
						brand and so JA (which is Dutch for YES) was born. So, if you want
						me to make your project a big success, look no further:
					</p>
				</div>
				<Cta
					href='/work'
					className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-start-5 md:col-span-8'
					linkText='JA, I want that'
				/>
			</PageSection>
			<PageSection index='02' header='Costa Rica based' />
			<KeyVisual src='monkey'>
				<Cols>
					<p className='text-md font-serif col-span-3'>
						When I say I love adventure, I truly mean that. While my first 31
						years took place in my home country - The Netherlands - we moved to
						Costa Rica in the fall of 2022. Do you want to go on an{' '}
						<span className='text-yellow font-bold'>adventure</span> with me?
					</p>
				</Cols>
			</KeyVisual>
			<PageSection index='03' header='Personal interests'>
				<Interests />
			</PageSection>
		</main>
	)
}

export default About
