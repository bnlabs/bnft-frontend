import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector,useDispatch } from 'react-redux'; 
import { actions } from '../redux/userSlice.js';
import Button from 'react-bootstrap/Button';
import BnftLogo from './BnftLogo.js';
import { useEffect } from 'react';

const BnftNavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.username);
  const username = useSelector((state) => state.user.username);
  const logout = () => {
    dispatch(actions.setUser({}));
    localStorage.clear();
    console.log("logging out");
  };

  const logolength = "6vh";
  const logoColor = "#2f81f7";
  const logoOutlineColor = "#161b22";

  useEffect(() =>{

  },[user]);

  if(username){
    return <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <BnftLogo length={logolength} color={logoColor} outlineColor={logoOutlineColor}/>
            <div>Bnft</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>What is Bnft?</Nav.Link>
            </Nav>
            <Nav>
                <div>
                <Nav.Link style={{ display: "inline-block", marginRight: "20px" }}>
                  Welcome back {username}
                </Nav.Link>
                <Button onClick={logout} style={{ display: "inline-block" }}>Logout</Button>
                </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></>
  }
  else{
    return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home">
          <BnftLogo length={logolength} color={logoColor} outlineColor={logoOutlineColor}/>
          <div>Bnft</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="features">What is Bnft?</Nav.Link>
          </Nav>
          <Nav>
              <Nav.Link href="https://discord.com/api/oauth2/authorize?client_id=1040068504826675251&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&response_type=code&scope=identify">Login With Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  }
}

export default BnftNavBar;


