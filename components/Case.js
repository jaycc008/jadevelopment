import Image from 'next/image'
import { Cols } from './Cols'
import { Cta } from './Cta'

const Case = ({ item }) => {
	return (
		<>
			<Cols>
				<Image
					src={item.img1}
					alt={item.alt1}
					className='col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3 w-full mb-4 sm:mb-16 md:mb-30'
					width='1000'
					height='1000'
				/>

				<div className='col-span-12 col-start-1 flex sm:col-span-2 sm:col-start-1 sm:block'>
					<div className='mr-8 sm:mr-0'>
						<h2 className='text-sm md:text-md font-bold sm:mb-4 md:mb-8'>
							Services
						</h2>
						<ul className='text-xs md:text-sm text-lightgreen sm:mb-4 md:mb-8'>
							{item.services.map(service => (
								<li key={service} className='mb-2 md:mb-4'>
									{service}
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className='text-sm md:text-md font-bold sm:mb-4 md:mb-8'>
							Years
						</h2>
						<p className='text-xs md:text-sm text-lightgreen'>{item.years}</p>
					</div>
				</div>

				<div className='col-span-12 col-start-1 sm:col-span-9 sm:col-start-4'>
					<p className='text-xs sm:text-sm md:text-md lg:text-lg font-serif mb-4 md:mb-10'>
						{item.intro}
					</p>
					<p className='text-xs md:text-sm lg:text-md mb-8 sm:mb-12 md:mb-20'>
						{item.paragraph1}
					</p>
				</div>

				<Image
					src={item.img2}
					alt={item.alt2}
					className='col-span-12 sm:col-span-10 sm:col-start-2 w-full max-w-none mb-8 sm:mb-12 md:mb-20'
					width='1000'
					height='1000'
				/>

				<div className='col-span-12 sm:col-span-8 sm:col-start-3'>
					<p className='text-sm sm:text-md md:text-lg lg:text-title font-serif mb-4 sm:mb-10'>
						{item.title2}
					</p>
					<p className='text-xs sm:text-sm md:text-md  mb-8 sm:mb-12 md:mb-20'>
						{item.paragraph2}
					</p>
				</div>

				<Image
					src={item.img3}
					alt={item.alt3}
					className='col-span-12 sm:col-span-10 sm:col-start-2 w-full max-w-none mb-8 sm:mb-12 md:mb-20'
					width='1000'
					height='1000'
				/>

				<div className='col-span-12 sm:col-span-8 sm:col-start-3'>
					<p className='text-sm sm:text-md md:text-lg lg:text-title font-serif mb-4 sm:mb-10'>
						{item.title3}
					</p>
					<p className='text-xs sm:text-sm md:text-md mb-4 sm:mb-6'>
						{item.paragraph3}
					</p>
				</div>

				<Image
					src={item.img4}
					alt={item.alt4}
					className={`col-span-12 sm:col-span-10 sm:col-start-2 w-full max-w-none mb-8 sm:mb-12 md:mb-20 ${item.img4 ? '' : 'hidden'}`}
					width='1000'
					height='1000'
				/>

				<div className='col-span-12 sm:col-span-8 sm:col-start-3'>
					<p className={`text-sm sm:text-md md:text-lg lg:text-title font-serif mb-4 sm:mb-10 ${item.title4 ? '' : 'hidden'}`}>
						{item.title4}
					</p>
					<p className='text-xs sm:text-sm md:text-md  mb-8 sm:mb-12 md:mb-20'>
						{item.paragraph4}
					</p>
				</div>

				<Cta
					className='col-span-12 sm:col-span-8 sm:col-start-3  mb-8 sm:mb-12 md:mb-20'
					href={item.href}
					target='_blank'
					linkText='live link'
				/>
			</Cols>
		</>
	)
}

export default Case
