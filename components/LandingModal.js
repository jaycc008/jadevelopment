import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import { Cta } from './Cta'

import logo from '../public/images/logo.svg'
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
			timeout={{ enter: 0, exit: 500 }}
		>
			<div className='modal w-full h-full fixed top-0 left-0 z-10 d-flex'>
				<div className='flex inner-modal h-full w-full bg-platinum xl:px-10 lg:px-8 md:px-6 px-4'>
					<div className='m-auto w-xs h-120 md:shadow-lg'>
						<Image
							className="mx-auto mb-12"
							src={logo}
							alt='logo'
							width='auto'
							height={96}
							priority
							rel='preload'
							as='image'
						/>
						<div className="container mx-4">
							<p className='text-xs font-bold mb-2'>Reach out:</p>
							<ul className='mb-8'>
								<li>Jayce Ardon</li>
								<li>06 18 96 64 53</li>
								<li>
									<a className='text-lightgreen underline' href="mailto:jayce@ja-development.nl">jayce@ja-development.nl</a>
								</li>
								<li>
									<a className='text-lightgreen underline' href="https://linkedin.com/in/jayce-ardon">linkedin.com/in/jayce-ardon</a>
								</li>
							</ul>
							<p className='text-xs font-bold mb-2'>Portfolio</p>
							<p className='text-lightgreen underline' onClick={onClose}>Or visit my portfolio</p>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default LandingModal
