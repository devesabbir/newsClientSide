import React from "react";
import "./SectionTitle.css";
import Icon from "../../assets/images/favicon.ico";

function SectionTitle({ title, linkText }) {
  return (
    <div className="SPSecTitle ">
      <a href={`/${linkText ? linkText : ""}`}>
        <h2 className="d-flex align-items-center gap-2">
          <img
            loading="lazy"
            src={Icon}
            alt=""
            width="18"
            height="18"
            className="SPSecTitleIcon"
          />
          {title}
        </h2>
      </a>
    </div>
  );
}

export default SectionTitle;
