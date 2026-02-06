import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Sub-component for the individual Card
const FeatureCard = ({ icon, title, desc }) => (
  <Col md={4}>
    <Card className="h-100 border-0 shadow-sm text-center p-4">
      <Card.Body>
        <div className="display-5 mb-3">{icon}</div>
        <Card.Title className="fw-bold mb-3">{title}</Card.Title>
        <Card.Text className="text-muted small">{desc}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const FeaturesGrid = () => (
  <section id="features" className="py-5 bg-light">
    <Container className="py-5">
      <Row className="g-4">
        <FeatureCard 
          icon="⚡" 
          title="Fast Performance" 
          desc="Optimized React components that render only when needed." 
        />
        <FeatureCard 
          icon="🛡️" 
          title="Secure by Design" 
          desc="Built with industry standards to keep your data safe and sound." 
        />
        <FeatureCard 
          icon="🎨" 
          title="Easy Styling" 
          desc="Change the look and feel using Bootstrap's powerful theme system." 
        />
      </Row>
    </Container>
  </section>
);

export default FeaturesGrid;