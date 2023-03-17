import Square from './Square'

export default function Board({ board, updateBoard }) {
	return (
		<section className='grid grid-cols-3'>
			{
				board.map((item, index) => (
					<Square
						key={index}
						index={index}
						updateBoard={updateBoard}
					>{item}</Square>
				))
			}
		</section>
	)
}