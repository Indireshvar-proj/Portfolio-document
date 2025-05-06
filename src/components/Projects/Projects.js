import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { BiLinkExternal } from "react-icons/bi";

// Importing project images
import ecommercepic from "../../Assets/Projects/ecommercepic.png";
import blog from "../../Assets/Projects/blog.png";
import eventmanagement from "../../Assets/Projects/eventmanagement.png";
import Weatherapplication from "../../Assets/Projects/Weatherapplication.png";
import Newsapplication from "../../Assets/Projects/Newsapplication.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import littlelemon from "../../Assets/Projects/little lemon.png";
import travelapp from "../../Assets/Projects/Travelapp.png";
import ecommerceapp from "../../Assets/Projects/Ecommerce Application.png";
import cert1 from "../../Assets/Courses/Coursera cert1_page-0001.jpg";
import cert2 from "../../Assets/Courses/Coursera cert2_page-0001.jpg";
import cert3 from "../../Assets/Courses/Coursera cert3_page-0001.jpg";
import cert4 from "../../Assets/Courses/Coursera cert4_page-0001.jpg";
import cert5 from "../../Assets/Courses/Coursera cert5_page-0001.jpg";
import cert6 from "../../Assets/Courses/Coursera cert6_page-0001.jpg";
import cert7 from "../../Assets/Courses/Coursera cert7_page-0001.jpg";
import certi1 from "../../Assets/Courses/Coursera project1_page-0001.jpg";

