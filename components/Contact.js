import { Cols } from './Cols'

const Contact = ({ index }) => {
	return (
		<section className='w-full'>
			<h2 className='font-serif mb-18'>
				<span className='text-lightgreen'>{index}</span> - Contact
			</h2>
			<Cols>
				<span className='text-sm col-span-5 col-start-2'>
					Want to work together?
				</span>
				<span className='text-sm col-span-5 col-start-7 text-right'>
					Send me a message!
				</span>
				<div className='underline-yellow flex my-40 col-span-12'>
					<a
						className='text-2xl font-serif m-auto copy'
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
