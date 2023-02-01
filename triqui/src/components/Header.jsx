import { TURNS } from '../constants'
import Turn from './Turn'

export default function Header({ turn, board }) {
	return (
		<>
			<h2 className='font-semibold text-lg mb-4 text-gray-500'>Triqui</h2>
			<section className='mb-8'>
				<div className='grid grid-cols-2 gap-x-4 select-none'>
					<Turn isSelected={turn === TURNS.X}>{TURNS.X}</Turn>
					<Turn isSelected={turn === TURNS.O}>{TURNS.O}</Turn>
				</div>
				<span className='block text-center mt-2 text-xs text-gray-400'>{board.some(item => item === TURNS.X || item === TURNS.O) ? 'Turno de' : 'La partida está por empezar, turno de'} <strong>{turn}</strong></span>
			</section>
		</>
	)
}