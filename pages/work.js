import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import robStuurman from '../public/rob-stuurman.png'
import sorryThieves from '../public/sorry-thieves.png'
import wintersport from '../public/wintersport.png'

import KeyVisual from '../components/KeyVisual'
import Contact from '../components/Contact'
import PageSection from '../components/PageSection'

const Work = () => {
	useEffect(() => {
		document.title = 'JA Development | Work'
	}, [])

	return (
		<main>
			<KeyVisual pageName='My work' pageHeader='Projects & Experience' />
			<PageSection index='01' header='Experience'>
				<div className='col-span-4'>
					<h3 className='font-serif text-[2.5rem] mb-10'></h3>
					<p className='text-[1.5rem]'></p>
				</div>
			</PageSection>
			<PageSection index='02' header='Cases' gapY={10}>
				<div className='col-span-4'>
					<h3 className='font-serif text-[2.5rem] mb-10'>robstuurman.nl</h3>
					<p className='text-[1.5rem]'>
						Beautiful onepage website for a spiritual healer.
					</p>
				</div>
				<Image
					src={robStuurman}
					alt='Screenshot of robstuurman.nl'
					className='col-span-7 col-start-6 w-full'
				/>
				<div className='col-span-4'>
					<h3 className='font-serif text-[2.5rem] mb-10'>SorryThieves</h3>
					<p className='text-[1.5rem]'>
						Campaign page for E-Bike store VanMoof.
					</p>
				</div>
				<Image
					src={sorryThieves}
					alt='Screenshot of SorryThieves campaign page'
					className='col-span-7 col-start-6 w-full'
				/>
				<div className='col-span-4'>
					<h3 className='font-serif text-[2.5rem] mb-10'>wintersport.nl</h3>
					<p className='text-[1.5rem]'>
						Highly technical platform for wintersports enthusiasts.
					</p>
				</div>
				<Image
					src={wintersport}
					alt='Screenshot of wintersport.nl'
					className='col-span-7 col-start-6 w-full'
				/>
			</PageSection>
			<Contact index='03' />
		</main>
	)
}

export default Work
