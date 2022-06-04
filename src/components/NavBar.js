import React from 'react';
import ReactStars from "react-rating-stars-component";
import{ Navbar, Container, Nav, Form, FormControl, Button }from 'react-bootstrap';

function NavBar( { gettitle , getrate })
{
  const ratingChanged = (newRating) => {
    getrate(newRating) ;
  };
  return (
    <div>
 
     

<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">MOVIE APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll >
      
        
      </Nav>
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={ e => gettitle ( e.target.value )}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>



    </div>
  )
}

export default NavBar