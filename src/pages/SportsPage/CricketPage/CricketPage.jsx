//  External Import
import React, { Suspense,lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";

//  Internall Import
import Layout from "../../../components/Layout/Layout";
import LazyLoader from "../../../components/LazyLoader/LazyLoader";
import "./Cricket.css";

const ReadMore = lazy(() => import("../../../components/ReadMore/ReadMore"));
const Sidebar = lazy(() => import("../../../components/Sidebar/Sidebar"));
const SportsGrid = lazy(() => import("../../../components/SportsGrid/SportsGrid"));
const SectionTitle = lazy(() => import("../../../components/SectionTitle/SectionTitle"));



function CricketPage() {
  return (
    <Layout>
      <Suspense fallback={<LazyLoader/>}>
       <main>
        <Container>
          <SectionTitle title={"ক্রিকেট"} />
          <Row>
            <Col lg={9}>
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <SportsGrid />
              <div className="read d-flex my-5 justify-content-center">
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
      </Suspense>
    </Layout>
  );
}

export default CricketPage;
