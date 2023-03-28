import { Triqui } from './games/triqui'
import { Memotest } from './games/memotest'
import { WordsPerMinute } from './games/words-per-minute'

export const games = [
  {
    id: 'triqui',
    name: 'Triqui',
    image: 'triqui.png',
    element: <Triqui />
  },
  {
    id: 'memotest',
    name: 'Memotest',
    image: 'memotest.png',
    element: <Memotest />
  },
  {
    id: 'words-per-minute',
    name: 'Palabras por minuto',
    image: 'memotest.png',
    element: <WordsPerMinute />
  }
]
