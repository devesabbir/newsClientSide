//External Lib Import
import React, { lazy, Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";

//Internal Lib Import
import "./SinglePage.css";
import Layout from "../../components/Layout/Layout";
import LazyLoader from "../../components/LazyLoader/LazyLoader";
const SocialMedia = lazy(() => import("../../components/SocialMedia/SocialMedia"));
const SectionTitle = lazy(() => import("../../components/SectionTitle/SectionTitle"));
const LeadNewsList = lazy(() => import("../../components/LeadNewsList/LeadNewsList"));



function SinglePage() {
  // Demo Data
  let photo =
    "https://backoffice.channel24bd.tv/media/imgAll/2022November/bangladesh-team1-1667402910.jpg";

  return (
    <Layout>
      <Suspense fallback={<LazyLoader/>}>
      <main className="mt-2">
        <Container>
          <SectionTitle style={{ margin: "25px 0" }} title={"ক্রিকেট"} />

          <Row>
            <Col lg={2}>
              <div className="desk">
                <div className="desk-title">
                  <span></span>
                  <h2>স্পোর্টস ডেস্ক</h2>
                </div>
                <div className="desk-bottom">
                  <p>প্রকাশিত : ২১:২৮, ২ নভেম্বর ২০২২</p>

                  <div className="desk-social">
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="middle">
                <div className="single-title">
                  <h2>
                    ভেজা মাঠে জিম্বাবুয়ে না খেললেও বাংলাদেশকে বাধ্য করা হয়
                  </h2>
                </div>
                <div className="single-content mt-3">
                  <div className="single-img">
                    <img className="w-100" src={photo} alt="" />
                    <p className="single-img-desc">ছবি: সংগৃহীত</p>
                  </div>

                  <div className="single-desc">
                    <p>
                      ছবি: সংগৃহীত অস্ট্রেলিয়ার অ্যাডিলেডে বুধবার ভারতের বিপক্ষে
                      বৃষ্টি বিঘ্নিত ম্যাচে নিশ্চিত জয়ের পথেই ছিল বাংলাদেশ। ১৮৫
                      রান তাড়া করতে নেমে বৃষ্টির আগে ৭ ওভারে ৬৬ রান তোলে
                      বাংলাদেশ। এরপর বৃষ্টি বাধায় বন্ধ হয়ে যায় খেলা। তখন
                      ডাকওয়ার্থ-লুইস-স্টার্ন পদ্ধতিতে বাংলাদেশের প্রয়োজন ছিল ৪৯
                      রান। ১৭ রানে এগিয়েও ছিল সাকিব বাহিনী। বৃষ্টির কারণে খেলা
                      আর না হলে বাংলাদেশ জয়ী হতো। কিন্তু সেমিফাইনালে ওঠার কঠিন
                      সমীরকণ সামনে রেখে ভেজা মাঠেই বাংলাদেশকে খেলতে বাধ্য করা
                      হয়।
                    </p>{" "}
                    <p>
                      ছবি: সংগৃহীত অস্ট্রেলিয়ার অ্যাডিলেডে বুধবার ভারতের বিপক্ষে
                      বৃষ্টি বিঘ্নিত ম্যাচে নিশ্চিত জয়ের পথেই ছিল বাংলাদেশ। ১৮৫
                      রান তাড়া করতে নেমে বৃষ্টির আগে ৭ ওভারে ৬৬ রান তোলে
                      বাংলাদেশ। এরপর বৃষ্টি বাধায় বন্ধ হয়ে যায় খেলা। তখন
                      ডাকওয়ার্থ-লুইস-স্টার্ন পদ্ধতিতে বাংলাদেশের প্রয়োজন ছিল ৪৯
                      রান। ১৭ রানে এগিয়েও ছিল সাকিব বাহিনী। বৃষ্টির কারণে খেলা
                      আর না হলে বাংলাদেশ জয়ী হতো। কিন্তু সেমিফাইনালে ওঠার কঠিন
                      সমীরকণ সামনে রেখে ভেজা মাঠেই বাংলাদেশকে খেলতে বাধ্য করা
                      হয়।
                    </p>{" "}
                    <p>
                      ছবি: সংগৃহীত অস্ট্রেলিয়ার অ্যাডিলেডে বুধবার ভারতের বিপক্ষে
                      বৃষ্টি বিঘ্নিত ম্যাচে নিশ্চিত জয়ের পথেই ছিল বাংলাদেশ। ১৮৫
                      রান তাড়া করতে নেমে বৃষ্টির আগে ৭ ওভারে ৬৬ রান তোলে
                      বাংলাদেশ। এরপর বৃষ্টি বাধায় বন্ধ হয়ে যায় খেলা। তখন
                      ডাকওয়ার্থ-লুইস-স্টার্ন পদ্ধতিতে বাংলাদেশের প্রয়োজন ছিল ৪৯
                      রান। ১৭ রানে এগিয়েও ছিল সাকিব বাহিনী। বৃষ্টির কারণে খেলা
                      আর না হলে বাংলাদেশ জয়ী হতো। কিন্তু সেমিফাইনালে ওঠার কঠিন
                      সমীরকণ সামনে রেখে ভেজা মাঠেই বাংলাদেশকে খেলতে বাধ্য করা
                      হয়।
                    </p>
                    <p>
                      ছবি: সংগৃহীত অস্ট্রেলিয়ার অ্যাডিলেডে বুধবার ভারতের বিপক্ষে
                      বৃষ্টি বিঘ্নিত ম্যাচে নিশ্চিত জয়ের পথেই ছিল বাংলাদেশ। ১৮৫
                      রান তাড়া করতে নেমে বৃষ্টির আগে ৭ ওভারে ৬৬ রান তোলে
                      বাংলাদেশ। এরপর বৃষ্টি বাধায় বন্ধ হয়ে যায় খেলা। তখন
                      ডাকওয়ার্থ-লুইস-স্টার্ন পদ্ধতিতে বাংলাদেশের প্রয়োজন ছিল ৪৯
                      রান। ১৭ রানে এগিয়েও ছিল সাকিব বাহিনী। বৃষ্টির কারণে খেলা
                      আর না হলে বাংলাদেশ জয়ী হতো। কিন্তু সেমিফাইনালে ওঠার কঠিন
                      সমীরকণ সামনে রেখে ভেজা মাঠেই বাংলাদেশকে খেলতে বাধ্য করা
                      হয়।
                    </p>
                  </div>
                </div>

                <div className="social-bottom">
                  <SocialMedia />
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="latest-news">
                <div className="title text-center text-white p-2">সর্বশেষ</div>
                <div className="news-box">
                  <LeadNewsList />
                  <LeadNewsList />
                  <LeadNewsList />
                  <LeadNewsList />
                  <LeadNewsList />
                  <LeadNewsList />
                  <LeadNewsList />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      </Suspense>
    </Layout>
  );
}

export default SinglePage;
