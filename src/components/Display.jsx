import { useContext } from 'react'
import { CalcContext } from './context/calcContext'

function Display() {

  const { display } = useContext(CalcContext)

  return (
    <input type='text' className='display fs-1' value={display} onChange={() => display} />
  )
}

export default Display