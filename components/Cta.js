import Image from 'next/image'
import Link from 'next/link'
import arrowRight from '../public/icons/arrow-right.svg'

export function Cta({
	href,
	className = '',
	icon = arrowRight,
	linkText = 'read more',
	target = '',
}) {
	return (
		<Link
			href={href}
			className={`font-serif text-sm md:text-md text-yellow ${className}`}
			target={target}
		>
			{linkText} <Image className='inline' alt='' src={icon} />
		</Link>
	)
}
