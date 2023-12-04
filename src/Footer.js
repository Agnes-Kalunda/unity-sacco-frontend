import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
 
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/logg.png";

function Footer() {
  return (
    <footer className="bg-green text-white pt-5 pb-4">
      <div className="container">
        {/* First Row */}

        <div className="row justify-content-center">
          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>ABOUT US</strong>
            </h6>
            <p className="hover-black">
              <small>Our vision and Mission</small>
            </p>
            <p className="hover-black">
              <small>Unity Sacco Heritage</small>
            </p>
            <p className="hover-black">
              <small>Unity Sacco Leadership</small>
            </p>
          </div>

          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>SERVICES</strong>
            </h6>
            <p className="hover-black">
              <small>Savings Schemes</small>
            </p>
            <p className="hover-black">
              <small>Loans Offered</small>
            </p>
            <p className="hover-black">
              <small>Shares</small>
            </p>
            <p className="hover-black">
              <small>Loan Products</small>
            </p>
          </div>

          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>SAVINGS</strong>
            </h6>
            <p className="hover-black">
              <small>Bosa shares</small>
            </p>
            <p className="hover-black">
              <small>Handshake Deposits</small>
            </p>
            <p className="hover-black">
              <small>Jikakamue savings</small>
            </p>
          </div>

          <div className="col-md-2 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>LOANS</strong>
            </h6>
            <p className="hover-black">
              <small>Utu Bora Lending</small>
            </p>
            <p className="hover-black">
              <small>Education Loans</small>
            </p>
            <p className="hover-black">
              <small>Mobile Loans</small>
            </p>
            <p className="hover-black">
              <small>Karibu Loans</small>
            </p>
          </div>

          <div className="col-md-3 mt-3">
            <h6
              className="text-uppercase mb-4 font-weight-bold"
              style={{ color: "white" }}
            >
              <strong>OUR OFFICES</strong>
            </h6>
            <p className="">
              <small>
                <i className="fas fa-map-marker mr-3"></i> Nairobi, Kenya
              </small>
            </p>
            <p className="">
              <small>
                <i className="fas fa-envelope mr-3"></i> Unitysacco@gmail.com
              </small>
            </p>
            <p className="">
              <small>
                <i className="fas fa-phone mr-3"></i> +254 000 0000
              </small>
            </p>
          </div>
        </div>

        {/* #second row */}
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 d-flex justify-content-center">
            <ul className="list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li> */}
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-lg text-white">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Third Row */}
        <div className="row">
          <div className="">
            <p>Copyright @2023. All rights reserved by Unity Sacco.</p>
          </div>

          <div className="col-md-5 col-lg-4">
            {/* Additional content for the right side if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
