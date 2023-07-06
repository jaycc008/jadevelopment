import Head from 'next/head'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isDesktop } from 'react-device-detect'

const Contact = () => {
	return (
		<>
			<Head>
				<title>JA Development | Contact</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
			</Head>
			<section className='flex h-[100vh]'>
				<div className='flex-column justify-center m-auto'>
					<p className='text-sm sm:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center'>
						Send me a message!
					</p>
					<div className='text-center underline-yellow xl:mt-6 2xl:mt-24'>
						<a
							className='text-sm sm:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-serif copy'
							onClick={e => {
								const classes = e.target.classList
								if (!classes.contains('copied')) classes.add('copied')
								navigator.clipboard.writeText('jayce.ardon@gmail.com')
								if (!isDesktop) {
									toast('copied', {
										toastId: 0,
										autoClose: true,
									})
								}
							}}
							onMouseEnter={e => {
								const classes = e.target.classList
								if (classes.contains('copied')) classes.remove('copied')
							}}
						>
							jayce.ardon@gmail.com
						</a>
					</div>
				</div>
				<ToastContainer
					position='bottom-center'
					toastClassName={() => 'bg-green text-platinum font-serif text-center'}
					closeButton={false}
					hideProgressBar={true}
				/>
			</section>
		</>
	)
}

export default Contact
