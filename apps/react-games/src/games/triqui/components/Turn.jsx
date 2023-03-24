export default function Turn({ children, isSelected }) {
	const className = `border border-white rounded-md py-1 px-4 font-bold text-xl text-center ${isSelected ? 'border-white bg-white text-indigo-900' : ''}`.trim()
	return (
		<div className={className}>{children}</div>
	)
}
