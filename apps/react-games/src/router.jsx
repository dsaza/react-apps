import { createBrowserRouter, redirect } from 'react-router-dom'
import { games } from './games'
import { Home } from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  ...games.map(game => {
    return {
      path: `/games/${game.id}`,
      element: game.element
    }
  }),
  {
    path: '*',
    element: <div>Not found</div>
  }
])