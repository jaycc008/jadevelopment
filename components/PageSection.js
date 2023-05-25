import { Cols } from './Cols'
const PageSection = ({ index, header, largerGapY, children }) => {
	return (
		<section className='pb-50'>
			<h2 className='font-serif mb-18'>
				<span className='text-lightgreen'>{index}</span> - {header}
			</h2>
			<Cols largerGapY={largerGapY}>{children}</Cols>
		</section>
	)
}

export default PageSection
