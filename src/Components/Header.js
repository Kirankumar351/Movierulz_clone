import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../App.css'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='header_part'>
        <h1 className="heading ">MovieRulz</h1>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="mr-auto">
              <Link to="/" className="no-underline"><Nav.Link href="#layouts">Home</Nav.Link></Link>
              {/* ..................... MovieList ............................ */}
              <Link to="/movielist" className="no-underline">
                <NavDropdown title="MovieList" id="basic-nav-dropdown">
                  <Link to="/teluguMovies" className='no-underline'>
                    <NavDropdown.Item href="#action/3.1">Telugu Movies</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </Link>
                  <Link to="/hindiMovies" className='no-underline'>
                    <NavDropdown.Item href="#action/3.2">HindiMovies</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/englishMovies" className='no-underline'>
                    <NavDropdown.Item href="#action/3.3">English Movies</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/movielist" className='no-underline'>
                    <NavDropdown.Item href="#action/3.4">MovieList</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Link>

              {/* ........................Telugu Movies......................... */}

              <Link to="/teluguMovies" className='no-underline'>
                <NavDropdown title="Telugu Movies" id="basic-nav-dropdown">
                  <Link to="/teluguMovies" className='no-underline'>
                    <NavDropdown.Item href="#TeluguMovies-2024">TeluguMovies-2024</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </Link>
                  <Link to="/" className='no-underline'>
                    <NavDropdown.Item href="#TeluguMovies-2023">TeluguMovies-2023</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/" className='no-underline'>
                    <NavDropdown.Item href="#TeluguMovies-2022">TeluguMovies-2022</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/" className='no-underline'>
                    <NavDropdown.Item href="#TeluguMovies-2021">TeluguMovies-2021</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Link>
             {/* ....................Hindi Movies............................. */}
              <Link to="/hindiMovies" className='no-underline'>
                <Nav.Link href="#HindiMovies">Hindi Movies</Nav.Link>
              </Link>
             {/* ....................English Movies............................. */}
              <Link to="/englishMovies" className='no-underline'>
                <Nav.Link href="#EnglishMovies">English Movies</Nav.Link>
              </Link>
            </Nav>
          </Container>
          
          <Form inline className="SearchsubmitButton" >
            <Row>
              <Col xxs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-xs-2"
                />
              </Col>
              <Col xs="auto" >
                <Button variant="secondary" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
      </div>
    </>
  )
}

export default Header