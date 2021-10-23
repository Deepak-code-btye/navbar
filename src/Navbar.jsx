import React from "react";
import "./App.css";
const Navbar = () => {
  return (
    <>
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h2>Awsesome Loading Page</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                obcaecati eaque labore debitis laborum! Saepe neque eum tenetur,
                voluptatum enim perferendis eligendi id suscipit magni
                voluptates sequi, nihil impedit quod?
              </p>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
