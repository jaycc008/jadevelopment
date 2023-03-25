import { useEffect } from 'react'
import Image from 'next/image'

import robStuurman from '../public/rob-stuurman.png'
import sorryThieves from '../public/sorry-thieves.png'
import wintersport from '../public/wintersport.png'

const Work = () => {
	useEffect(() => {
		document.title = 'JA Development | Work'
	}, [])

	return (
		<main>
			<section className='h-[80vh] full-width bg-services-background bg-cover bg-center lg:bg-right-top mb-20 flex flex-col justify-end'>
				<div className='full-width min-h-1/2 keyvisual-gradient flex flex-col justify-end'>
					<div className='container mx-auto text-white my-12'>
						<span className='text-[1.125rem]'>My work</span>
						<h1 className='text-[5rem] font-serif w-5/12'>???</h1>
					</div>
				</div>
			</section>
			<section className='mb-20'>
				<h2 className='font-serif mb-16'>
					<span className='text-lightgreen'>01</span> - Cases
				</h2>
				<div className='grid grid-cols-12 gap-x-5 gap-y-8'>
					<div className='col-span-4'>
						<h2 className='mb-8 text-[2.5rem] font-serif'>robstuurman.nl</h2>
						<p className='mb-12 text-[1.5rem]'>
							Beautiful onepage website for a spiritual healer
						</p>
					</div>
					<Image
						src={robStuurman}
						alt='Screenshot of robstuurman.nl website'
						className='col-span-7 col-start-6 w-full'
					/>
					<div className='col-span-4'>
						<h2 className='mb-8 text-[2.5rem] font-serif'>SorryThieves</h2>
						<p className='mb-12 text-[1.5rem]'>
							Campaign page for E-Bike store VanMoof
						</p>
					</div>
					<Image
						src={sorryThieves}
						alt="Screenshot of VanMoof's SorryThieves campaign website"
						className='col-span-7 col-start-6 w-full'
					/>
					<div className='col-span-4'>
						<h2 className='mb-8 text-[2.5rem] font-serif'>wintersport.nl</h2>
						<p className='mb-12 text-[1.5rem]'>
							Highly technical platform for wintersports enthusiasts
						</p>
					</div>
					<Image
						src={wintersport}
						alt='Screenshot of wintersport.nl website'
						className='col-span-7 col-start-6 w-full'
					/>
				</div>
			</section>

			<section className='w-full'>
				<h2 className='font-serif mb-18'>
					<span className='text-lightgreen'>04</span> - Contact
				</h2>
				<div className='grid grid-cols-12 gap-5 mt-24'>
					<span className='text-2xl col-span-5 col-start-2'>
						Want to work together?
					</span>
					<span className='text-2xl col-span-5 col-start-7 text-right'>
						Send me a message!
					</span>
				</div>

				<div className='underline-yellow flex my-40'>
					<a
						className='text-[96px] font-serif m-auto copy'
						onClick={e => {
							const classes = e.target.classList
							if (!classes.contains('copied')) classes.add('copied')
							navigator.clipboard.writeText('jayce.ardon@gmail.com')
						}}
						onMouseEnter={e => {
							const classes = e.target.classList
							if (classes.contains('copied')) classes.remove('copied')
						}}
					>
						jayce.ardon@gmail.com
					</a>
				</div>
			</section>
		</main>
	)
}

export default Work
