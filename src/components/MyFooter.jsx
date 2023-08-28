import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer_logo from "../assets/img/webp/footer_logo.webp";
import { Facebook } from "./Helper";
import { FacebookIcon, InstaIcon, LinkInIcon, TwiterIcon } from "./Icons";
const MyFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <section className="footer_bg_img mt-5  pt-3">
        <Container className="custome_container py-5">
          <Row className="justify-content-between mb-1">
            <Col md={6} lg={4}>
              <div>
                <a href="#">
                  <img className="footer_logo_width" src={Footer_logo} alt="Footer_logo" />
                </a>
                <p className="fw-normal fs_sm clr_bfe_white me-md-5 pt-4 mb-0">
                  SCal Mobile is a U.S. tech solutions company that specializes
                  in consumer electronics.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="d-flex justify-content-between mt-3 mt-md-0">
                <ul className="mb-0 ps-0">
                  <li className="fw-normal fs_sm text-white">Links</li>
                  <li className="mt-2 pt-1">
                    <a href="#about" className="fw-normal footer_text fs_sm clr_bfe_white text-nowrap">
                      About Us
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a
                      href="#services"
                      className="fw-normal footer_text fs_sm clr_bfe_white"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a
                      href="#products"
                      className="fw-normal footer_text fs_sm clr_bfe_white"
                    >
                      Products
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a
                      href="#partner"
                      className="fw-normal footer_text fs_sm clr_bfe_white"
                    >
                      Partners
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a href="#faq" className="fw-normal footer_text fs_sm clr_bfe_white">
                      FAQs
                    </a>
                  </li>
                </ul>
                <ul className="m-0 ps-5 ps-md-0">
                  <li className="fw-normal fs_sm text-white">Legal</li>
                  <p className="fw-normal fs_sm clr_bfe_white max_width_footer mt-2 pt-1">
                    Vendor Code of Conduct Data Sanitization Policy Downstream
                    Recycling Policy Environmental and Social Impact QEH&S
                    Policy Universal Waste Policy
                  </p>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer_underline mt-3"></div>
        <Container className="custome_container py-3">
          <div className="py-1 d-sm-flex justify-content-between text-center text-sm-start">
            <p className="mb-0 fw-normal fs_sm clr_bfe_white">
              Copyright ©<span> {year}</span> ScalMobile
            </p>
            <div className="d-flex align-items-center justify-content-center mt-3 mt-sm-0">
              <div className="footer_app">
                <a href="https://www.facebook.com/"target="_blank">
                  <FacebookIcon />
                </a>
              </div>
              <div className="ps-3 footer_app">
                <a href="https://www.instagram.com/" target="_blank">
                  <InstaIcon />
                </a>
              </div>
              <div className="ps-3 footer_app">
                <a href="https://www.linkedin.com/" target="_blank">
                  <LinkInIcon />
                </a>
              </div>
              <div className="ps-3 footer_app">
                <a href="https://twitter.com/" target="_blank">
                  <TwiterIcon />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MyFooter;
