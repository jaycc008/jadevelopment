export function Cols({ className = '', children }) {
	return (
		<div className={`grid grid-cols-12 gap-5 ${className}`}>{children}</div>
	)
}
