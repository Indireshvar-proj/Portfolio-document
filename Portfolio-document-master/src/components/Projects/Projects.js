import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerecepic from "../../Assets/Projects/ecommercepic.png";
import blog from "../../Assets/Projects/blog.png";
import eventmanagement from "../../Assets/Projects/eventmanagement.png";
import Weatherapplication from "../../Assets/Projects/Weatherapplication.png";
import Newsapplication from "../../Assets/Projects/Newsapplication.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="ecommerce"
              description=" Developed an Ecommerce website with backend technologies such as nodejs for sever side logic and used python and expressjs for API endpoints.Created a database to store the data in respective SQL file and to save the data of the products in the application and used Reactjs framework for the UI. "
              link="https://github.com/Indireshvar-proj/Ecommerce-project"
              liveLink="https://ecommerce-project-9411.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventmanagement}
              isBlog={false}
              title="Event Management"
              description="Event management website which is build with MERN. It has great support of the Markdown content.Created a database to store the data in respective SQL file and to save the data of the products in the application and used Reactjs framework for the UI."
              link="https://github.com/Indireshvar-proj/Event-management-application"
              liveLink="https://event-management-application-vpoa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerecepic}
              isBlog={false}
              title="Ecommerce store"
              description="It is a basic e-commerce site which build in MERN tech stack. It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button."
              link="https://github.com/Indireshvar-proj/Ecommerce-projects-file"
              liveLink="https://ecommerce-project-file.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog application"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
              link="https://github.com/Indireshvar-proj/Blog-application"
              liveLink="https://blog-application-dtw4.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weatherapplication}
              isBlog={false}
              title="Weather Application"
              description="This application provides the user to search for weather for different cities and based on user location.Its built using HTML,CSS,Javascript and Jquery. It uses Angularjs and OpenWeatherMap API integration for its application and uses browser built in geolocation to get coordinates to get the weather and it can convert the degree from celsius to fahrenheit."
              link="https://github.com/Indireshvar-proj/Weather-proj"
              liveLink="https://weather-proj-teal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newsapplication}
              isBlog={false}
              title="News Application"
              description="Created a web application that provides the latest news in your destination, it uses the FETCH API to get resources across network from server and gives in JSON format of data.Used,HTML,CSS,Javascript,Bootstrap and Jquery library. Added login form to get required access .Fetches live and trending news using the API."
              link="https://github.com/Indireshvar-proj/News-proj"
              liveLink="https://news-proj-31pq.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
