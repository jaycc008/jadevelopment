import { useEffect } from 'react'

const Contact = () => {
	useEffect(() => {
		document.title = 'JA Development | Contact'
	}, [])

	return (
		<section className='mt-40'>
			<div className='flex pt-40 justify-center'>
				<span className='text-2xl'>Send me a message!</span>
			</div>

			<div className='underline-yellow flex mt-24 mb-50'>
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
