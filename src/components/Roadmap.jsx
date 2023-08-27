import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RoadMap = () => {
  return (
    <>
      <section className=" py-5 bg_choose">
        <Container className="custome_container">
          <div className="text-center mb-4">
            <h1 className="text-center  fs_2xl fw-medium text-white pt-4">
              Why Choose Us?
            </h1>
            <p className="text-center fs_sm fw-normal opacity_07 text-white">
              Here are a few good reasons that make SCal Mobile your no.1
              choice:
            </p>
          </div>
          <div className="position-relative mt-5 roadmap_line">
            <Row className="justify-content-md-between align-items-end align-items-sm-start flex-sm-row flex-column justify-content-end position-relative roadmap_circel tranformY_20">
              <Col
                md={5}
                sm={3}
                xs={10}
                className=" justify-content-md-end justify-content-start"
              >
                <p className="fw_900 fs_8xl counting_text text-start text-md-end opacity_03">
                  01
                </p>
              </Col>
              <Col
                md={5}
                sm={8}
                xs={10}
                className="d-flex flex-column justify-content-sm-start justify-content-end"
              >
                <p className="text-start text-white text-white">We Know What We Do</p>
                <p className="fw-normal mb-0 text-start text-white opcity_07">
                  We’ve been there, done this. Actually, we have been doing this
                  for over a decade, pouring all our time, energy, and resources
                  into sourcing the best products for you and providing them at
                  the most competitive prices in the market. We pay meticulous
                  attention to our refurbishing process, ensuring we deliver
                  premium products that stand the test of time and comply with
                  our quality standards.
                </p>
              </Col>
            </Row>
            {/* 2 */}
            <Row className="justify-content-md-between align-items-end align-items-sm-start justify-content-end position-relative roadmap_circel tranformY_20  mt-lg-2 mt-0 flex-sm-row flex-column">
              <Col
                md={5}
                sm={3}
                xs={10}
                className=" d-flex d-md-none justify-content-sm-start justify-content-start"
              >
                <p className="fw_900 fs_8xl counting_text text-start opacity_03">02</p>
              </Col>
              <Col md={5} sm={8} xs={10}>
                <p className="text-md-end text-start text-white">
                  It’s All About What Adds Value
                  <span className="d-lg-block">For You</span>
                </p>
                <p className="text-md-end text-start text-white opcity_07 lh_16">
                  We may not be the only tech solutions company in the industry,
                  but we are the leading one. Since the beginning of our journey
                  in the tech world, we have been striving to establish an
                  uncompromising level of quality, bringing value with all our
                  products and services. The biggest proof of our exceptional
                  performance is our strong base of happy clients that keeps
                  growing every day. Be it a retailer, a carrier, a distributor,
                  a repair shop, or a consumer, we work hard to provide you with
                  the most profitable tech alternatives regardless of your
                  business size and requirements.
                </p>
              </Col>
              <Col xs={5} className="d-md-flex d-none justify-content-start">
                <p className="fw_900 fs_8xl counting_text text-start opacity_03">02</p>
              </Col>
            </Row>
            {/* 3 */}
            <Row className="justify-content-md-between align-items-end align-items-sm-start flex-sm-row flex-column justify-content-end position-relative roadmap_circel tranformY_20">
              <Col
                md={5}
                sm={3}
                xs={10}
                className=" justify-content-md-end justify-content-start"
              >
                <p className="fw_900 fs_8xl counting_text text-start text-md-end line_h_120 opacity_03">
                  03
                </p>
              </Col>
              <Col
                md={5}
                sm={8}
                xs={10}
                className="d-flex flex-column justify-content-sm-start justify-content-end"
              >
                <p className="text-start text-white line_h_120">
                  However Far Away, We Will Always Serve You
                </p>
                <p className="fw-normal mb-0 text-start text-white opcity_07 lh_16">
                  Whether on a tropical island in Asia or a European metropolis,
                  we will deliver you the smartphone or service of your
                  preference with zero hassle. As an international distributor,
                  we take great pride in being able to serve every business or
                  individual from across the globe. Choose from a large panel of
                  iPhones and tech services, and our team will guarantee it gets
                  to you without stress or extra worries. 
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default RoadMap;
