import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>ABOUT ME</span>
              <h2 className="display-6">Some core information's about me</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div
            className="col-lg-6 mb-3 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-sm-12">
                <div className="about-us__image">
                  <img
                    className="img-fluid"
                    src="assets/images/about.jpg"
                    alt="About us"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us__content">
              <h3 className="display-6">Hello, I'm Sakhawat Hossain</h3>
              <p className="about-us__content__text">
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational
                Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>
              <h3>My Skills</h3>
              <div className="skills">
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>Typescript</span>
                <span>React Router</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Tailwind CSS</span>
                <span>Bootstrap</span>
                <span>React Bootstrap</span>
                <span>Stripe.js</span>
                <span>Material-ui</span>
                <span>FontAwesome</span>
                <span>React Icon</span>
                <span>Firebase</span>
                <span>vercel</span>
                <span>Netlify</span>
                <span>Heroku</span>
              </div>
              <h3 className="mt-4">Social Media Contact</h3>
              <ul className="social-icon mt-3">
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="tel:01849687969">
                    <BsWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shjsdev/">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Sakhawa23623504">
                    <FiGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
