import { Container, Alert, Button } from "react-bootstrap";

const CTA = () => (
  <Container className="py-5">
    <Alert variant="primary" className="d-flex justify-content-between align-items-center flex-wrap">
      <div>
        <h4 className="mb-1">Ready to move?</h4>
        <p className="mb-0">Get a free quote today.</p>
      </div>
      <Button variant="dark" className="mt-3 mt-sm-0">
        Get Started
      </Button>
    </Alert>
  </Container>
);

export default CTA;
