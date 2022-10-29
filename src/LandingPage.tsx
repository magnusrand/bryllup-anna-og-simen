import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Carousel from "react-bootstrap/Carousel";

export const LandigPage = () => {
  return (
    <div>
      <Container fluid>
        <Row justify="center">
          <Col xs={12} style={{ position: "relative" }}>
            <h1 className="landing-page__main-heading">
              Vælkommen te bryllup!
            </h1>
            <Carousel>
              <Carousel.Item>
                <div
                  className="landing-page__image-in-carousel"
                  aria-label="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={6}>Ja, nu skjer det snart – bryllup assa!</Col>
        </Row>
      </Container>
    </div>
  );
};
