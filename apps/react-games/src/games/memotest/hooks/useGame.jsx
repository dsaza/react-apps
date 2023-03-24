import { useState } from "react"

const MIN_SECONDS = 50
const INIT_SECONDS = 90
const MAX_SECONDS = 150

export function useGame() {
  const [isStart, setIsStart] = useState(false)
  const [time, setTime] = useState(INIT_SECONDS)
  const [isWin, setIsWin] = useState('ns')

  const startGame = () => setIsStart(true)

  const lessTime = () => {
    const newTime = time - 10
    setTime(newTime < MIN_SECONDS ? MIN_SECONDS : newTime)
  }

  const plussTime = () => {
    const newTime = time + 10
    setTime(newTime > MAX_SECONDS ? MAX_SECONDS : newTime)
  }

  const winGame = () => setIsWin('win')
  const loseGame = () => setIsWin('lose')

  const restartGame = () => {
    setIsWin('ns')
    setIsStart(false)
    setTime(INIT_SECONDS)
  }

  return { isStart, time, isWin, startGame, winGame, loseGame, lessTime, plussTime, restartGame }
}
