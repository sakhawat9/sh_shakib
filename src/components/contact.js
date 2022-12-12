// import React from "react";

// const Contact = () => {
//   return (
//     <div className="contact section-padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
//             <div className="section-title-center text-center">
//               <span>Contact us</span>
//               <h2 className="display-6">Contact me anything or anytime</h2>
//               <div className="section-divider divider-traingle"></div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//             <h3>Contact us</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    // <!-- ========== Contact section start ========== -->
    <section className="section-padding contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>Contact us</span>
              <h2 className="display-6">Contact me anything or anytime</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!--  contact form area start --> */}
          <div className="col-lg-8 col-md-6 col-sm-12 mb-4 mb-md-0">
            <div className="contact-form-box">
              <form
                id="contact-form"
                method="post"
                action="https://formspree.io/f/xeqdjekd"
              >
                <div className="message col">
                  <p className="email-loading alert alert-warning">
                    <img src="assets/images/loading.gif" alt="loader" />
                    &nbsp;&nbsp;&nbsp;Sending...
                  </p>
                  <p className="email-success alert alert-success">
                    <i className="icofont-check-circled"></i> Your quote has
                    successfully been sent.
                  </p>
                  <p className="email-failed alert alert-danger">
                    <i className="icofont-close-circled"></i> Something went
                    wrong!
                  </p>
                </div>
                <div className="mb13">
                  <input
                    name="name"
                    className="contact-name"
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb13">
                  <input
                    name="email"
                    className="contact-email"
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb13">
                  <input
                    name="subject"
                    className="contact-subject"
                    id="contact-subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb30">
                  <textarea
                    name="message"
                    className="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button button__primary align-items-center"
                >
                  <span>Contact us</span>
                </button>
              </form>
            </div>
          </div>
          {/* <!--  contact form area end --> */}
          {/* <!-- contact information start --> */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0">
            <div className="contact__address">
              <ul className="contact__address__content">
                <li>
                  <span>ADDRESS:</span>
                  16, Lankaway
                  <br />
                  Florida, USA 99544
                </li>
                <li>
                  <span>PHONE:</span>
                  <a href="tel:8801849687969">8801849687969</a>
                </li>
                <li>
                  <span>EMAIL:</span>
                  <a href="mailto:sakhawathossain7969@gmail.com">
                    sakhawathossain7969@gmail.com
                  </a>
                </li>
              </ul>
              <h4>Connect our socials</h4>
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
                  <a href="https://github.com/sakhawat9">
                    <FiGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- contact information end --> */}
        </div>
      </div>
    </section>
    // <!-- ========== Contact section end ========== -->
  );
};

export default Contact;
