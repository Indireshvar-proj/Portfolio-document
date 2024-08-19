import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/resume document.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web developer [Corizo Edutech]"
              date="July 2024 - present"
              content={[
                "Developed an Ecommerce website with backend technologies such as nodejs for sever side logic and used python and expressjs for API endpoints.",
                "Utilized MongoDB for storing the data in the cloud database",
                "Used different APIs and JSON tokens for the payment services and information securely by connecting the e-commerce site.",
                "Displayed the website in a good and navigational manner using frontend development tools and frameworks such as reactjs."
              ]}
            />
            <Resumecontent
              title="Web developer [Intech Digital solutions]"
              date="September 2023 - October 2023"
              content={[
                "Developed more highly functional web application using the Pythion Flask framework and connected with the database integration using MYSQL.",
                "Created the user interface for the web application using HTML5,CSS3,javascript and Angularjs.",
                "Used Git for version control and have worked with GitFlow.",
                "Created different methodologies such as Admin,Customer,doctor,pharmacist to enable the seamless interconnection for the different customers.",
                "Included Jquery accessibility to create dynamic web content to the user functionality."
              ]}
            />
           
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="[B.E] Computer Science and Engineering [ Sri Ramakrishna Engineering College ] "
              date="2020 - 2024"
              content={[
                
              ]}
            />
            <Resumecontent
              title="HSC [ Sri Swamy International School ] "
              date="2020"
              content={[
                
              ]}
            />
            <Resumecontent
              title="SSLC [ Sri Swamy International School ] "
              date="2018"
              content={[
                
              ]}
            />
            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
