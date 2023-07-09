import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import menuItems from '../data/MenuItems.json'

const MenuItems = ({ onClose = false }) => {
	const [activePath, setActivePath] = useState('/')
	const router = useRouter()

	console.log(router)
	console.log(menuItems)
	console.log(activePath)

	return menuItems.map(item => (
		<li
			key={item.id}
			className='mb-8 lg:mb-0 lg:ml-8 lg:last-of-type:-mr-4 text-xs'
		>
			<Link
				item={item}
				href={item.href}
				className={
					activePath === item.href ? 'p-4 font-serif active' : 'p-4 font-serif'
				}
				onClick={() => {
					setActivePath(item.href)
					onClose && onClose()
				}}
			>
				{item.linktext}
			</Link>
		</li>
	))
}

export default MenuItems
