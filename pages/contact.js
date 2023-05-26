import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isDesktop } from 'react-device-detect'

const Contact = () => {
	useEffect(() => {
		document.title = 'JA Development | Contact'
	}, [])

	return (
		<section className='flex h-[100vh]'>
			<div className='flex-column justify-center m-auto'>
				<p className='2xl:text-2xl xl:text-xl lg:text-lg sm:text-md text-sm text-center'>
					Send me a message!
				</p>
				<div className='text-center underline-yellow 2xl:mt-24 xl:mt-6'>
					<a
						className='2xl:text-2xl xl:text-xl lg:text-lg sm:text-md text-sm font-serif copy'
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
	)
}

export default Contact
