import { Cols } from './Cols'
const PageSection = ({ index, header, largerGapY, children }) => {
	return (
		<section className={children ? 'pb-20 sm:pb-30 lg:pb-50' : ''}>
			<h2 className='font-serif mb-8 sm:mb-18'>
				<span className='text-lightgreen'>{index}</span> - {header}
			</h2>
			<Cols largerGapY={largerGapY}>{children}</Cols>
		</section>
	)
}

export default PageSection
