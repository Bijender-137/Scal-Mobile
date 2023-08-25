import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mobile_processing from "../assets/img/webp/img_2.webp";

export const WhatStarted = () => {
  return (
    <>
      <section className="py-5">
        <Container className=" custome_container">
          <Row className="justify-content-between align-items-center flex-column-reverse flex-md-row">
            <Col md={6} lg={4}>
              <p className="position-relative linear_line lh_15 clr_light_gray ms-4 ms-md-0 fs_lg fw-normal max_width_327 mb-0">
                What started as a small US-based business has now evolved into
                an international industry leader, operating in North and South
                America, Asia, Europe, and Australia. Despite our worldwide
                growth, our vision remains the same; to satisfy all your
                device-sourcing needs..
              </p>
            </Col>
            <Col md={6} lg={7}>
              <div className="max_width_580 mx-auto mb-4 mb-md-0">
                <img
                  className="w-100"
                  src={mobile_processing}
                  alt="mobile_processing"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
