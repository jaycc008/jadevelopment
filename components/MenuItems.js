import { useState } from 'react'
import Link from 'next/link'
import menuItems from '../data/MenuItems.json'

const MenuItems = ({ onClose }) => {
	const [activeId, setActiveId] = useState(0)

	return menuItems.map(item => (
		<li
			key={item.id}
			className='mb-8 lg:mb-0 lg:ml-8 lg:last-of-type:-mr-4 text-xs'
		>
			<Link
				item={item}
				href={item.href}
				className={
					activeId === item.id ? 'p-4 font-serif active' : 'p-4 font-serif'
				}
				onClick={() => {
					setActiveId(item.id)
					onClose()
				}}
			>
				{item.linktext}
			</Link>
		</li>
	))
}

export default MenuItems
