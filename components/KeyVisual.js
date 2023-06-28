const KeyVisual = ({ pageName, pageHeader, src, children, className }) => {
	let bgClass

	if (src) {
		bgClass = `bg-${src}-background`
	} else {
		bgClass = `bg-${pageName.toLowerCase().replace(/\s+/g, '')}-background`
	}

	return (
		<section
			className={
				'h-[80vh] full-width bg-cover bg-center lg:bg-right-top flex flex-col justify-end mb-10 md:mb-20 ' +
				bgClass
			}
		>
			<div className='full-width min-h-1/2 keyvisual-gradient flex flex-col justify-end px-4 md:px-6 lg:px-8 xl:px-10'>
				<div className='container mx-auto text-white my-12'>
					<span className='text-xs'>{pageName}</span>
					<h1 className='font-serif text-lg md:text-xl xl:w-5/12'>
						{pageHeader}
					</h1>
					{children}
				</div>
			</div>
		</section>
	)
}

export default KeyVisual
