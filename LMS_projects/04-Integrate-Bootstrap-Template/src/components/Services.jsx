import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";

const Features = () => (
  <Container className="py-5">
    <Row className="align-items-center g-4">
      <Col md={6}>
        <h2 className="fw-bold mb-3">Why Choose Us</h2>
        <ListGroup variant="flush">
          <ListGroup.Item>Experienced staff</ListGroup.Item>
          <ListGroup.Item>On-time delivery</ListGroup.Item>
          <ListGroup.Item>Secure handling</ListGroup.Item>
          <ListGroup.Item>Transparent pricing</ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={6}>
        <Card className="shadow-sm text-center">
          <Card.Body>
            <Card.Title>Trusted by 10,000+ Customers</Card.Title>
            <Card.Text className="text-muted">
              Rated highly for professionalism and care.
            </Card.Text>
            <Button>Read Reviews</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Features;
