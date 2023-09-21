import Button from 'react-bootstrap/Button'

function ButtonCustom({ variant, value }) {
  return (
    <Button type='button' variant={variant} className='fs-1'>{value}</Button>
  );
}

export default ButtonCustom;