import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css'
function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Image 
            src="/my.JPEG" 
            roundedCircle 
            fluid 
            alt="Your Profile" 
            style={{ width: '300px', height: '400px' }}
          />
        </Col>
        <Col md={6}>
          <h1 className='about'>About Me</h1>
          <p className='about-text'>
            Hello! I'm <strong className='text'>Sakshi Popat Dighe</strong>, a passionate full-stack developer with a strong interest in creating scalable and dynamic web applications. 
            I specialize in frontend technologies like React and Bootstrap, and backend development with Node.js, Express, and Python.
          </p>
          <p className='about-text'>
            My journey in software development began with a curiosity for technology, which has evolved into a commitment to building efficient and user-friendly solutions. I enjoy solving complex problems and continuously learning new tools and technologies to improve my skill set.
          </p>
          <p className='about-text'>
            Outside of coding, I love to explore the latest trends in technology and contribute to open-source projects. When I'm not at my desk, I enjoy reading, learning about new cultures, and pursuing my passion for photography.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
