import confetti from "canvas-confetti";
import { useEffect } from "react";

import { useImages } from "./hooks/useImages";
import { useGame } from "./hooks/useGame";

import { Title } from "../../components/Title";
import { Targets } from "./components/Targets";
import { Form } from "./components/Form";
import { Message } from "./components/Message";

export function Memotest() {
  const { isStart, time, isWin, startGame, winGame, loseGame, lessTime, plussTime, restartGame } = useGame()
  const { type, types, images, changeType } = useImages()

  useEffect(() => {
    if (isWin === 'win') {
      confetti();
    }
  }, [isWin])

  const resetGame = () => {
    restartGame();
    changeType('');
  }

  return (
    <div className="container mx-auto px-6 pb-20">
      <Title text='Memotest' />
      {isStart
        ? isWin === 'ns'
          ? <Targets game={{ time, loseGame, winGame, resetGame }} images={images} />
          : <Message isWin={isWin} onMount={resetGame} />
        : <Form game={{ isStart, time, startGame, lessTime, plussTime }} images={{ type, types, changeType }} />
      }
    </div>
  )
}