import React from "react";
import Logo from "../../assets/images/logo.webp";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
 
function Footer() {
  return (
    <footer id="Footer">
      <div className="inner-Footer">
        <Container>
          <Row className="Footer-wrapper">
            <Col lg={4}>
              <div className="Logo">
                <img src={Logo} alt="" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="Footer-contact">
                <div className="inner-Footer-contact">
                  <p>
                    E-mail: <a href="#">channel24central@gmail.com</a>
                  </p>
                  <a href="#">Tel: +8802 550 29724</a>
                  <p>Fax: +8802 550 19709</p>
                  <p>
                    {" "}
                    <a href="#">Advertisement: digital@channel24bd.tv</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="address">
                <p>টাইমস মিডিয়া ভবন (১০,১১ তলা),</p>
                <p>৩৮৭ দক্ষিণ তেজগাঁও বাণিজ্যিক এলাকা,</p>
                <p>ঢাকা ১২০৮, বাংলাদেশ।</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright-msg">
        <p className="p-0 mt-0">
          © ২০২২ | চ্যানেল ২৪ কর্তৃক সর্বসত্ব ® সংরক্ষিত |
        </p>
      </div>
    </footer>
  );
}
export default Footer;
