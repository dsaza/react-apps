import { Games } from '../components/Games'
import { Header } from '../components/Header'

export function Home() {
  return (
    <div className="container mx-auto px-6">
      <Header />
      <main className='mt-10'>
        <Games />
      </main>
    </div>
  )
}
