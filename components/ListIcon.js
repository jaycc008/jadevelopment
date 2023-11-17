import Image from 'next/image'

const ListIcon = ({ src, alt, text, width, height }) => {
	return (
		<li className='flex items-center mr-4 lg:mr-0 sm:mb-4 md:w-1/2'>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className='mr-2 md:mr-4 w-8 h-8'
			/>
			<span className='hidden sm:block text-xs'>{text}</span>
		</li>
	)
}

export default ListIcon
