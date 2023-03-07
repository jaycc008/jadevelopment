import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo_light.svg'

const Header = () => {
	const [activeId, setActiveId] = useState(0)

	return (
		<div className='flex justify-center'>
			<header className='h-32 fixed top-0 bg-platinum container xl:px-10 lg:px-8 md:px-6 px-4'>
				<nav className='flex flex-row justify-between items-center h-full'>
					<Link href={'/'} onClick={() => setActiveId(0)}>
						<Image
							className=''
							src={logo}
							alt='logo'
							width={150}
							height={92}
							priority
							rel='preload'
							as='image'
						/>
					</Link>
					<ul className='flex flex-row'>
						{menuItems.map(item => (
							<li
								key={item.id}
								className='ml-8 last-of-type:-mr-4 text-[1.125rem]'
							>
								<Link
									item={item}
									href={item.href}
									className={
										activeId === item.id
											? 'p-4 font-serif active'
											: 'p-4 font-serif'
									}
									onClick={() => setActiveId(item.id)}
								>
									{item.linktext}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</div>
	)
}

const menuItems = [
	{ id: 0, linktext: 'home', href: '/' },
	{ id: 1, linktext: 'about me', href: '/about' },
	{ id: 2, linktext: 'services', href: '/services' },
	{ id: 3, linktext: 'my work', href: '/work' },
	{ id: 4, linktext: 'contact', href: '/contact' },
]

export default Header
