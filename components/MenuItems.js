import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import menuItems from '../data/MenuItems.json'

const MenuItems = ({ onClose = false }) => {
	const router = useRouter()

	return menuItems.map(item => (
		<li
			key={item.path}
			className='mb-8 lg:mb-0 lg:ml-8 lg:last-of-type:-mr-4 text-xs'
		>
			<Link
				item={item}
				href={item.path}
				className={
					router.pathname == item.path ? 'p-4 font-serif active' : 'p-4 font-serif'
				}
				onClick={() => {
					onClose && onClose()
				}}
			>
				{item.linktext}
			</Link>
		</li>
	))
}

export default MenuItems
