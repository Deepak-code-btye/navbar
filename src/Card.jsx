import React from "react";
import h1 from "./image/hack.jpg";
import "./Card.css";

const Card = () => {
  return (
    <>
      <section className="team">
        <div className="container my-3 py5 text-center">
          <div className="row mb-5">
            <div classNam="col">
              <h1>MEET OUR TEAM</h1>
              <p className="mt-3 mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              </p>
              <div className="row gy-3">
                <div className="col-lg-3 col-md-3 col-10 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={h1}
                        className="card-img-top img-fluid rounded-circle w-50 mb-3"
                        alt="..."
                      />
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex flex-row justify-content-center">
                        <div className="p-3">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <i className="bi bi-facebook"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-instagram"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-twitter"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-10 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={h1}
                        className="card-img-top img-fluid rounded-circle w-50 mb-3"
                        alt="..."
                      />
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex flex-row justify-content-center">
                        <div className="p-3">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <i className="bi bi-facebook"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-instagram"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-twitter"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-10 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={h1}
                        className="card-img-top img-fluid rounded-circle w-50 mb-3"
                        alt="..."
                      />
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex flex-row justify-content-center">
                        <div className="p-3">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <i className="bi bi-facebook"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-instagram"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-twitter"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-10 mx-auto">
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={h1}
                        className="card-img-top img-fluid rounded-circle w-50 mb-3"
                        alt="..."
                      />
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="d-flex flex-row justify-content-center">
                        <div className="p-3">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <i className="bi bi-facebook"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-instagram"></i>
                            </li>
                            <li className="list-inline-item">
                              <i class="bi bi-twitter"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
