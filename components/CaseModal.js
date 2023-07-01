import { useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'

import close from '../public/icons/close.svg'

const CaseModal = ({ show, onClose, caseHeader, children }) => {
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

	const nodeRef = useRef(null)

	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={show}
			classNames='modal'
			unmountOnExit
			timeout={{ enter: 500, exit: 500 }}
		>
			<div ref={nodeRef} className='modal w-full fixed top-0 left-0 z-10'>
				<div className='inner-modal w-full bg-platinum xl:px-10 lg:px-8 md:px-6 px-4'>
					<div className='container mx-auto flex fixed top-0 left-0 right-0 h-32 xl:px-10 lg:px-8 md:px-6 px-4'>
						<button onClick={onClose} className='ml-auto my-auto p-2'>
							<Image src={close} alt='' width='24' />
						</button>
					</div>
					<div className='container mx-auto mt-10'>
						<span className='sm:text-xs'>Case</span>
						<h1 className='text-sm sm:text-md md:text-lg md:text-xl font-serif mb-10 sm:mb-16 md:mb-30'>
							{caseHeader}
						</h1>
						{children}
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default CaseModal
