import { Container, Col, Row } from 'react-bootstrap'
import ButtonCustom from './ButtonCustom';

function ButtonContainer() {
  return (
    <Container className='buttonContainer'>
      <Row>
        <Col><ButtonCustom variant={'success'} value={'AC'} /></Col>
        <Col><ButtonCustom variant={'success'} value={'('} /></Col>
        <Col><ButtonCustom variant={'success'} value={')'} /></Col>
        <Col><ButtonCustom variant={'success'} value={'/'} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={7} /></Col>
        <Col><ButtonCustom variant={'primary'} value={8} /></Col>
        <Col><ButtonCustom variant={'primary'} value={9} /></Col>
        <Col><ButtonCustom variant={'success'} value={'*'} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={4} /></Col>
        <Col><ButtonCustom variant={'primary'} value={5} /></Col>
        <Col><ButtonCustom variant={'primary'} value={6} /></Col>
        <Col><ButtonCustom variant={'success'} value={'-'} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={1} /></Col>
        <Col><ButtonCustom variant={'primary'} value={2} /></Col>
        <Col><ButtonCustom variant={'primary'} value={3} /></Col>
        <Col><ButtonCustom variant={'success'} value={'+'} /></Col>
      </Row>

      <Row>
        <Col><ButtonCustom variant={'primary'} value={0} /></Col>
        <Col><ButtonCustom variant={'success'} value={'.'} /></Col>
        <Col><ButtonCustom variant={'success'} value={'%'} /></Col>
        <Col><ButtonCustom variant={'success'} value={'='} /></Col>
      </Row>

    </Container>
  );
}

export default ButtonContainer