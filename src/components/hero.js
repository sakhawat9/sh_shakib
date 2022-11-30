import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Hero = ({ isBg }) => {
  return (
    <section
      id="hero"
      className="hero hero__padding overflow-hidden position-relative"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="hero__content position-relative">
              <h1 className="display-4 mb-2 text-capitalize">
                Sakhawat Hossain.
              </h1>
              <div className="badge-text fs-5 mb-4">
                I'am a{" "}
                <Typed
                  strings={[
                    " Full-stack Web Developer",
                    " Web Developer",
                    " Front end developer",
                  ]}
                  typeSpeed={100}
                  backSpeed={60}
                  startDelay={0}
                  backDelay={2000}
                  cursorChar="|"
                  contentType="html"
                  loop
                ></Typed>
              </div>
              <p className="mb-5 fs-5">
                An aspiring MERN Stack Developer with huge knowledge and
                proficiency in JavaScript and ReactJS as well as strong skills
                in writing clean and efficient codes.
              </p>
              <Link to="about-us" className="button button__primary me-3">
                <span>About us</span>
              </Link>
              <a href="https://drive.google.com/uc?export=download&id=1BzpVoR3OadSYNQVzQEF8bMCx-N44GBnI" className="btn__primary me-3">
                <span>Resume</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero__author text-center">
              <div className="hero__author--inner">
                <div className="hero__author--inner--wrapper">
                  <img
                    width="500"
                    className="img-fluid"
                    src="assets/images/shakib.jpg"
                    alt="shakib"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
