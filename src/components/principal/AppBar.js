import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/userAuthContext";
import GlobalState from '../../context/productContext';

function NavScroll() {
  
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [product, setState] = useContext(GlobalState);
  const BuscaElems = () =>{
    // console.log(product.products.products)
    // product.products.products.forEach((elem=>{
    //   console.log(elem)

    // }))
    // let obj = product.products.products.find(o => o.id === 536554);
    // product = obj
    // setState(state => ({...product, products: obj}))
    // navigate("/home");

  }
  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{border: 'solid 1px rgb(230, 230, 230)'}}>
      <Container fluid>
        <Navbar.Brand>Catálogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="#" onClick={handleLogout}>Cerrar Sesión</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={BuscaElems}>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;