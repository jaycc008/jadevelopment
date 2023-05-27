import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo_light.svg'
import menu from '../public/icons/menu.svg'
import MenuItems from './MenuItems'
import MobileMenu from './MobileMenu'

const Header = () => {
	const [show, setShow] = useState(false)

	return (
		<div className='flex justify-center'>
			<header className='h-32 w-full fixed z-10 top-0 bg-platinum_opacity xl:px-10 lg:px-8 md:px-6 px-4'>
				<nav className='flex flex-row justify-between items-center h-full container mx-auto'>
					<Link href={'/'} onClick={() => setActiveId(0)}>
						<Image
							src={logo}
							alt='logo'
							width={150}
							height={92}
							priority
							rel='preload'
							as='image'
						/>
					</Link>
					<ul className='hidden lg:flex flex-row'>
						<MenuItems />
					</ul>
					<button
						className='block lg:hidden'
						onClick={() => {
							setShow(true)
						}}
					>
						<Image src={menu} alt='menu button' />
					</button>
					<MobileMenu show={show} onClose={() => setShow(false)} />
				</nav>
			</header>
		</div>
	)
}

export default Header
