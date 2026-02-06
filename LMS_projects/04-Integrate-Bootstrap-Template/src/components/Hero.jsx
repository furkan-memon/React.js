import { Container, Button } from "react-bootstrap";

const Hero = () => (
  <Container className="py-5 text-center">
    <h1 className="fw-bold">Move Smarter. Move Faster.</h1>
    <p className="text-muted my-3">
      Trusted home and office moving services with professional handling.
    </p>
    <div className="d-flex justify-content-center gap-3">
      <Button size="lg">Book Now</Button>
      <Button variant="outline-secondary" size="lg">View Plans</Button>
    </div>
  </Container>
);

export default Hero;
