import React from "react";
import { Container } from "react-bootstrap";
import Nav_logo from "../assets/img/webp/logo.webp";
const MyNave = () => {
  return (
    <>
      <section>
        <nav className="py-2">
          <Container className="custome_container">
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img width={72} src={Nav_logo} alt="Nav_logo" />
              </a>
              <ul className="m-0 p-0 d-flex align-items-center gap-4">
                <li><a href="#" className="fw-normal fs_sm clr_lite">Home</a></li>
                <li><a href="#" className="fw-normal fs_sm clr_lite">About Us</a></li>
                <li><a href="#" className="fw-normal fs_sm clr_lite">Why Choose Us</a></li>
              </ul>
              <div>
                <button className="nav_btn fw-normal fs_sm text-white border-0">Contact Us</button>
              </div>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default MyNave;
