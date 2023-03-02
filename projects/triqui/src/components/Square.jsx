export default function Square({ children, updateBoard, index }) {
	const classNameBorders = {
		0: 'border-b-2 border-r-2',
		1: 'border-b-2',
		2: 'border-b-2 border-l-2',
		3: 'border-b-2 border-r-2',
		4: 'border-b-2',
		5: 'border-b-2 border-l-2',
		6: 'border-r-2',
		7: '',
		8: 'border-l-2',
	}

	const classNameCell = `flex justify-center items-center aspect-square border-slate-400 cursor-pointer text-2xl select-none ${Object.hasOwn(classNameBorders, index) ? classNameBorders[index] : ''}`.trim()

	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div key={index} className={classNameCell} onClick={handleClick}>
			{children}
		</div>
	)
}