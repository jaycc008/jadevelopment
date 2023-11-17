import { Cols } from './Cols'
const PageSection = ({
	index,
	header,
	largerGapY,
	largerGapX,
	className = '',
	children,
}) => {
	return (
		<section
			className={children ? `pb-20 sm:pb-30 lg:pb-50 ${className}` : className}
		>
			<h2 className='font-serif mb-8 sm:mb-18'>
				<span className='text-lightgreen'>{index}</span> - {header}
			</h2>
			<Cols largerGapY={largerGapY} largerGapX={largerGapX}>
				{children}
			</Cols>
		</section>
	)
}

export default PageSection