function Projects() {
  const [activeTab, setActiveTab] = useState("featured");

  const featuredProjects = [
    {
      imgPath: littlelemon,
      title: "Little Lemon",
      description:
        "Developed a fully-featured restaurant reservation and management platform using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse the restaurant's menu, book reservations, and make secure payments. The backend, powered by Node.js and Express, ensures smooth handling of bookings, menu updates, and user profiles, while MongoDB provides a scalable solution for storing customer data and reservation information. The front-end, developed with React, offers a dynamic and user-friendly interface, enabling customers to view live availability and easily make reservations. ",
      link: "https://github.com/Indireshvar-proj/Ecommerce-project",
      liveLink: "https://meta-coursera-frontend-development-capstone-project.vercel.app/",
    },
    {
      imgPath: ecommerceapp,
      title: "Complete Ecommerce Application",
      description:
        "A full-featured e-commerce platform developed using the MERN stack. The application includes product management, secure user authentication, order processing, and an admin dashboard for inventory management. The backend, powered by Node.js with Express, integrates with MongoDB to ensure scalability and efficient data handling. The front-end, built with React, offers a seamless shopping experience with a user-friendly interface, dynamic product listings, and secure checkout capabilities.",
      link: "https://github.com/Indireshvar-proj/Ecommerce-project",
      liveLink: "https://ecommerce-mern-djw6.vercel.app/",
    },
    {
      imgPath: travelapp,
      title: "HiLink",
      description:
        "A comprehensive travel and booking platform developed with the MERN stack. The application features detailed listings of various destinations, travel packages, and personalized user profiles. The backend ensures secure data storage, flight bookings, and integration with third-party APIs for real-time availability updates. The front-end, built with React, allows users to explore various travel options, book tickets, and track their itineraries with ease, all through a responsive and dynamic interface.",
      link: "https://github.com/Indireshvar-proj/Travelapp-",
      liveLink: "https://travelapp-sable.vercel.app/",
    },
    {
      imgPath: ecommercepic,
      title: "Ecommerce Store (Basic)",
      description:
        "A basic online store developed using the MERN stack, featuring user registration/login, product listing, cart functionality, and responsive UI. Ideal for demonstrating core CRUD operations and frontend-backend integration.",
      link: "https://github.com/Indireshvar-proj/Ecommerce-projects-file",
      liveLink: "https://ecommerce-project-file.vercel.app",
    },
  
    {
      imgPath: Weatherapplication,
      title: "Weather Application",
      description:
        "A responsive weather app built using AngularJS and the OpenWeatherMap API. It provides real-time weather data based on the user’s location or manual input. Features include temperature, humidity, and weather condition tracking with clean visual representation.",
      link: "https://github.com/Indireshvar-proj/Weather-proj",
      liveLink: "https://weather-proj-teal.vercel.app/",
    },
    {
      imgPath: Newsapplication,
      title: "News Aggregator Application",
      description:
        "A real-time news application built using React and NewsAPI. It fetches and displays current news articles across various categories with filtering and search features. Designed with a clean, responsive UI and efficient API integration.",
      link: "https://github.com/Indireshvar-proj/News-proj",
      liveLink: "https://news-proj-31pq.vercel.app/",
    },
    {
      imgPath: ecommerce,
      title: "Ecommerce Platform (Advanced)",
      description:
        "An enhanced version of the e-commerce site, incorporating advanced features like user reviews, product categorization, intelligent search, and payment gateway integration. Built with optimized MongoDB queries and secure backend practices.",
      link: "https://github.com/Indireshvar-proj/Ecommerce-advanced",
      liveLink: "https://ecommerce-advanced-app.com/",
    },
    {
      imgPath: blog,
      title: "Advanced Blog Platform",
      description:
        "A robust blog application with features like rich text editing, media upload, user roles (admin/author/reader), and an intuitive dashboard. Backend built with Node.js and MongoDB, front-end with React and styled-components.",
      link: "https://github.com/Indireshvar-proj/Advanced-Blog-application",
      liveLink: "https://advanced-blog-app.com/",
    },
  ];

  const otherProjects = [
    {
      imgPath: certi1,
      title: "Frontend development Capstone Project - Meta",
      description:
        "Capstone project from Meta’s Front-End Developer specialization, demonstrating skills in React, accessibility, and UX design.",
      link: "https://www.coursera.org/account/accomplishments/verify/Y5SO0V40E0B8",
    },
    {
      imgPath: cert1,
      title: "Web Development in React.js",
      description:
        "Hands-on course focused on building functional React apps with JSX, components, props, and hooks.",
      link: "https://www.coursera.org/account/accomplishments/verify/Y5SO0V40E0B8",
    },
    {
      imgPath: cert2,
      title: "CI Workflow in CircleCI",
      description:
        "Learned to implement continuous integration pipelines using CircleCI, automate tests, and manage deployment flows.",
      link: "https://www.coursera.org/account/accomplishments/verify/0F87H1MI3TV7",
    },
    {
      imgPath: cert3,
      title: "Serverless API with Node.js on Azure",
      description:
        "Built RESTful APIs using Azure Functions with Node.js. Focus on cloud-native development and deployment best practices.",
      link: "https://www.coursera.org/account/accomplishments/verify/WNMD8UVBAIVK",
    },
    {
      imgPath: cert4,
      title: "Online Auction Server with ExpressJS",
      description:
        "Developed an auction server with real-time bidding functionality using ExpressJS and socket.io.",
      link: "https://www.coursera.org/account/accomplishments/verify/FGHY72I8XPO2",
    },
    {
      imgPath: cert5,
      title: "Higher Order Components in React",
      description:
        "Gained deep understanding of Higher Order Components (HOCs) to build reusable logic in React applications.",
      link: "https://www.coursera.org/account/accomplishments/verify/J28W7LGCABAS",
    },
    {
      imgPath: cert6,
      title: "React + TypeScript: Utility Types",
      description:
        "Explored TypeScript utility types and template literals to write more robust and flexible React code.",
      link: "https://www.coursera.org/account/accomplishments/verify/NXBRQ0ZSIGS4",
    },
    {
      imgPath: cert7,
      title: "Server Side Rendering with Next.js",
      description:
        "Updated a news website to support SSR using Next.js, improving SEO and load performance.",
      link: "https://www.coursera.org/account/accomplishments/verify/Q0ERU2CQ9DCP",
    },
    {
      imgPath: cert7,
      title: "Front-End Developer Capstone",
      description:
        "Final project demonstrating end-to-end front-end development skills using React and responsive web design.",
      link: "https://www.coursera.org/account/accomplishments/certificate/5L3554XHGJRL",
    },
  ];

  const renderCourses = (courses) => (
    <Row className="course-row">
      {courses.map((course, index) => (
        <Col xs={12} sm={4} md={4} key={index} className="mb-4">
          <div
            className="course-card p-3 rounded text-dark h-100"
            style={{
              background: "#FFFAFA",
              border: "2px solid #DCDCDC",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="course-image-container mb-3" style={{ textAlign: "center" }}>
              <img
                src={course.imgPath}
                alt={course.title}
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </div>
            <h5
              className="course-title mb-3"
              style={{
                fontWeight: "bold",
                fontSize: "1.4rem",
                color: "#333",
              }}
            >
              {course.title}
            </h5>
            <p className="course-description">{course.description}</p>
            {course.link && (
              <Button
                variant="outline-primary"
                href={course.link}
                target="_blank"
                className="mt-2"
              >
                <BiLinkExternal /> &nbsp;
                {course.isBlog ? "View Blog" : "View Certificate"}
              </Button>
            )}
          </div>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <div className="project-toggle-buttons mb-4">
          <Button
            variant={activeTab === "featured" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("featured")}
            className="project-toggle-button me-3"
          >
            Featured Projects
          </Button>
          <Button
            variant={activeTab === "other" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("other")}
            className="project-toggle-button"
          >
            Other Projects
          </Button>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {activeTab === "featured"
            ? featuredProjects.map((project, index) => (
                <Col key={index} md={4} className="project-card">
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    liveLink={project.liveLink}
                  />
                </Col>
              ))
            : renderCourses(otherProjects)}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
