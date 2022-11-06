import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsThumb from "../../assets/images/image-422724-1621520229-1667240937.jpg";
import "./NewsGrid.css";

function NewsGrid() {
  return (
    <div className="border-inner-bottom">
      <Link to={"/:id"}>
        <div className="leadNews">
          <Card className="border-0" style={{ width: "100%" }}>
            <Card.Img variant="top" src={NewsThumb} />
            <Card.Title className="p-2">
              <Link to={"/:id"}>
                {" "}
                <h5>
                  ভিনদেশি সস্তা ওয়েবসাইটের লেখা পাত্তা না দেয়ার আহ্বান মাশরাফির
                </h5>
              </Link>
            </Card.Title>

            <Card.Body className="p-2">
              <p>
                ভিনদেশি সস্তা ওয়েবসাইটের লেখা পাত্তা না দেয়ার আহ্বান মাশরাফির
                ভিনদেশি সস্তা ওয়েবসাইটের লেখা পাত্তা না দেয়ার আহ্বান মাশরাফির
                ভিনদেশি সস্তা ওয়েবসাইটের লেখা পাত্তা না দেয়ার আহ্বান মাশরাফির
              </p>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </div>
  );
}

export default NewsGrid;
