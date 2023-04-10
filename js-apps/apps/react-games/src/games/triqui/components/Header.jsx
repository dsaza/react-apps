import { TURNS } from '../constants'
import Turn from './Turn'

export function Header ({ turn, board }) {
  return (
    <>
      <section className='mb-8'>
        <div className='grid grid-cols-2 gap-x-4 select-none'>
          <Turn isSelected={turn === TURNS.X}>{TURNS.X}</Turn>
          <Turn isSelected={turn === TURNS.O}>{TURNS.O}</Turn>
        </div>
        <span className='block text-center mt-3 text-sm text-white'>{board.some(item => item === TURNS.X || item === TURNS.O) ? 'Turno de' : 'La partida está por empezar, turno de'} <strong className='inline-block bg-[rgba(0,0,0,.2)] w-[22px] h-[22px] leading-[22px] rounded-full'>{turn}</strong></span>
      </section>
    </>
  )
}
