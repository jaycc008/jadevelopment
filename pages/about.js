import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import jack from '../public/images/jack-of-hearts.svg'
import monkey from '../public/images/monkey.png'

import Interests from '../components/Interests'
import KeyVisual from '../components/KeyVisual'
import PageSection from '../components/PageSection'
import { Cta } from '../components/Cta'
import { Cols } from '../components/Cols'

const About = () => {
	return (
		<>
			<Head>
				<title>JA Development | About</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>
				<KeyVisual pageName='About' pageHeader='Creative Web Developer' />
				<PageSection index='01' header='Jack-of-all-trades'>
					<Image
						src={jack}
						alt='jack of hearts'
						className='hidden md:block col-span-3 lg:col-span-2 lg:col-start-2'
					/>
					<div className='col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-5 md:pt-30'>
						<p className='mb-4 md:mb-8 text-xs sm:text-sm'>
							Starting out as tester in 2009, I learned programming and
							designing in 2012 once I started my Bachelor&quot;s Degree
							Mediatechnology at the University of Applied Sciences Rotterdam.
							In my fourth year I wanted to be able to provide a full service,
							thus I chose the minor Security and Networking. This resulted in
							me being a fullstack developer with the know-how of design as well
							as deployment.
						</p>
						<p className='mb-4 md:mb-8 text-xs sm:text-sm'>
							After working in FinTech, e-commerce, startups and even the Dutch
							Ski Association (wintersport.nl) I have seen my fair share of
							different projects. With my diverse work experience, it was only
							logical to build my own brand and so JA [Dutch for YES] was born.
							So, if you want me to make your project a big success, look no
							further:
						</p>
						<Cta href='/work' linkText='YES, I want that' />
					</div>
				</PageSection>
				<PageSection
					index='02'
					header='Costa Rica based'
					className='hidden lg:block'
				/>
				<KeyVisual
					src='monkey'
					bgPosition='bg-center'
					className='hidden lg:flex'
				>
					<Cols>
						<p className='text-sm xl:text-md font-serif col-span-5 xl:col-span-4 xl:col-start-2 2xl:col-start-1 2xl:col-span-3'>
							When I say I love adventure, I truly mean that. While my first 31
							years took place in my home country - The Netherlands - we moved
							to Costa Rica in the fall of 2022. Do you want to go on an{' '}
							<Link className='text-yellow font-bold' href='/contact'>
								adventure
							</Link>{' '}
							with me?
						</p>
					</Cols>
				</KeyVisual>
				<PageSection index='02' header='Costa Rica based' className='lg:hidden'>
					<Image
						src={monkey}
						alt='monkey looking through the trees'
						className='col-span-12 sm:col-span-8 sm:col-start-3 hidden sm:block'
					/>
					<p className='sm:text-sm col-span-12'>
						When I say I love adventure, I truly mean that. While my first 31
						years took place in my home country - The Netherlands - we moved to
						Costa Rica in the fall of 2022. Do you want to go on an{' '}
						<Link className='text-yellow font-bold' href='/contact'>
							adventure
						</Link>{' '}
						with me?
					</p>
				</PageSection>
				<PageSection index='03' header='Personal interests'>
					<Interests />
				</PageSection>
			</main>
		</>
	)
}

export default About
