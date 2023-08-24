import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import retailers from "../assets/img/webp/img_3.webp";

export const Retailers = () => {
  return (
    <>
      <section className=" py-5">
        <Container className="custome_container">
          <Row className="justify-content-between align-items-center">
            <Col md={6} lg={7}>
              <div className="max_width_580 mx-auto mb-4 mb-md-0">
                <img className="w-100" src={retailers} alt="retailers" />
              </div>
            </Col>
            <Col md={6} lg={4}>
              <p className="position-relative linear_line lh_15 clr_light_gray ms-4 ms-md-0 fw-normal max_width_327">
                From retailers, carriers, distributors, and repair shops to
                individual consumers, we cater to diverse needs, following a
                client-centric approach that puts your specific requirements in
                the spotlight.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
