import { Triqui } from './games/triqui'
import { Memotest } from './games/memotest'

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
]