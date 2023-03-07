import Link from 'next/link'
import Image from 'next/image'
import github from '../public/icons/github.svg'
import linkedin from '../public/icons/linkedin.svg'

const Footer = () => {
	return (
		<>
			<footer className='container mx-auto xl:px-10 lg:px-8 md:px-6 px-4 h-32 flex flex-row justify-between'>
				<nav className='my-auto'>
					<ul className='flex flex-row'>
						{menuItems.map(item => (
							<li key={item.id} className='mr-8'>
								<Link item={item} href={item.href} target='_blank'>
									<Image
										src={item.icon}
										alt={item.linktext + 'icon'}
										height='24'
										width='24'
										className='inline mr-2'
									/>{' '}
									<span className='align-middle text-xl'>{item.linktext}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<span className='font-serif my-auto'>
					Designed and Developed by <span className='text-lightgreen'>JA</span>{' '}
					development
				</span>
			</footer>
		</>
	)
}

const menuItems = [
	{
		id: 0,
		linktext: 'LinkedIn',
		icon: linkedin,
		href: 'https://www.linkedin.com/in/jayce-ardon/',
	},
	{
		id: 1,
		linktext: 'GitHub',
		icon: github,
		href: 'https://github.com/jaycc008',
	},
]

export default Footer
