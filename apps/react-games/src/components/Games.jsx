import { Link } from 'react-router-dom'
import { games } from '../games'

export function Games () {
  return (
    <section className='grid grid-cols-[repeat(auto-fill,_minmax(160px,_6fr))] gap-8'>
      {games.map(game => {
        return (
          <Link key={game.id} to={`/games/${game.id}`} className='block bg-white overflow-hidden aspect-square p-4 rounded-xl hover:scale-105 transition-all'>
            <img src={`/images/games/${game.image}`} alt={game.name} className='w-full h-full object-contain' />
          </Link>
        )
      })}
    </section>
  )
}
