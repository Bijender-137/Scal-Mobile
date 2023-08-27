import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer_logo from "../assets/img/webp/footer_logo.webp";
const MyFooter = () => {
  return (
    <>
      <section className="py-5 footer_bg_img mt-5">
        <Container className="custome_container pt-3">
          <Row className="justify-content-between">
            <Col md={4}>
              <div>
                <a href="#">
                  <img width={111} src={Footer_logo} alt="Footer_logo" />
                </a>
                <p className="fw-normal fs_sm clr_bfe_white me-md-5 pt-4 mb-0">
                  SCal Mobile is a U.S. tech solutions company that specializes
                  in consumer electronics.
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div>
                <ul className="mb-0">
                  <li className="fw-normal fs_sm text-white">Links</li>
                  <li className="mt-2 pt-1">
                    <a href="#about" className="fw-normal fs_sm clr_bfe_white">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MyFooter;
