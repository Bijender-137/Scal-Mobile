import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team_work from "../assets/img/webp/img_1.webp";

export const ScalMobile = () => {
  return (
    <>
      <section>
        <Container className="custome_container">
          <Row>
            <Col sm={6}>
              <img className="w-100" src={team_work} alt="team_work" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
