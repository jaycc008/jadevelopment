import { Cols } from './Cols'

const Contact = ({ index }) => {
	return (
		<section className='w-full mb-32'>
			<h2 className='font-serif mb-8 sm:mb-12 md:mb-18'>
				<span className='text-lightgreen'>{index}</span> - Contact
			</h2>
			<Cols>
				<span className='text-xs sm:text-sm col-span-5 col-start-2'>
					Want to work together?
				</span>
				<span className='text-xs sm:text-sm col-span-5 col-start-7 text-right'>
					Send me a message!
				</span>
				<div className='underline-yellow flex mb-20 md:my-20 lg:my-40 col-span-12'>
					<a
						className='text-sm sm:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-serif m-auto copy'
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
			</Cols>
		</section>
	)
}

export default Contact
