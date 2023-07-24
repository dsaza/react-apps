import ReactJson from 'react-json-view'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'
import './Debugger.css'

export function Debugger () {
  const { filters } = useFilters()
  const { cart } = useCart()

  if (import.meta.env.MODE === 'production') return null

  const globalState = {
    filters,
    cart
  }

  return (
    <div className='Debugger'>
      <ReactJson displayDataTypes={false} indentWidth={2} iconStyle='square' collapsed src={globalState} theme='ocean' />
    </div>
  )
}
