import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import About_us_img from "../assets/img/webp/about_us_img.webp";
const AboutUs = () => {
  return (
    <>
      <section className="py-5" id="about">
        <Container className="custome_container">
          <div className="text-start">
            <h2 className="fw-medium fs_4xl text-white mb-0">About Us</h2>
            <p className="clr_lite fw-normal fs_sm mb-0">
              We Started With A Single Goal:
            </p>
          </div>
          <Row className=" align-items-center mt-4 pt-2">
            <Col lg={6}>
              <Accordion defaultActiveKey={["0"]}>
                < Accordion.Item eventKey="0" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg   text-white fw-normal me-2">
                      01.
                    </p>
                    <p className=" mb-0 fs_lg  text-white fw-normal max_width_442">
                      To Become The Trusted Source For All Things Smartphone In
                      The International Re-Commerce World
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      Our adventure started back in 2010 when we founded SCal
                      Mobile, a tech solutions company focused on consumer
                      electronics. It didn’t take us long to understand that the
                      US borders could not fit us, expanding our operations
                      across the globe. Today, we are proud to serve North and
                      South America as well as Europe, Asia, and Australia.
                    </p>
                    <p className=" mb-0  fs_sm  clr_lite fw-normal lh_16">
                      Following a comprehensive market approach, we seek to
                      serve clients of all sizes, including big corporations and
                      consumers. That is why our company consists of two highly
                      complementary segments; a B2B wholesale trade for
                      businesses and a B2C business for consumers that seek to
                      level up their performance with smartphones and premium
                      tech services.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal me-2">
                      02.
                    </p>
                    <p className=" mb-0 fs_lg  text-white fw-normal max_width_442">
                      Doing Things The SCal Mobile Way
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      Our adventure started back in 2010 when we founded SCal
                      Mobile, a tech solutions company focused on consumer
                      electronics. It didn’t take us long to understand that the
                      US borders could not fit us, expanding our operations
                      across the globe. Today, we are proud to serve North and
                      South America as well as Europe, Asia, and Australia.
                    </p>
                    <p className=" mb-0  fs_sm  clr_lite fw-normal lh_16">
                      Following a comprehensive market approach, we seek to
                      serve clients of all sizes, including big corporations and
                      consumers. That is why our company consists of two highly
                      complementary segments; a B2B wholesale trade for
                      businesses and a B2C business for consumers that seek to
                      level up their performance with smartphones and premium
                      tech services.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fs_lg  text-white fw-normal me-2">
                      03.
                    </p>
                    <p className=" mb-0 fs_lg  text-white fw-normal max_width_442">
                      We Stand By Our Core Values Of Integrity & Customer
                      Satisfaction
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-1  fs_sm  clr_lite fw-normal lh_16">
                      Our adventure started back in 2010 when we founded SCal
                      Mobile, a tech solutions company focused on consumer
                      electronics. It didn’t take us long to understand that the
                      US borders could not fit us, expanding our operations
                      across the globe. Today, we are proud to serve North and
                      South America as well as Europe, Asia, and Australia.
                    </p>
                    <p className=" mb-0  fs_sm  clr_lite fw-normal lh_16">
                      Following a comprehensive market approach, we seek to
                      serve clients of all sizes, including big corporations and
                      consumers. That is why our company consists of two highly
                      complementary segments; a B2B wholesale trade for
                      businesses and a B2C business for consumers that seek to
                      level up their performance with smartphones and premium
                      tech services.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col sm={8} lg={6} className="position-relative mx-auto mx-lg-0">
              <div className="about_us_img_width">
                <img
                  className="w-100 about_us_img_position"
                  src={About_us_img}
                  alt="About_us_img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
