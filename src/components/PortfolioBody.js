import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./PortfolioBody.css";

function PortfolioBody() {
  return (
    <Container className="my-5">
      {/* Introduction Section */}
      <Row className="mb-5 intro-section">
        <Col md={4} className="text-center">
          <Image
            src="my.JPEG"
            roundedCircle
            fluid
            alt="Your Profile"
            className="profile-image"
          />
        </Col>
        <Col md={8} className="intro-text">
          <h1>Hello, I'm Sakshi Dighe</h1>
          <p className="para">
            I’m a passionate full-stack developer with expertise in building
            dynamic, user-friendly websites and applications. My focus is on
            creating solutions that are scalable and efficient while providing a
            seamless user experience.
          </p>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="mb-5">
        {/* Frontend Development Card */}
        <Col xs={12} md={4}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Frontend Development
                    </Card.Title>
                    <Card.Text>
                      HTML, CSS, JavaScript, React, Angular, Bootstrap
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="flip-card-back">
                <Card>
                  <Card.Body>
                    <Card.Title>More on Frontend</Card.Title>
                    <Card.Text>
                      Building responsive websites with modern frameworks like
                      React.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        {/* Backend Development Card */}
        <Col xs={12} md={4}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Backend Development
                    </Card.Title>
                    <Card.Text>
                      Node.js, Express, Python, Spring Boot,Fastify, REST APIs
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="flip-card-back">
                <Card>
                  <Card.Body>
                    <Card.Title>More on Backend</Card.Title>
                    <Card.Text>
                      Scalable and secure backend architectures.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        {/* Database & DevOps Card */}
        <Col xs={12} md={4}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Database & DevOps
                    </Card.Title>
                    <Card.Text>MySQL, MongoDB, MariaDB, Docker, AWS</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="flip-card-back">
                <Card>
                  <Card.Body>
                    <Card.Title>More on Databases & DevOps</Card.Title>
                    <Card.Text>
                      Deployment, scaling, and database optimization.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioBody;
