import { useEffect } from 'react'
import { useMemo, useRef, useState } from 'react'
import { useTargets } from '../hooks/useTargets'
import { transformImages } from '../utils'
import { TargetSimple } from './TargetSimple'

export function Targets({ images, game }) {
  const { time: timeGame, loseGame, winGame, resetGame } = game

  const [isShowTargets, setIsShowTargets] = useState(false)
  const [countStart, setCountStart] = useState(3)
  const [countOfGame, setCountOfGame] = useState(timeGame)

  const { selected, guessed, addSelected } = useTargets()

  const transformedImages = useMemo(() => transformImages(images), [images])
  const targetCols = useRef(images.length / 2)
  const imagesForWin = useRef(images.length * 2)

  // useEffect for start game
  useEffect(() => {
    const timeoutStart = setTimeout(() => {
      setIsShowTargets(true)
    }, 3000);

    return () => clearTimeout(timeoutStart)
  }, [])

  // useEffect for change count down value to start
  useEffect(() => {
    const startingGame = setInterval(() => {
      setCountStart(prevCountStart => {
        const newCountStart = prevCountStart - 1
        if (newCountStart === 0) clearInterval(startingGame)
        return newCountStart
      })
    }, 1000);

    return () => clearInterval(startingGame)
  }, [])

  // useEffect for change count down value of game
  useEffect(() => {
    const timeOfGame = setInterval(() => {
      if (isShowTargets) setCountOfGame(prevCountOfGame => {
        const newCountOfGame = prevCountOfGame - 1

        if (newCountOfGame === 0) {
          loseGame()
          clearInterval(timeOfGame)
        }

        return newCountOfGame
      })
    }, 1000);

    return () => clearInterval(timeOfGame)
  }, [isShowTargets])

  // useEffect for validate win game
  useEffect(() => {
    if (guessed.length === imagesForWin.current) {
      winGame()
    }
  }, [guessed])

  if (!isShowTargets) return (
    <div className='max-w-[350px] mx-auto aspect-square border border-white rounded-full flex justify-center items-center bg-[rgba(0,0,0,.2)] font-bold text-9xl'>
      {countStart}
    </div>
  )

  return (
    <>
      <div className='flex items-center justify-center gap-3 mb-8'>
        <p className='text-xs'>Te quedan</p>
        <p className='text-3xl font-bold'>{countOfGame}</p>
        <p className='text-xs'>segundos</p>
      </div>
      <ul className="max-w-[530px] mx-auto grid gap-2 sm:gap-4" style={{ gridTemplateColumns: `repeat(${targetCols.current}, 1fr)` }}>
        {transformedImages.map((image) => <TargetSimple
          key={image}
          image={image}
          guessed={guessed}
          selected={selected}
          onClickTarget={(image) => selected.length < 2 && addSelected(image)}
        />)}
      </ul>
      <div className='max-w-[530px] mx-auto mt-8 text-right'>
        <button type='button' onClick={resetGame} className="text-xs font-bold underline">Me rindo</button>
      </div>
    </>
  )
}