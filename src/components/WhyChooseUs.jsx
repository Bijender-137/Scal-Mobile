import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const WhyChooseUs = () => {
  return (
    <>
      <section className=" py-5 bg_choose">
        <Container className="custome_container">
          <h1 className="text-center  fs_2xl fw-medium text-white pt-4">
            Why Choose Us?
          </h1>

          <p className="text-center fs_sm fw-normal opacity_07 text-white">
            Here are a few good reasons that make SCal Mobile your no.1 choice:
          </p>
          <div className="mx_1080 line_before mx-auto  position-relative pt-5 mt-4">
            <Row className="justify-content-sm-between justify-content-end align-items-lg-center align-items-start position-relative road_circle translate_-20">
              <Col lg={5} sm={2} xs={11}>
                <div className="text-lg-end">
                  <h1 className="text_border fs_8xl ps-lg-0 ps-md-5 ps-sm-4 ps-4 ms-md-0 ms-2 fw_900">
                    01
                  </h1>
                </div>
              </Col>
              <Col lg={5} sm={8} xs={10} className="position-relative">
                <div>
                  <h1 className=" fs_xl fw-medium text-white mb-0">
                    We Know What We Do
                  </h1>
                  <p className=" fs_sm fw-normal opacity_07 text-white pt-3">
                    We’ve been there, done this. Actually, we have been doing
                    this for over a decade, pouring all our time, energy, and
                    resources into sourcing the best products for you and
                    providing them at the most competitive prices in the market.
                    We pay meticulous attention to our refurbishing process,
                    ensuring we deliver premium products that stand the test of
                    time and comply with our quality standards.
                  </p>
                </div>
              </Col>
            </Row>
            {/* 2 */}
            <Row className="road_circle position-relative justify-content-sm-between justify-content-end align-items-lg-center">
              <Col
                lg={5}
                sm={2}
                xs={11}
                className="pt-lg-5 mt-sm-5 mt-2 d-lg-none d-block"
              >
                <div className="">
                  <h1 className="text_border fw_900 fs_8xl  ps-lg-0 ps-md-5 ps-sm-4 ps-4 ms-md-0 ms-2">
                    02
                  </h1>
                </div>
              </Col>
              <Col lg={5} sm={8} xs={10}>
                <div className=" d-flex flex-column align-items-end">
                  <h1 className=" fs_xl fw-medium text-white mb-0 text-lg-end">
                    It’s All About What Adds Value For You
                  </h1>
                  <p className="text-lg-end  fs_sm fw-normal opacity_07 text-white">
                    We may not be the only tech solutions company in the
                    industry, but we are the leading one. Since the beginning of
                    our journey in the tech world, we have been striving to
                    establish an uncompromising level of quality, bringing value
                    with all our products and services. The biggest proof of our
                    exceptional performance is our strong base of happy clients
                    that keeps growing every day. Be it a retailer, a carrier, a
                    distributor, a repair shop, or a consumer, we work hard to
                    provide you with the most profitable tech alternatives
                    regardless of your business size and requirements.
                  </p>
                </div>
              </Col>
              <Col lg={5} className="pt-5 mt-5 d-lg-block d-none">
                <div className="">
                  <h1 className="text_border  fs_8xl  ps-lg-0 ps-4">02</h1>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-lg-between justify-content-end align-items-lg-center road_circle  position-relative">
              <Col lg={5} sm={2} xs={11}>
                <div className="text-lg-end text-start">
                  <h1 className="text_border fw_900 fs_8xl  ps-lg-0 ps-md-5 ps-sm-4 ps-4 ms-md-0 ms-2">
                    03
                  </h1>
                </div>
              </Col>
              <Col lg={5} sm={8} xs={10} className="">
                <div>
                  <h1 className=" fs_xl fw-medium text-white mb-0">
                    However Far Away, We Will Always Serve You
                  </h1>
                  <p className="  fs_sm fw-normal opacity_07 text-white pt-3">
                    Whether on a tropical island in Asia or a European
                    metropolis, we will deliver you the smartphone or service of
                    your preference with zero hassle. As an international
                    distributor, we take great pride in being able to serve
                    every business or individual from across the globe. Choose
                    from a large panel of iPhones and tech services, and our
                    team will guarantee it gets to you without stress or extra
                    worries.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
