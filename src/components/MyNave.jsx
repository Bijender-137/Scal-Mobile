import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Nav_logo from "../assets/img/webp/logo.webp";
const MyNave = () => {
  const [Show, setshow] = useState(true);
  if (Show) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <section className=" z_index_1">
        <nav>
          <Container className="custome_container py-2">
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img width={72} src={Nav_logo} alt="Nav_logo" />
              </a>
              <ul
                className={
                  Show === false
                    ? "m-0 p-0 d-flex align-items-center gap-4 nav-menu active"
                    : "m-0 p-0 d-flex align-items-center gap-4 nav-menu "
                }
              >
                <li>
                  <a href="#" className="fw-normal fs_sm clr_lite">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="fw-normal fs_sm clr_lite">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="fw-normal fs_sm clr_lite">
                    Why Choose Us
                  </a>
                </li>
              </ul>
              <div>
                <button className="nav_btn fw-normal fs_sm text-white border-0">
                  Contact Us
                </button>
              </div>
              <div onClick={() => setshow(!Show)} className="cursor_pointer hamburger d-sm-none">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </Container>
          <div className="border_bottom_nav"></div>
        </nav>
      </section>
    </>
  );
};

export default MyNave;
