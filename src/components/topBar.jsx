import def from "ajv/dist/vocabularies/discriminator";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function TopBar(){
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">CampusMarket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopBar;