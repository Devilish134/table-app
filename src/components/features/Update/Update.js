import { Button } from 'react-bootstrap';

const Update = ({ children }) => {
  return (
    <Button variant='primary' type='submit'>
      {children}
    </Button>
  );
};

export default Update;
