import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
export const Faq = () => {
  return (
    <>
      <section id="faq" className=" py-5">
        <Container className=" custome_container">
          <Row className=" align-items-center">
            <Col lg={6}>
              <Accordion defaultActiveKey={["0"]}>
                <Accordion.Item eventKey="0" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal ">
                      Q1. What is SCal Mobile?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      SCal Mobile is a U.S. tech solutions company specializing
                      in the recommerce of electronics. We offer a wide range of
                      iPhones and services, all at competitive prices.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal ">
                      Q2. How long has SCal Mobile been in business?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      SCal Mobile is a U.S. tech solutions company specializing
                      in the recommerce of electronics. We offer a wide range of
                      iPhones and services, all at competitive prices.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal ">
                      Q3. Where does SCal Mobile operate?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      SCal Mobile is a U.S. tech solutions company specializing
                      in the recommerce of electronics. We offer a wide range of
                      iPhones and services, all at competitive prices.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal ">
                      Q4. What products does SCal Mobile offer?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      SCal Mobile is a U.S. tech solutions company specializing
                      in the recommerce of electronics. We offer a wide range of
                      iPhones and services, all at competitive prices.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal ">
                      Q5. How do I place an order with SCal Mobile?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      SCal Mobile is a U.S. tech solutions company specializing
                      in the recommerce of electronics. We offer a wide range of
                      iPhones and services, all at competitive prices.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className=" mb-4  ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal ">
                      Q6. Where does SCal Mobile operate?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      SCal Mobile is a U.S. tech solutions company specializing
                      in the recommerce of electronics. We offer a wide range of
                      iPhones and services, all at competitive prices.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
