import { Container, Nav } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <Container className="text-center">
      <Nav className="justify-content-center mb-3">
        <Nav.Link className="text-light">Home</Nav.Link>
        <Nav.Link className="text-light">Services</Nav.Link>
        <Nav.Link className="text-light">Pricing</Nav.Link>
      </Nav>
      <p className="mb-0">© 2026 MoveIt</p>
    </Container>
  </footer>
);

export default Footer;
