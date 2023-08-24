import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team_work from "../assets/img/webp/img_1.webp";

export const ScalMobile = () => {
  return (
    <>
      <section className=" py-5">
        <Container className="custome_container">
          <Row className="justify-content-between align-items-center">
            <Col md={6} lg={7}>
              <div className="max_width_580 mx-auto  mb-4 mb-md-0">
                <img className="w-100" src={team_work} alt="team_work" />
              </div>
            </Col>
            <Col md={6} lg={4}>
              <p className="position-relative linear_line lh_15 clr_light_gray ms-4 ms-md-0 fw-normal max_width_327">
                SCal Mobile marked its presence in 2010. Since then, we have
                been working tirelessly around the idea of providing customers
                with premium devices and services that change the norm in the
                smartphone re-commerce industry, moving into a new, more
                efficient era.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
