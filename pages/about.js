import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import Interests from '../components/Interests'

import jack from '../public/images/jack-of-hearts.svg'
import monkey from '../public/images/monkey.png'
import KeyVisual from '../components/KeyVisual'
import { Cols } from '../components/Cols'
import PageSection from '../components/PageSection'

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
					className='col-span-2 col-start-2'
				/>
				<div className='col-span-8 col-start-5 grid grid-cols-8 gap-5'>
					<p className='col-span-7 pt-30 mb-8'>
						Starting out as tester, I learned programming and designing once I
						started my Bachelor&quot;s Degree Mediatechnology at the University
						of Applied Sciences Rotterdam. In my fourth year I wanted to be able
						to provide the full package, thus I chose the minor Security and
						Networking. This resulted in me being a fullstack developer with the
						know-how of design and deployment.
					</p>
					<p className='col-span-7 col-start-2 mb-8'>
						After working in FinTech, e-commerce, startups and even the Dutch
						Ski Association I have seen my fair share of different projects.
						With my diverse work experience, it was only logical to build my own
						brand and so JA (which is Dutch for YES) was born.
					</p>
					<Link
						href='/work'
						className='font-serif text-md text-yellow col-span-8'
					>
						YES, I can make your project a success!
					</Link>
				</div>
			</PageSection>
			<PageSection index='02' header='Costa Rica based'>
				<Image
					src={monkey}
					alt='photo of monkey in the trees'
					className='full-width max-w-none mb-20 col-span-12'
				/>
				<p className='col-span-7 col-start-2'>
					When I say I love adventure, I truly mean that. While my first 31
					years took place in my home country - The Netherlands - we moved to
					Costa Rica in the fall of 2022. While there might be some time
					difference, I treat each project with the attention it deserves. Do
					you want to go on an{' '}
					<span className='text-yellow font-bold'>adventure</span> with me?
				</p>
			</PageSection>
			<PageSection index='03' header='Personal interests'>
				<Interests />
			</PageSection>
		</main>
	)
}

export default About
