import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { ServicesData } from "./Helper";

const Services = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5  mt-5">
        <div className="services_bg_clr py-5 mt-4">
          <Container className="custome_container py-5 mt-4 position-relative">
            <div className="text-center">
              <h2 className="fw-medium fs_4xl text-white mb-0">Services</h2>
              <p className="fw-normal clr_bad_white fs_sm mb-0 pt-2">
                We sell products, but we are a service-based company. We’ll work
                with you to provide personalized solutions{" "}
                <span className="d-md-block"></span> to meet your specific
                requirements. Find some of our most commonly requested services
                below. 
              </p>
            </div>
            <Row className="py-4">
              <Slider {...settings}>
                {ServicesData.map((data, i) => {
                  return (
                    <div key={i}>
                      <Col className="mx-3 pt-5 h-100">
                        <div className="text-center services_border py-4 py-lg-5 px-3 px-xl-4 h-100">
                          <div className="pt-xl-2 d-flex align-items-center flex-column">
                            <img
                              width="120"
                              src={data.img}
                              alt="products images"
                            />
                            <p className="">
                              <i className="fw-norml fs_lg clr_off_white">
                                {data.italictext}
                              </i>
                            </p>
                            <h5 className="fw-medium fs_2xl text-white pt-1">
                              {data.heading}
                            </h5>
                            <p className="fw-normal fs_2xl clr_off_white pt-2 pt-lg-3 mb-0">
                              {data.para}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </div>
                  );
                })}
              </Slider>
            </Row>
            <div className="cursor_pointer position-absolute  left_arrow_slider">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.4 33.0666C30.6444 32.8222 30.7667 32.5111 30.7667 32.1333C30.7667 31.7555 30.6444 31.4444 30.4 31.2L25.2 26L30.4 20.8C30.6444 20.5555 30.7667 20.2444 30.7667 19.8667C30.7667 19.4889 30.6444 19.1778 30.4 18.9333C30.1556 18.6889 29.8444 18.5667 29.4667 18.5667C29.0889 18.5667 28.7778 18.6889 28.5333 18.9333L22.4 25.0667C22.2667 25.2 22.172 25.3444 22.116 25.5C22.06 25.6555 22.0324 25.8222 22.0333 26C22.0333 26.1778 22.0613 26.3444 22.1173 26.5C22.1733 26.6555 22.2676 26.8 22.4 26.9333L28.5333 33.0666C28.7778 33.3111 29.0889 33.4333 29.4667 33.4333C29.8444 33.4333 30.1556 33.3111 30.4 33.0666Z"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="51"
                  height="51"
                  rx="25.5"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="cursor_pointer position-absolute right_arrow_slider">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="51"
                  height="51"
                  rx="25.5"
                  stroke="white"
                />
                <path
                  d="M21.6 33.0666C21.3556 32.8222 21.2333 32.5111 21.2333 32.1333C21.2333 31.7555 21.3556 31.4444 21.6 31.2L26.8 26L21.6 20.8C21.3556 20.5555 21.2333 20.2444 21.2333 19.8667C21.2333 19.4889 21.3556 19.1778 21.6 18.9333C21.8444 18.6889 22.1556 18.5667 22.5333 18.5667C22.9111 18.5667 23.2222 18.6889 23.4667 18.9333L29.6 25.0667C29.7333 25.2 29.828 25.3444 29.884 25.5C29.94 25.6555 29.9676 25.8222 29.9667 26C29.9667 26.1778 29.9387 26.3444 29.8827 26.5C29.8267 26.6555 29.7324 26.8 29.6 26.9333L23.4667 33.0666C23.2222 33.3111 22.9111 33.4333 22.5333 33.4333C22.1556 33.4333 21.8444 33.3111 21.6 33.0666Z"
                  fill="white"
                />
              </svg>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Services;
