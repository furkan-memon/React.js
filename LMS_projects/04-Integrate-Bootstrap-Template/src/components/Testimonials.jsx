import { Container, Carousel } from "react-bootstrap";

const Testimonials = () => (
  <Container className="py-5 text-center">
    <h2 className="fw-bold mb-4">Testimonials</h2>

    <Carousel>
      <Carousel.Item>
        <p className="lead">“Smooth, fast, and reliable.”</p>
        <strong>Rahul</strong>
      </Carousel.Item>
      <Carousel.Item>
        <p className="lead">“Professional team and great support.”</p>
        <strong>Ayesha</strong>
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default Testimonials;
