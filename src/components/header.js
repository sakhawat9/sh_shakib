import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="none" expand="lg">
            <a className="navbar-brand" href="/">
              <h1 className="m-0">SHAKIB</h1>
              {/* <img src={siteLogo.logo} alt={siteLogo.alt} /> */}
            </a>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <ul className="navbar-nav menu ms-lg-auto">
                <li>
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="hero"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hero
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="about-us"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
