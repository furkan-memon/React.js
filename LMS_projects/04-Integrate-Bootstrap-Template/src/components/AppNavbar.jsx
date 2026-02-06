import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">MoveIt</Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto align-items-lg-center gap-lg-3">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <NavDropdown title="More">
            <NavDropdown.Item>Pricing</NavDropdown.Item>
            <NavDropdown.Item>Testimonials</NavDropdown.Item>
          </NavDropdown>
          <Button variant="warning">Get Quote</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
