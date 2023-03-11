import { useEffect } from 'react'

const Contact = () => {
	useEffect(() => {
		document.title = 'JA Development | Contact'
	}, [])

	return (
		<section className='mt-32'>
			<h2 className='font-serif mb-18'>Contact</h2>
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
	)
}

export default Contact
