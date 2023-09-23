import { useContext } from 'react'
import { CalcContext } from './context/calcContext'
import { Container } from 'react-bootstrap'

function Display() {

  const { display } = useContext(CalcContext)

  return (
    <Container className='display fs-1'>
      <h1 className='mb-0'>{display}</h1>
    </Container>
  )
}

export default Display