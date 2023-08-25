import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductsData } from "./Helper";
import Slider from "react-slick";
const Products = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
      <section className="py-5">
        <Container className="custome_container">
          <div>
            <h2 className="text-center fs_4xl text-white">Products</h2>
            <Row className="pt-4">
              <Slider {...settings}>
                {ProductsData.map((obj, i) => {
                  return (
                    <div key={i}>
                      <Col className="mx-3 pt-5 h-100">
                        <div className="text-center products_border py-4 py-lg-5 px-3 px-xl-4 h-100">
                          <div className="pt-xl-4 d-flex align-items-center flex-column">
                            <img
                              width="120"
                              src={obj.img}
                              alt="products images"
                            />
                            <p className="pt-2 pt-lg-4">
                              <i className="fw-norml fs_lg clr_lite_blue">
                                {obj.italictext}
                              </i>
                            </p>
                            <h5 className="fw-medium fs_2xl text-white pt-1">
                              {obj.heading}
                            </h5>
                            <p className="fw-normal fs_2xl clr_lite pt-2 pt-lg-3 mb-0">
                              {obj.para}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </div>
                  );
                })}
              </Slider>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
