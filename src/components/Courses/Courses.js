import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import ReactGA from "react-ga";
import { BiLinkExternal } from 'react-icons/bi';

import cert8 from "../../Assets/Courses/Coursera course cert1_page-0001.jpg";
import cert9 from "../../Assets/Courses/Coursera course cert2_page-0001.jpg";
import cert10 from "../../Assets/Courses/Coursera course cert3_page-0001.jpg";
import cert11 from "../../Assets/Courses/Coursera course cert4_page-0001.jpg";
import cert12 from "../../Assets/Courses/Coursera course cert5_page-0001.jpg";
import cert13 from "../../Assets/Courses/Coursera courses professional cert1_page-0001.jpg";
import cert14 from "../../Assets/Courses/Coursera course2 cert1_page-0001.jpg";
import cert15 from "../../Assets/Courses/Coursera course2 cert2_page-0001.jpg";
import cert16 from "../../Assets/Courses/Coursera course2 cert3_page-0001.jpg";
import cert17 from "../../Assets/Courses/Coursera course2 cert4_page-0001.jpg";
import cert18 from "../../Assets/Courses/Coursera course2 cert5_page-0001.jpg";
import cert19 from "../../Assets/Courses/Coursera course2 cert6_page-0001.jpg";
import cert20 from "../../Assets/Courses/Coursera course2 cert7_page-0001.jpg";
import cert21 from "../../Assets/Courses/Coursera courses professional cert2_page-0001.jpg";
import certi22 from "../../Assets/Certificate/certificate 1.jpg";
import certi23 from "../../Assets/Certificate/certificate 2.jpg";
import certi24 from "../../Assets/Certificate/certificate 3.jpg";
import certi25 from "../../Assets/Certificate/certificate 4.jpg";
import certi26 from "../../Assets/Certificate/certificate 5.jpg";
import certi27 from "../../Assets/Certificate/certificate 6.jpg";
import certi28 from "../../Assets/Certificate/certificate 7.jpg";
import certi29 from "../../Assets/Certificate/certificate 8.png";


