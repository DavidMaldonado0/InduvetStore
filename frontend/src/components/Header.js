import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

const Header = () => {
    return (
        <header>
            <Navbar className="navbar fixed-top" bg='light' variant='light' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand><strong>I N D U V E T</strong></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>  
                        <LinkContainer to='/cart'>
                        <Nav.Link><i className='fas fa-cart-plus'></i> Compras</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link><i className='fas fa-user'></i> Iniciar Sesion</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header