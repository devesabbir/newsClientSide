import React from "react";
import { Row, Col } from "react-bootstrap";

import "./SportsGrid.css";

let sportImg =
  "https://backoffice.channel24bd.tv/media/imgAll/2022November/SM/untitled-1-1667321911.jpg";

function SportsGrid() {
  return (
    <div className="sports-wrapper my-3">
      <Row>
        <Col lg={4}>
          <div className="thumb">
            <img className="w-100" src={sportImg} alt="" />
          </div>
        </Col>

        <Col lg={8}>
          <div className="desc">
            <div className="title">
              <a href={"/"}>
                <h5>
                  সেমির লড়াইয়ে টিকে থাকতে ভারতের বিপক্ষে অঘটন চায় বাংলাদেশ{" "}
                </h5>
              </a>
              <p>
                সেমিফাইনালে আশা বাঁচিয়ে রাখতে শক্তিশালী ভারতকে হারানোর লক্ষ্য
                নিয়েই বুধবার (২ নভেম্বর) মাঠে নামবে বাংলাদেশ ক্রিকেট দল।
                টি-টোয়েন্টি বিশ্বকাপে সুপার টুয়েলভে নিজেদের চতুর্থ ম্যাচে
                অ্যাডিলেড ওভালে ভারতের বিপক্ষে এ নিজেদের সেরাটা দিতে প্রস্তুত
                টাইগাররা।{" "}
              </p>
            </div>
            <div className="fotr">
              <span>
                <i className="fa-regular fa-clock"></i> মঙ্গলবার, ১ নভেম্বর
                ২০২২, ২২:৫৮
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SportsGrid;
