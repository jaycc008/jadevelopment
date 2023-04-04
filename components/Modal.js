import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import close from '../public/icons/close.svg'

const Modal = ({ show, onClose, caseHeader, children }) => {
	const closeOnEscapeKeyDown = useCallback(
		e => {
			if ((e.charCode || e.keyCode) === 27) {
				onClose()
			}
		},
		[onClose]
	)

	useEffect(() => {
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
	}, [closeOnEscapeKeyDown])

	if (!show) {
		return null
	}

	return (
		<div className='w-full bg-platinum min-h-[100vh] absolute top-0 left-0 z-10 xl:px-10 lg:px-8 md:px-6 px-4'>
			<button onClick={onClose} className='fixed right-5 top-10'>
				<Image src={close} alt='' width='24' />
			</button>
			<div className='container mx-auto mt-10'>
				<span className='text-xs'>Case</span>
				<h1 className='text-xl font-serif w-5/12 mb-30'>{caseHeader}</h1>
				{children}
			</div>
		</div>
	)
}

export default Modal
