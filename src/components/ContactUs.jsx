import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact_img from "../assets/img/webp/contact_img.webp";
const ContactUs = () => {
  const [myData, setData] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  const Changing = (p) => {
    const Name = p.target.name;
    const LastName = p.target.LastName;
    const Company = p.target.Company;
    const Number = p.target.Number;
    const value = p.target.value;
    // const {Name, value } = p.target;
    setData({ ...myData, [Name]: value });
  };
  const Formsubmit = (x) => {
    x.preventDefault();
    setData({
      Name: "",
      LastName: "",
      Email: "",
      Company: "",
      Number: "",
      Password: "",
    });
    // console.log(myData);
  };
  const [show, setShow] = useState(false);
  const toggleField = () => {
    setShow(!show);
  };
  return (
    <>
      <section className="py-5">
        <Container className="custome_container">
          <div className="text-center mb-2">
            <h2 className="fw-medium fs_4xl text-white mb-0">Contact Us</h2>
            <p className="fw-normal fs_lg text_linier_contact pt-2 mb-0 fst-italic">
              Join Our Family Of Partners
            </p>
            <p className="fw-normal fs_sm clr_lite pt-3 mb-0">
              Want to access unique products at unbeatable prices? Be one of the
              first to get their hands on the market’s ultimate{" "}
              <span className="d-lg-block"></span> smartphones?
            </p>
            <p className="fw-normal fs_sm clr_lite pt-1 mb-0">
              If you have already nodded positively, this is your sign to
              partner with us and enter our ever-growing community of loyal{" "}
              <span className="d-lg-block"></span> members!
            </p>
            <p className="fw-normal fs_sm clr_lite pt-1 mb-0">
              Being a SCal Mobile partner means you get solutions tailored to
              your business needs and access our daily and weekly{" "}
              <span className="d-lg-block"></span> inventory lists with numerous
              smartphone opportunities at the most competitive prices. We
              constantly update our <span className="d-lg-block"></span>{" "}
              catalogs to help you unlock the best deals in the secondary
              smartphone industry!
            </p>
          </div>
          <Row className="mt-5 pt-4 align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <div className="mt-4 mt-lg-0">
                <form
                  className="d-flex flex-column w-100"
                  onSubmit={hasFormSubmit}
                >
                  <div className="d-sm-flex align-items-center gap-4 w-100">
                    <div className="w_50 w_100">
                      <label htmlFor="#" className="w-100">
                        <p className="fw-normal fs_sm clr_lite mb-0">
                          First Name*
                        </p>
                        <input
                          className="input_bg py-3 clr_lite w-100 px-2 mt-2"
                          required
                          type="text"
                          placeholder=""
                          name="Name"
                          onChange={Changing}
                          value={myData.Name}
                        />
                      </label>
                    </div>
                    <div className="w_50 mt-3 mt-sm-0 w_100">
                      <label htmlFor="#" className="w-100">
                        <p className="fw-normal fs_sm clr_lite mb-0">
                          Last Name*
                        </p>
                        <input
                          className="input_bg py-3 clr_lite w-100 px-2 mt-2"
                          required
                          type="text"
                          placeholder=""
                          name="LastName"
                          onChange={Changing}
                          value={myData.LastName}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="d-sm-flex align-items-center gap-4 w-100 mt-3">
                    <div className="w_50 w_100">
                      <label htmlFor="#" className="w-100">
                        <p className="fw-normal fs_sm clr_lite mb-0">
                          Company Name*
                        </p>
                        <input
                          className="input_bg py-3 clr_lite w-100 px-2 mt-2"
                          required
                          type="text"
                          placeholder=""
                          name="Company"
                          onChange={Changing}
                          value={myData.Company}
                        />
                      </label>
                    </div>
                    <div className="w_50 mt-3 mt-sm-0 w_100">
                      <label htmlFor="#" className="w-100">
                        <p className="fw-normal fs_sm clr_lite mb-0">
                          Phone Number*
                        </p>
                        <input
                          className="input_bg py-3 clr_lite w-100 px-2 mt-2"
                          required
                          type="number"
                          placeholder=""
                          name="Number"
                          onChange={Changing}
                          value={myData.Number}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="d-sm-flex align-items-center gap-4 w-100 mt-3">
                    <div className="w_50 w_100">
                      <label htmlFor="#" className="w-100">
                        <p className="fw-normal fs_sm clr_lite mb-0">Email*</p>
                        <input
                          className="input_bg py-3 clr_lite w-100 px-2 mt-2"
                          required
                          type="email"
                          placeholder=""
                          name="Email"
                          onChange={Changing}
                          value={myData.Email}
                        />
                      </label>
                    </div>
                    <div className="w_50 mt-3 mt-sm-0 w_100">
                      <label htmlFor="#" className="w-100">
                        <p className="fw-normal fs_sm clr_lite mb-0">
                          Company Type*
                        </p>
                        <label for="cars"></label>
                        <select
                          id="cars"
                          className="input_bg py-3 clr_lite w-100 px-2 mt-2"
                        >
                          <option value="volvo">B2B</option>
                          <option value="saab">A3S</option>
                          <option value="opel">OK5</option>
                          <option value="audi">U7S</option>
                        </select>
                        {myData.Number}
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="w-100 ">
                      <label htmlFor="#" className="w-100">
                        <label for="cars"></label>
                        <p className="fw-normal fs_sm clr_lite mb-0">Buyers</p>
                        <select
                          id="cars"
                          className="input_bg py-3 clr_lite w-100 px-2 mt-2"
                        >
                          <option value="volvo"></option>
                          <option value="saab">A3S</option>
                          <option value="opel">OK5</option>
                          <option value="audi">U7S</option>
                        </select>
                        {myData.Number}
                      </label>
                    </div>
                  </div>
                  <div className="w-100 mt-3">
                    <p className="fw-normal fs_sm clr_lite mb-0">Message</p>
                    <textarea className="fw-normal fs_sm clr_lite input_bg w-100 textarea_h px-2 mt-2"></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      className="border-0 btn_send_now fw-normal fs_sm text-white"
                      type="submit"
                    >
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col sm={8} lg={6} className="position-relative mx-auto mx-lg-0">
              <div className="contact_img_w">
                <img className="w-100 contact_img_position" src={Contact_img} alt="Contact_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
