import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from 'react-router-dom'
import IconButton from './UI/IconButton';
import LoginButton from './UI/LoginButton';
import Form from 'react-bootstrap/Form';
import SearchIcon from './UI/SearchIcon';

const Navigationbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand><Link to={'/'}><IconButton/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <SearchIcon/>

          </Nav>
          <Nav>
            <Nav.Link><Link to={'/sign'}><LoginButton content = {'가입하기'}/></Link></Nav.Link>
            <Nav.Link><Link to={'login'}><LoginButton content = {'로그인하기'}/></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navigationbar;
