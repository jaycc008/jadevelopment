import { useState } from 'react'
import Image from 'next/image'
import { Cols } from './Cols'

import interestItems from '../data/InterestItems.json'

const Interests = () => {
	const [activeId, setActiveId] = useState(0)

	return (
		<>
			<Cols className='menu-tabs mb-4 md:mb-12 lg:mb-16 xl:mb-20 col-span-12'>
				{interestItems.map(item => (
					<div
						key={item.id}
						className={
							'font-serif text-lightgreen text-sm md:text-md lg:text-lg col-span-3 md:col-start-' +
							(2 + item.id * 3)
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
			</Cols>
			<Cols className='col-span-12 mb-20'>
				<Image
					src={'/images/' + interestItems[activeId].img}
					alt={interestItems[activeId].alt}
					width='1000'
					height='1000'
					className='w-full col-span-5 md:col-span-4 md:col-start-2'
				/>
				<article className='col-span-7 md:col-span-5 md:col-start-7 my-auto'>
					<p className='text-xs md:text-sm lg:text-md'>
						{interestItems[activeId].text}
					</p>
				</article>
			</Cols>
		</>
	)
}

export default Interests
