import React from "react";

const Projects = () => {
  return (
    <div className="projects section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>Projects</span>
              <h2 className="display-6">Some of my projects</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
            <div className="projects__item">
              <img
                className="img-fluid"
                src="assets/images/cheesy_01.png"
                alt="cheesy kitchen"
              />
              <div className="projects__item__content">
                <h3>cheesy kitchen</h3>
                <p>
                  Cheesy Kitchen is a full-stack single-page web application
                  where users can order foods.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
            <div className="projects__item">
              <img
                className="img-fluid"
                src="assets/images/acadmist_01.png"
                alt="cheesy kitchen"
              />
              <div className="projects__item__content">
                <h3>Academist</h3>
                <p>
                  Academist is a learning management website like Udemy where
                  instructors can post their course and a student can enroll in
                  it.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
            <div className="projects__item">
              <img
                className="img-fluid"
                src="assets/images/watch_shop_01.png"
                alt="cheesy kitchen"
              />
              <div className="projects__item__content">
                <h3>Watch_shop</h3>
                <p>
                  Watch_Shop is an e-commerce website where users can see
                  watches on the basis of category, can add watches to cart and
                  watchlist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
