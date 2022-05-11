import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

function App() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#'>
          Waiter.app
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
