import Image from 'next/image'

const ListIcon = ({ src, alt, text, width, height }) => {
	return (
		<li className='flex items-center sm:mb-4 mr-4 md:mb-6'>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className='mr-2 md:mr-4 w-8 lg:w-[45px]'
			/>
			<span className='hidden sm:block text-xs lg:text-sm'>{text}</span>
		</li>
	)
}

export default ListIcon
