// Externall Import 
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";



//  Internall Import
import ReadMore from "../../../components/ReadMore/ReadMore";
import Sidebar from "../../../components/Sidebar/Sidebar";
import SportsGrid from "../../../components/SportsGrid/SportsGrid";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Layout from "../../../components/Layout/Layout";
import NewsRequest from "../../../APIRequest/NewsRequest";

function CategoryPage() {
  const { NewsLists } = useSelector((state) => state.News);

  console.log(NewsLists);

  useEffect(() => {
    NewsRequest.NewsList();
  }, []);

  return (
    <Layout>
      <main>
        <Container>
          <SectionTitle title={"খেলা"} />
          <Row>
            <Col lg={9}>
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <div className="read d-flex justify-center my-5">
                <ReadMore
                  className={"hoverBtn"}
                  style={{ width: "500px" }}
                  title={"আরো পড়ুন"}
                />
              </div>
            </Col>
            <Col lg={3}>
              <div className="Sidebar">
                <Sidebar />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default CategoryPage;
