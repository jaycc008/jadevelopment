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
					className='col-span-8 col-start-3 w-full mb-30'
					width='1000'
					height='1000'
				/>

				<div className='col-span-2 col-start-1'>
					<h2 className='text-md font-bold mb-8'>Services</h2>
					<ul className='text-sm text-lightgreen mb-8'>
						{item.services.map(service => (
							<li key={service} className='mb-4'>
								{service}
							</li>
						))}
					</ul>
					<h2 className='text-md font-bold mb-8'>Years</h2>
					<p className='text-xs text-lightgreen'>{item.years}</p>
				</div>

				<div className='col-span-9 col-start-4'>
					<p className='text-lg font-serif mb-10'>{item.intro}</p>
					<p className='text-md mb-20'>{item.paragraph1}</p>
				</div>

				<Image
					src={item.img2}
					alt={item.alt2}
					className='full-width max-w-none mb-20 col-span-12'
					width='1000'
					height='1000'
				/>

				<div className='col-span-8 col-start-3'>
					<p className='text-title font-serif mb-10'>{item.title2}</p>
					<p className='text-md mb-20'>{item.paragraph2}</p>
				</div>

				<Image
					src={item.img3}
					alt={item.alt3}
					className='full-width max-w-none mb-20 col-span-12'
					width='1000'
					height='1000'
				/>

				<div className='col-span-8 col-start-3'>
					<p className='text-title font-serif mb-10'>{item.title3}</p>
					<p className='text-md mb-6'>{item.paragraph3}</p>
					<p className='text-md mb-20'>{item.paragraph4}</p>
				</div>

				<Cta
					className='col-span-8 col-start-3 mb-20'
					href={item.href}
					target='_blank'
					linkText='live link'
				/>
			</Cols>
		</>
	)
}

export default Case