function Courses() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [activeTab, setActiveTab] = useState("featured");

  const featuredCourses = [
    { imgPath: cert8, title: "Foundations of AI and Machine Learning", link: "https://www.coursera.org/account/accomplishments/certificate/EGDLMNAUCXQL" },
    { imgPath: cert9, title: "AI and Machine Learning Algorithms and Techniques", link: "https://www.coursera.org/account/accomplishments/certificate/KWZNN0LVRTMB" },
    { imgPath: cert10, title: "Building Intelligent Troubleshooting Agents", link: "https://www.coursera.org/account/accomplishments/certificate/IRT3N6UMSPPI" },
    { imgPath: cert11, title: "Microsoft Azure for AI and Machine Learning", link: "https://www.coursera.org/account/accomplishments/certificate/3DZUR3W8KX0M" },
    { imgPath: cert12, title: "Advanced AI and Machine Learning Techniques and Capstone", link: "https://www.coursera.org/account/accomplishments/certificate/9QCAYJ9BGV4W" },
    { imgPath: cert14, title: "Introduction to Front-End Development", link: "https://www.coursera.org/account/accomplishments/certificate/PVGO6F9HQPT8" },
    { imgPath: cert15, title: "Programming with JavaScript", link: "https://www.coursera.org/account/accomplishments/certificate/5MV98W7MTIEX" },
    { imgPath: cert16, title: "Version Control", link: "https://www.coursera.org/account/accomplishments/certificate/072FRZ5WY7TR" },
    { imgPath: cert17, title: "HTML and CSS in depth", link: "https://www.coursera.org/account/accomplishments/certificate/WTO2FFK1EQH9" },
    { imgPath: cert18, title: "React Basics", link: "https://www.coursera.org/account/accomplishments/certificate/GV1ILNCFN3DD" },
    { imgPath: cert19, title: "Advanced React", link: "https://www.coursera.org/account/accomplishments/certificate/C525CPYSC0MP" },
    { imgPath: cert20, title: "Principles of UX/UI Design", link: "https://www.coursera.org/account/accomplishments/certificate/MILTDV6WWGBO" },
    { title: "Frontend Development using Angular - Onboard Infinity", description: "Building reactive UIs with Angular framework." },
    { title: "Frontend Professional Certificate - Meta", description: "Modern frontend concepts including React and web accessibility." },
    { title: "Programming with JavaScript - Meta", description: "Core JS concepts, functions, loops, and DOM manipulation." },
    { title: "Full Stack Web Development - Amazon", description: "Complete stack training with practical backend/frontend exposure." },
  ];

  const professionalCourses = [
    {
      imgPath: cert21,
      title: "Frontend Developer Professional Certificate - Meta",
      description: "Modern frontend concepts including React and web accessibility.",
      link: "https://www.coursera.org/account/accomplishments/specialization/JT7SRFDFKIF8",
    },
    {
      imgPath: cert13,
      title: "AI and ML Engineering Professional Certificate - Microsoft",
      description: "AI development and deployment using Microsoft tools and technologies.",
      link: "https://www.coursera.org/account/accomplishments/specialization/K63I5ZD66D1C",
    },
    {
      title: "Mean Stack Specialization - Onboard Infinity",
      description: "Complete stack training with practical backend/frontend exposure.",
    },
    {
      title: "Frontend development Professional Certificate - Kodacy",
      description: "Advanced front-end development using latest frameworks and tools.",
    },
  ];

  const workExperience = [
    {imgPath: certi28,
      title: "Artificial Intelligence and Machine learning - Kodacy",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://kodacy.com/kodacy-certificate/?cert_hash=325f6b9dc230d7a3"
    },
    { imgPath: certi22,
      title: "Amazon Class Chats: Reliability and Maintenance Engineering (RME) - Amazon",
      description: "Created interface between front-end and backend to display data from JPMorgan’s stock price feed.",
      link: "https://experience.springpod.co.uk/certificates/c2cxzmfv26"
    },
    { imgPath: certi23,
      title: "Amazon Class Chats: Building Solutions in the Cloud - Amazon",
      description: "Completed real-time projects involving Python, TensorFlow, and basic AI model development.",
      link: "https://experience.springpod.co.uk/certificates/tojfd5hcch"
    },
    { imgPath: certi29,
      title: "Web Development Fellowship program - Web dev Open",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://certificate.webdevopen.com/6781144b4c51dbc3da8eac56"
    },
    { imgPath: certi24,
      title: "Amazon Class Chats: Verifying AI Knowledge - Amazon",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://experience.springpod.co.uk/certificates/kfdsayblwy"
    },
    {  imgPath: certi25,
      title: "Defy the limits with Amazon: Future Careers Experience - Amazon",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://experience.springpod.co.uk/certificates/i8tvha3xn2"
    },
    { imgPath: certi26,
      title: "Siemens: Virtual Work Experience  - Siemens",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://experience.springpod.co.uk/certificates/gcqwdracom"
    },
    {imgPath: certi27,
      title: "Software Development - Springpod",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://experience.springpod.co.uk/certificates/ylmu5mni3p"
    },
    {imgPath: certi28,
      title: "Artificial Intelligence and Machine learning - Kodacy",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://kodacy.com/kodacy-certificate/?cert_hash=325f6b9dc230d7a3"
    },
    { imgPath: certi29,
      title: "Web Development Fellowship program - Web dev Open",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://certificate.webdevopen.com/6781144b4c51dbc3da8eac56"
    },
    {
      title: "Web Development Virtual Internship - TCS iON",
      description: "Built responsive websites using HTML, CSS, JS. Completed hands-on assignments and mock projects.",
      link: "https://example.com/certificate/tcs-ion"
    },

    
  ];

  const renderCourses = (courses) => (
    <Row className="course-row">
      {courses.map((course, index) => (
        <Col xs={12} sm={6} md={6} key={index} className="mb-4">
          <div
            className="course-card p-3 rounded text-dark h-60"
            style={{
              background: "#FFFAFA",
              border: "1px solid #DCDCDC",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {course.imgPath && (
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
            )}
            <h5 className="course-title mb-3">{course.title}</h5>
            {course.description && <p className="course-description">{course.description}</p>}
            {course.link && (
              <Button
                variant="outline-primary"
                href={course.link}
                target="_blank"
                className="mt-2"
              >
                <BiLinkExternal /> &nbsp; View Certificate
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
          <strong className="purple">Certifications</strong> & Courses
        </h1>
        <p style={{ color: "white" }}>Programs and trainings I’ve completed</p>

        <div className="project-toggle-buttons mb-4 d-flex flex-wrap gap-2">
          <Button
            variant={activeTab === "featured" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("featured")}
          >
            Featured Courses
          </Button>
          <Button
            variant={activeTab === "professional" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("professional")}
          >
            Professional Certificates & Specializations
          </Button>
          <Button
            variant={activeTab === "experience" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("experience")}
          >
            Work Experience Programs
          </Button>
        </div>

        {activeTab === "featured" && renderCourses(featuredCourses)}
        {activeTab === "professional" && renderCourses(professionalCourses)}
        {activeTab === "experience" && renderCourses(workExperience)}
      </Container>
    </Container>
  );
}

export default Courses;
