import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <section className="app-download-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Mobile App Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <div className="mobile-images">
              <img
                src={assets.instagram_2}
                alt="Mobile App"
                className="img-fluid mobile-mockup"
              />
            </div>
          </Col>

          {/* Text and App Buttons */}
          <Col md={6}>
            <div className="text-content">
              <h2 className="section-title mb-3">OUR PETSHOP AT YOUR HAND</h2>
              <p className="section-description mb-4">
                Download Our Petshop App
              </p>
              <p className="section-text mb-4">
                Sed sit amet neque faucibus arcu porta commodo. Proin egestas enim ac 
                sapien luctus tincidunt. Aliquam diam ligula finibus eget faucibus 
                dignissim rhoncus id risus.
              </p>

              {/* App Download Buttons */}
              <div className="download-buttons d-flex">
                <Button
                  variant="dark"
                  className="me-2 btn-appstore"
                  href="https://play.google.com"
                  target="_blank"
                >
                  <img
                    src={assets.Google_Play}
                    alt="Google Play"
                    className="store-icon"
                  />
                </Button>

                {/* <Button
                  variant="dark"
                  className="btn-appstore"
                  href="https://apple.com"
                  target="_blank"
                >
                  <img
                    src={assets.appstore}
                    alt="App Store"
                    className="store-icon"
                  />
                </Button> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppDownload;
