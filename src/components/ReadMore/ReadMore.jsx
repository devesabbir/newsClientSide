import React from "react";
import "./ReadMore.css";

function ReadMore({ className, style, title }) {
  return (
    <div className="ReadMoreWrapper">
      <button
        className={`${className && className} ReadMoreBtn`}
        style={style && { ...style }}
      >
        {title}
      </button>
    </div>
  );
}

export default ReadMore;
