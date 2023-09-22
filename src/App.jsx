import ButtonContainer from './components/ButtonContainer'
import Container from 'react-bootstrap/Container'
import Display from './components/Display'
import './App.css'

function App() {

  return (
    <Container className='d-flex justify-content-center align-content-center my-auto'>
      <Container className='calculator'>
        <h1 className='title'>BOCALC</h1>
        <Display />
        <ButtonContainer />
      </Container>
    </Container>
  )
}

export default App
