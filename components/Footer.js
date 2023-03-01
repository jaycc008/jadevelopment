import Link from 'next/link'

const Footer = () => {
	return (
		<>
			<footer className='h-32 flex flex-row justify-between'>
				<nav className='my-auto'>
					<ul className='flex flex-row'>
						{menuItems.map(item => (
							<li key={item.id} className='mr-8'>
								<Link
									item={item}
									href={item.href}
								>
									{item.linktext}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<span className='font-mono my-auto'>
					Designed and Developed by JA Development
				</span>
			</footer>
		</>
	)
}

const menuItems = [
	{ id: 0, linktext: 'LinkedIn', href: 'https://www.linkedin.com/in/jayce-ardon/' },
	{ id: 1, linktext: 'GitHub', href: 'https://github.com/jaycc008' },
]

export default Footer
