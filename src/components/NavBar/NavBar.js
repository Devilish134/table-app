import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='primary' expand='lg'>
      <Container>
        <Navbar.Brand
          className='text-light'
          href='#'
        >
          Waiter.app
        </Navbar.Brand>
        <Nav className='justify-content-end flex-grow-1 pe-3'>
          <Nav.Link
            className='text-light'
            href='#'
          >
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
