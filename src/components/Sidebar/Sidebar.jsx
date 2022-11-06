import React from "react";
import "./Sidebar.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Sidebar() {
  const data = [
    {
      title: "সর্বশেষ",
    },
    {
      title: "সর্বাধিক পঠিত",
    },
  ];

  return (
    <div className="Sidebar">
      <Tabs
        defaultActiveKey="সর্বশেষ"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {data &&
          data.map((item, index) => (
            <Tab key={index} eventKey={item.title} title={item.title}>
              <div className="listData d-flex align-items-center gap-3 p-3 border-bottom">
                <span>1</span>
                <p className="m-0">
                  বিরোধী দলগুলোকে দমন করতে মামলাকে অস্ত্র হিসেবে নিয়েছে আ. লীগ :
                  ফখরুল
                </p>
              </div>

              <div className="listData d-flex align-items-center gap-3 p-3 border-bottom">
                <span>1</span>
                <p className="m-0">
                  বিরোধী দলগুলোকে দমন করতে মামলাকে অস্ত্র হিসেবে নিয়েছে আ. লীগ :
                  ফখরুল
                </p>
              </div>

              <div className="listData d-flex align-items-center gap-3 p-3 border-bottom">
                <span>1</span>
                <p className="m-0">
                  বিরোধী দলগুলোকে দমন করতে মামলাকে অস্ত্র হিসেবে নিয়েছে আ. লীগ :
                  ফখরুল
                </p>
              </div>

              <div className="listData d-flex align-items-center gap-3 p-3 border-bottom">
                <span>1</span>
                <p className="m-0">
                  বিরোধী দলগুলোকে দমন করতে মামলাকে অস্ত্র হিসেবে নিয়েছে আ. লীগ :
                  ফখরুল
                </p>
              </div>

              <div className="listData d-flex align-items-center gap-3 p-3 border-bottom">
                <span>1</span>
                <p className="m-0">
                  বিরোধী দলগুলোকে দমন করতে মামলাকে অস্ত্র হিসেবে নিয়েছে আ. লীগ :
                  ফখরুল
                </p>
              </div>
            </Tab>
          ))}
      </Tabs>
    </div>
  );
}

export default Sidebar;
