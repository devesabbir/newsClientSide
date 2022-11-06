import React from "react";
import { Link } from "react-router-dom";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-icon">
      <ul>
        <li className="fab">
          <Link to={"/"}>
            {" "}
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </li>
        <li className="lnd">
          <Link to={"/"}>
            {" "}
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </li>
        <li className="twit">
          <Link to={"/"}>
            {" "}
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </li>
        <li className="env">
          <Link to={"/"}>
            {" "}
            <i className="fa-light fa-envelope"></i>
          </Link>
        </li>
        <li className="what">
          <Link to={"/"}>
            {" "}
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
