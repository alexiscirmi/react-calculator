import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import { CalcContext } from './context/calcContext'

function Display() {

  const { display } = useContext(CalcContext)

  return (
    <Container className='display'>
      <h1>{display}</h1>
    </Container>
  )
}

export default Display