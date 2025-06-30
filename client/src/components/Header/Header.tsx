import {Container, Nav, Navbar} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Navbar className='m-2 rounded-4' bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>GO_go</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => navigate('/accounts')}
            active={location.pathname === '/accounts'}
          >Аккаунты</Nav.Link>
          <Nav.Link
            onClick={() => navigate('/parsing')}
            active={location.pathname === '/Parsing'}
          >Парсинг</Nav.Link>
          <Nav.Link>Прогрев</Nav.Link>
          <Nav.Link>Рассылка</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header