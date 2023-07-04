import { useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import MenuItems from './MenuItems'

import close from '../public/icons/close.svg'

const MobileMenu = ({ show, onClose }) => {
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
					<div className='container mx-auto flex absolute top-0 left-0 right-0 h-16 md:h-32 xl:px-10 lg:px-8 md:px-6 px-4'>
						<button onClick={onClose} className='ml-auto my-auto md:p-2'>
							<Image src={close} alt='' width='24' />
						</button>
					</div>
					<div className='container h-full m-auto flex justify-center items-center'>
						<ul className='flex flex-col items-center'>
							<MenuItems onClose={onClose} />
						</ul>
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default MobileMenu
