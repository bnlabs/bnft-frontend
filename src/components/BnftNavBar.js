import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux'; 
import { useEffect } from 'react';

const BnftNavBar = () => {
  const { username } = useSelector((state) => state.user.username);

  useEffect(() => {
  }, [username]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home">Bnft</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="features">What is Bnft?</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="action">
                action
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {username==="" ? <Nav.Link >Welcome back {username}</Nav.Link> : 
              <Nav.Link href="https://discord.com/api/oauth2/authorize?client_id=1040068504826675251&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&response_type=code&scope=identify">Login With Discord</Nav.Link>} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BnftNavBar;

