//  External Import
import React from "react";
import { Col, Row } from "react-bootstrap";


// Internal Import
import "./LeadNewsList.css";



function LeadNewsList({thumb, title}) {


  return (
    <div className="LeadNewsListGrid bg-light">
    
          <div className="newsImg">
            <figure>
              <picture>
                <img src={thumb} alt="" />
              </picture>
            </figure>
          </div>
 
          <div className="desc">
            <h3>
              {title}
            </h3>
          </div>
    </div>
  );
}

export default LeadNewsList;
