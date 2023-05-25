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
					<button onClick={onClose} className='fixed right-10 top-10'>
						<Image src={close} alt='' width='24' />
					</button>
					<div className='container mx-auto mt-10'>
						<span className='text-xs'>Case</span>
						<h1 className='text-xl font-serif w-5/12 mb-30'>{caseHeader}</h1>
						{children}
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default CaseModal
