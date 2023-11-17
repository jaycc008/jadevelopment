import { Cols } from './Cols'

const Contact = ({ index }) => {
	return (
		<section className='w-full mb-32'>
			<h2 className='font-serif mb-12 md:mb-12 lg:mb-14 xl:mb-20'>
				<span className='text-lightgreen'>{index}</span> - Contact
			</h2>
			<div className='flex flex-col'>
				<div className='flex flex-col md:flex-row md:w-full md:justify-around mb-8'>
					<span className='text-xs md:text-sm text-center'>
						Want to work together?
					</span>
					<span className='text-xs md:text-sm text-center'>
						Send me a message!
					</span>
				</div>
				<div className='underline-yellow flex mb-20 2xl:my-28'>
					<a
						className='text-sm sm:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-serif m-auto copy'
						onClick={e => {
							const classes = e.target.classList
							if (!classes.contains('copied')) classes.add('copied')
							navigator.clipboard.writeText('jayce@ja-development.nl')
						}}
						onMouseEnter={e => {
							const classes = e.target.classList
							if (classes.contains('copied')) classes.remove('copied')
						}}
					>
						jayce@ja-development.nl
					</a>
				</div>
			</div>
		</section>
	)
}

export default Contact
