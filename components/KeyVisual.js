const KeyVisual = ({ pageName, pageHeader }) => {
	return (
		<section
			className={
				'h-[80vh] full-width bg-' +
				pageName.toLowerCase().replace(/\s+/g, '') +
				'-background bg-cover bg-center lg:bg-right-top mb-20 flex flex-col justify-end'
			}
		>
			<div className='full-width xl:px-10 lg:px-8 md:px-6 px-4 min-h-1/2 keyvisual-gradient flex flex-col justify-end'>
				<div className='container mx-auto text-white my-12'>
					<span className='text-xs'>{pageName}</span>
					<h1 className='text-xl font-serif w-5/12'>{pageHeader}</h1>
				</div>
			</div>
		</section>
	)
}

export default KeyVisual
