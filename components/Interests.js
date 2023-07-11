import { useState } from 'react'
import Image from 'next/image'
import { Cols } from './Cols'

import interestItems from '../data/InterestItems.json'

const Interests = () => {
	const [activeId, setActiveId] = useState(0)

	return (
		<>
			<div className='menu-tabs sm:mb-4 md:mb-12 lg:mb-16 xl:mb-20 col-span-12 md:col-start-2 flex justify-between sm:justify-start'>
				{interestItems.map(item => (
					<div
						key={item.id}
						className={
							'font-serif text-lightgreen text-xs md:text-sm lg:text-md px-4'
						}
					>
						<span
							className={
								activeId === item.id
									? 'cursor-pointer active'
									: 'cursor-pointer'
							}
							onClick={() => setActiveId(item.id)}
						>
							{item.tab}
						</span>
					</div>
				))}
			</div>
			<Cols className='col-span-12 mb-20'>
				<div className='col-span-6 col-start-4 min-h-[12.5rem] sm:col-span-5 md:col-span-4 md:col-start-2 flex'>
					<Image
						src={interestItems[activeId].img}
						alt={interestItems[activeId].alt}
						width='1000'
						height='1000'
						className='m-auto'
					/>
				</div>
				<article className='col-span-12 sm:col-span-7 md:col-span-5 md:col-start-7 my-auto'>
					<p className='sm:text-xs lg:text-sm'>
						{interestItems[activeId].text}
					</p>
				</article>
			</Cols>
		</>
	)
}

export default Interests
