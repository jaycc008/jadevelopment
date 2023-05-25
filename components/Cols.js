export function Cols({ className = '', largerGapY = false, children }) {
	return (
		<div
			className={`grid grid-cols-12 gap-5 ${
				largerGapY ? 'gap-y-20' : ''
			} ${className}`}
		>
			{children}
		</div>
	)
}
