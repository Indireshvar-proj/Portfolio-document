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
          {/* Left column: Experience */}
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer Intern [NSDC - HCLTech]"
              date="March 2025 – Present"
              content={[
                "Architected a high-performance, AI-driven e-commerce platform using React.js, .NET Core, and Azure, leading to a 40% increase in user engagement and a 30% boost in overall conversion rates.",
                "Integrated Azure Cognitive Services to automate sentiment analysis on customer reviews, which increased customer satisfaction by 25%.",
                "Gained hands-on experience with Java and J2EE technologies (Servlets, JSP, EJB, JPA) for backend system development in e-commerce platforms."
              ]}
            />
            <Resumecontent
              title="Full Stack Web Development Engineer [Business Web Solutions]"
              date="November 2024 – February 2025"
              content={[
                "Developed and deployed a scalable social media platform on Google Cloud using Node.js, Express.js, and MongoDB, resulting in a 70% reduction in page load times and a 50% decrease in operational costs.",
                "Integrated secure user authentication using Passport.js and JWT, ensuring secure access to user data stored in MongoDB.",
                "Built core features such as post creation, user feeds, and profile management, providing a seamless and responsive experience."
              ]}
            />
            <Resumecontent
              title="Full Stack Development Intern [Corizo Edutech]"
              date="July 2024 – November 2024"
              content={[
                "Developed a fully functional e-commerce website using Node.js and Express.js for backend logic, and integrated MongoDB for cloud-based database management.",
                "Implemented a cloud-based database architecture that reduced load times by 20% during high-volume transactions.",
                "Built a responsive front-end using React.js, enhancing site performance by 40% and improving user retention by 15%."
              ]}
            />
            <Resumecontent
              title="Web Development Intern [Capabl (Elite Techno Groups)]"
              date="April 2024 – July 2024"
              content={[
                "Developed dynamic platforms like a Real-Time Weather Dashboard and Indian Census Data Visualizer using React.js, Node.js, and APIs.",
                "Integrated data visualization tools like Chart.js and D3.js for engaging, data-driven user experiences.",
                "Optimized application performance through component-based architecture and error handling."
              ]}
            />
            <Resumecontent
              title="Web Application Development Intern [Intech Digital Solutions]"
              date="September 2023 – October 2023"
              content={[
                "Developed a multi-role web application using Python Flask and MySQL, designed to manage interactions for Admin, Customer, Doctor, and Pharmacist.",
                "Created a responsive UI with HTML5, CSS3, JavaScript, and AngularJS, improving user engagement.",
                "Implemented Git for version control and GitFlow methodologies for codebase management."
              ]}
            />
          </Col>
          
          {/* Right column: Education */}
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="M.Sc Software Engineering [University of Hertfordshire]"
              date="January 2025 – Present"
              content={[
                "Courses: TDD, Pair Programming, Agile Methodology, Extreme Programming."
              ]}
            />
            <Resumecontent
              title="B.E Computer Science and Engineering [Sri Ramakrishna Engineering College]"
              date="September 2020 – May 2024"
              content={[
                "Courses: Computer Architecture, Learning Algorithms, Computational Theory."
              ]}
            />
            <Resumecontent
              title="HSC [Sri Swamy International School]"
              date="2020"
              content={[]}
            />
            <Resumecontent
              title="SSLC [Sri Swamy International School]"
              date="2018"
              content={[]}
            />
          </Col>
        </Row>

        {/* Download CV Button */}
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
