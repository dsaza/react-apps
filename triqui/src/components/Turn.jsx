export default function Turn({ children, isSelected }) {
	const className = `border border-gray-200 rounded-md py-1 px-4 font-semibold text-xl text-center ${isSelected ? 'border-b-4 border-b-blue-200' : ''}`.trim()
	return (
		<div className={className}>{children}</div>
	)
}
