import { IconStore } from './Icons.jsx'

export function Header () {
  return (
    <header className='Header'>
      <div className='Container'>
        <div className='Header-wrapper'>
          <IconStore />
          <h1>My Shop</h1>
        </div>
      </div>
    </header>
  )
}
