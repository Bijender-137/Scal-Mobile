import React from "react";
import { Container } from "react-bootstrap";

export const Roadmap = () => {
  return (
    <>
      <section className="bg-white py-5">
        <Container className=" custome_container">
          <div className="timeline">
            <div className="container_tymline right">
              <div className=" ff_rubik fw-bolder fs_8xl text_border date ">
                01{" "}
              </div>
              <i className="icon fa fa-home"></i>
              <div className="content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                  erat sagittis non. Ut blandit semper pretium.
                </p>
              </div>
            </div>
            <div className="container_tymline left">
              <div className=" ff_rubik fw-bolder fs_8xl text_border date ">
                02{" "}
              </div>
              <i className="icon fa fa-user"></i>
              <div className="content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                  erat sagittis non. Ut blandit semper pretium.
                </p>
              </div>
            </div>
            <div className="container_tymline right">
              <div className="date">18 May</div>
              <i className="icon fa fa-running"></i>
              <div className="content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                  erat sagittis non. Ut blandit semper pretium.
                </p>
              </div>
            </div>
            <div className="container_tymline left">
              <div className="date">10 Feb</div>
              <i className="icon fa fa-cog"></i>
              <div className="content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                  erat sagittis non. Ut blandit semper pretium.
                </p>
              </div>
            </div>
            <div className="container_tymline right">
              <div className="date">01 Jan</div>
              <i className="icon fa fa-certificate"></i>
              <div className="content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
                  erat sagittis non. Ut blandit semper pretium.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
