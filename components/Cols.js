export function Cols({ className = '', gapY = '', children }) {
	return (
		<div
			className={`grid grid-cols-12 gap-5 ${
				gapY ? 'gap-y-' + gapY : ''
			} ${className}`}
		>
			{children}
		</div>
	)
}
