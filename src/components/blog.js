import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="section-padding blog">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                Our Blog
              </span>
              <h2
                className="display-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Latest Blogs
              </h2>
              <div
                className="section-divider divider-traingle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              ></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <article className="blog__single-post h-100 translateEffect1">
              <div className="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    className="img-fluid"
                    src="assets/images/blog1.jpg"
                    alt="Blog 01"
                  />
                </a>
              </div>
              <div className="blog__single-post__body">
                <div className="blog__single-post__content">
                  <h2 className="fs-4">
                    <a href="single-blog.html">
                      Book News: Egypt Bans Ridley Scott’s ‘Exodus’ For
                      ‘Historical
                    </a>
                  </h2>
                  <p className="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="blog__single-post__meta">
                  <div>
                    <i className="icofont-clock-time"></i> 3 June, 2021
                  </div>
                  <ul>
                    <li>
                      <i className="icofont-speech-comments"></i>
                    </li>
                    <li>
                      <i className="icofont-share"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <article className="blog__single-post h-100 translateEffect1">
              <div className="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    className="img-fluid"
                    src="assets/images/blog2.png"
                    alt="Blog 02"
                  />
                </a>
              </div>
              <div className="blog__single-post__body">
                <div className="blog__single-post__content">
                  <h2 className="fs-4">
                    <a href="single-blog.html">
                      Wyden, Eshoo question “big five” publishers over
                    </a>
                  </h2>
                  <p className="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="blog__single-post__meta">
                  <div>
                    <i className="icofont-clock-time"></i> 3 June, 2021
                  </div>
                  <ul>
                    <li>
                      <i className="icofont-speech-comments"></i>
                    </li>
                    <li>
                      <i className="icofont-share"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <article className="blog__single-post h-100 translateEffect1">
              <div className="blog__single-post__image">
                <a href="single-blog.html">
                  <img
                    className="img-fluid"
                    src="assets/images/blog3.png"
                    alt="Blog 03"
                  />
                </a>
              </div>
              <div className="blog__single-post__body">
                <div className="blog__single-post__content">
                  <h2 className="fs-4">
                    <a href="single-blog.html">
                      There is a method to this book-buying madness
                    </a>
                  </h2>
                  <p className="m-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="blog__single-post__meta">
                  <div>
                    <i className="icofont-clock-time"></i> 3 June, 2021
                  </div>
                  <ul>
                    <li>
                      <i className="icofont-speech-comments"></i>
                    </li>
                    <li>
                      <i className="icofont-share"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
