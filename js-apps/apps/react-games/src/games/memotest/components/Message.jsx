import { useEffect } from 'react'

export function Message ({ isWin, onMount }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onMount()
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='max-w-[350px] mx-auto'>
      <div className={`bg-[rgba(0,0,0,.2)] flex aspect-square items-center justify-center rounded-full text-3xl font-bold border ${isWin === 'win' ? 'border-green-200' : 'border-red-200'}`}>
        <p>{isWin === 'win' ? 'GANASTE !' : 'PERDISTE  :('}</p>
      </div>
    </div>
  )
}
