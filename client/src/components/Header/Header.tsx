import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className='m-2 rounded-4' bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>GO_go</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Аккаунты</Nav.Link>
          <Nav.Link>Прогрев</Nav.Link>
          <Nav.Link>Рассылка</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header