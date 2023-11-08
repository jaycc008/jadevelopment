export function Cols({
	className = '',
	largerGapY = false,
	children,
	id = '',
}) {
	return (
		<div
			className={`grid grid-cols-12 gap-5 scroll-mt-16 md:scroll-mt-32 ${
				largerGapY ? 'md:gap-y-20' : ''
			} ${className}`}
			id={id}
		>
			{children}
		</div>
	)
}
