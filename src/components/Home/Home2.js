import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer passionate about crafting scalable, high-performance web applications. With a strong foundation in software engineering, I specialize in building end-to-end solutions using modern frameworks and cloud-native technologies.
              <br />
              <br />
              I enjoy creating dynamic and responsive frontends using&nbsp;
              <i>
                <b className="purple">React.js, Next.js, and TypeScript</b>
              </i>, and architecting robust backend systems with&nbsp;
              <i>
                <b className="purple">Node.js, Express.js, and MongoDB</b>
              </i>. I also have hands-on experience integrating secure authentication, real-time APIs, and third-party services to deliver complete user experiences.
              <br />
              <br />
              My interests lie in building modern&nbsp;
              <i>
                <b className="purple">Web Applications, AI-integrated Products, and Scalable Cloud Solutions</b>
              </i>, with a keen focus on performance, usability, and real-world impact.
              <br />
              <br />
              I'm proficient in leveraging cloud platforms like&nbsp;
              <b className="purple">Azure and Google Cloud</b> for deployment, analytics, and CI/CD automation. I also use UI/UX tools like&nbsp;
              <b className="purple">Figma</b> to design user-friendly interfaces before development.
              <br />
              <br />
              I'm constantly exploring new technologies and contributing to open-source projects to sharpen my skills. I believe in writing clean, maintainable code and delivering features that align with user needs and business goals.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let's connect and collaborate! You can find me on the platforms below:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Indireshvar-proj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/indireshvar-v-246a25241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2
