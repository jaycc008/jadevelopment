const KeyVisual = ({
	pageName,
	pageHeader,
	src,
	children,
	bgPosition = 'bg-center lg:bg-right-top',
	className,
}) => {
	let bgClass
	if (src) {
		bgClass = `bg-${src}-background`
	} else {
		bgClass = `bg-${pageName.toLowerCase().replace(/\s+/g, '')}-background`
	}

	return (
		<section
			className={`h-[50vh] sm:h-[70vh] md:h-[80vh] 2xl:h-[100vh] full-width bg-cover flex flex-col justify-end mb-10 md:mb-20 ${bgClass} ${bgPosition} ${className}`}
		>
			<div className='full-width min-h-1/2 keyvisual-gradient flex flex-col justify-end px-4 md:px-6 lg:px-8 xl:px-10'>
				<div className='container mx-auto text-white my-4 md:my-12'>
					<span className='text-xs'>{pageName}</span>
					<h1 className='font-serif text-sm sm:text-md md:text-lg sm:w-10/12 md:w-8/12 xl:w-5/12'>
						{pageHeader}
					</h1>
					{children}
				</div>
			</div>
		</section>
	)
}

export default KeyVisual
