import Image from 'next/image'

const ListIcon = ({src, alt, text, width, height}) => {
	return (
		<li className='flex items-center sm:mb-4 md:mb-10'>
			<Image src={src} alt={alt} className='mr-2 md:mr-4 w-8 md:w-[45px]' />
			<span className='hidden sm:block text-xs md:text-sm'>{text}</span>
		</li>
	)
}

export default ListIcon
