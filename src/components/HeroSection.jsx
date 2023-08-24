import React from "react";
import { Container } from "react-bootstrap";
import Map_img from "../assets/img/webp/map3.webp";
const HeroSection = () => {
  return (
    <>
      <section className="py-5 z_index_1">
        <Container className="custome_container position-relative">
          <div className="position-absolute dark_pink_bg_circel start-50 translate-middle-x"></div>
          <div className="text-center mt-4 pt-2">
            <h1 className="mb-0 fw-medium fs_5xl text-white">
              Redefining the Smartphone Re- <span className="d-md-block"></span>
              Commerce Industry Since 2010
            </h1>
            <p className="fw-normal fs_lg clr_lite mb-0 mt-2 pt-1">
              Serving customers across North America, South America, Europe,
              <span className="d-md-block"></span>
              Australia, and Asia
            </p>
            <div className="mt-5 pt-3">
              <img className="w-100 mt-1" src={Map_img} alt="Map_img" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
