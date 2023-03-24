export default function Square({ children, updateBoard, index }) {
	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div key={index} className='flex justify-center items-center aspect-square cursor-pointer text-4xl select-none bg-[rgba(0,0,0,.15)] rounded-xl hover:bg-[rgba(0,0,0,.2)]' onClick={handleClick}>
			{children}
		</div>
	)
}