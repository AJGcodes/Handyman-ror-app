import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MainNav } from '../../styles/sharedStyle';

const MainNavbar = () => (
  <Navbar>
    <Container>
      <Link 
        to='/'
      >
        <Navbar.Brand>Services List</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link>
            <MainNav to='/'>
              Home
            </MainNav>
          </Nav.Link>
          <Nav.Link>
            <MainNav to='/about'>
              About
            </MainNav>
          </Nav.Link>
          <Nav.Link>
            <MainNav to='/workers'>
              Workers
            </MainNav>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MainNavbar;