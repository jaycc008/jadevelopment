import { useState } from 'react'
import Image from 'next/image'

const Interests = () => {
	const [activeId, setActiveId] = useState(0)

	return (
		<>
			<div className='grid grid-cols-12 gap-5 menu-tabs mb-20'>
				{interestItems.map(item => (
					<div
						key={item.id}
						className={
							'font-serif text-lightgreen text-[2.5rem] col-span-3 col-start-' +
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
			</div>
			<div className='grid grid-cols-12 gap-5'>
				<Image
					src={interestItems[activeId].img}
					alt={interestItems[activeId].alt}
					className='w-full col-span-4 col-start-2'
				/>
				<article className='col-span-5 col-start-7 my-auto'>
					<p className='text-[2rem]'>{interestItems[activeId].text}</p>
				</article>
			</div>
		</>
	)
}

const interestItems = [
	{
		id: 0,
		tab: 'Family',
		img: require('../public/images/family.png'),
		alt: 'photograph of me holding my daughter',
		text: 'They say becoming a parent changes you, well I have to say all the clichés are true. Ever since my daughter, Yuna, was born in early 2022 I am a changed man. I feel extremely proud of being her father as well as very blessed to be able to raise such a special little person.',
	},
	{
		id: 1,
		tab: 'Sports',
		img: '',
		alt: '',
		text: 'It feels so good to move around and get active. Even when I am not really feeling it, I am strict when it comes to workouts, because I am highly aware of the positive impact it has on me. Where I would practice kickboxing in The Netherlands, I am now enjoying crazy workouts that combine Yoga, Calisthenics and Crossfit, very intense!',
	},
	{
		id: 2,
		tab: 'Cooking',
		img: require('../public/images/cooking.jpg'),
		alt: 'photograph from my foodblog of me presenting a thai red curry',
		text: 'Having run a (spicy vegan) foodblog I really enjoy creating the perfect dish and seeing others enjoy my work. I treat my dishes like a work of art, even though it comes naturally now, I love the creative endeavour as well as being mindful with all of the fresh ingredients.',
	},
]

export default Interests
