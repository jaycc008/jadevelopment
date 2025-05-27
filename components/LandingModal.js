import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'

import close from '../public/icons/close.svg'

const LandingModal = ({ show, onClose }) => {
	const closeOnEscapeKeyDown = useCallback(
		e => {
			if ((e.charCode || e.keyCode) === 27) {
				onClose()
			}
		},
		[onClose]
	)

	useEffect(() => {
		document.body.style.overflowY = show ? 'hidden' : 'unset'
		document.body.addEventListener('keydown', closeOnEscapeKeyDown)
		return function cleanup() {
			document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
		}
	}, [show, closeOnEscapeKeyDown])

	return (
		<CSSTransition
			in={show}
			unmountOnExit
		>
			<div className='modal w-full fixed top-0 left-0 z-10'>
				<div className='inner-modal h-full w-full bg-platinum xl:px-10 lg:px-8 md:px-6 px-4'>
					<div className='container mx-auto flex fixed top-0 left-0 right-0 h-32 xl:px-10 lg:px-8 md:px-6 px-4'>
						<button onClick={onClose} className='ml-auto my-auto p-2'>
							<Image src={close} alt='' width='24' />
						</button>
					</div>
					<div className='container m-auto bg-black w-full h-xs'>
						<div className="bg-yellow w-xs h-xs" >
							fdasfdsa
						</div>

					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default LandingModal
