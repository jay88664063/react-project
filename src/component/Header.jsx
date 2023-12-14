import React from "react";
import {Navbar,Container,Nav,Button} from 'react-bootstrap'

function Header() {

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="row sticky-top">
            <Container className="justify-content-around">
                <Navbar.Brand href="#home" className="fs-1 fw-medium">GP</Navbar.Brand>
                <Nav className="mx-5">
                    <Nav.Link href="#home" className="fs-5 px-3">Home</Nav.Link>
                    <Nav.Link href="#features" className="fs-5 px-3">About</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-5 px-3">Service</Nav.Link>
                    <Nav.Link href="#home" className="fs-5 px-3">Portfolio</Nav.Link>
                    <Nav.Link href="#home" className="fs-5 px-3">Team</Nav.Link>
                    <Nav.Link href="#home" className="fs-5 px-3">Drop down</Nav.Link>
                    <Nav.Link href="#home" className="fs-5 px-3">Contact</Nav.Link>
                </Nav>
                <Button variant="warning">GET STARTED</Button>
            </Container>
        </Navbar>
    )
}


export default Header;