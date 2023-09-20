import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Display from './container/Display'
import './App.css'

function App() {

  return (
    <Container className='d-flex justify-content-center align-content-center my-auto'>
      <Container className='calculator'>
        <h1 className='title'>ReCALC</h1>
        <Display />
      </Container>
    </Container>
  )
}

export default App
