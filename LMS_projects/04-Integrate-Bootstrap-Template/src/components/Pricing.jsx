import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Pricing = () => (
  <Container className="py-5">
    <h2 className="text-center fw-bold mb-4">Pricing</h2>

    <Row className="g-4 text-center">
      {[
        ["Basic", "₹999", "outline-primary"],
        ["Standard", "₹1999", "primary"],
        ["Premium", "₹2999", "outline-primary"]
      ].map(([name, price, variant], i) => (
        <Col md={4} key={i}>
          <Card className="h-100 shadow-sm">
            <Card.Header><h4>{name}</h4></Card.Header>
            <Card.Body>
              <h1>{price}</h1>
              <Button variant={variant} className="w-100">Choose</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Pricing;
