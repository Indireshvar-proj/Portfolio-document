import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function CourseDetails() {
  const { id } = useParams(); // Get the course ID from the URL

  // Dummy data for demonstration (replace with actual data)
  const courses = [
    {
      id: 1,
      title: "Full Stack Development Specialization - Capabl",
      certificateLink: "https://example.com/certificate1.jpg",
      description: "Comprehensive training in frontend and backend technologies.",
    },
    {
      id: 2,
      title: "MEAN Stack Development - Onboard Infinity",
      certificateLink: "https://example.com/certificate2.jpg",
      description: "Focused training in MongoDB, Express, Angular, and NodeJS.",
    },
    // Add more courses here...
  ];

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return (
      <Container>
        <h2>Course Not Found</h2>
        <p>This course does not exist.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h4>Certificate</h4>
      <img src={course.certificateLink} alt="Certificate" style={{ width: "100%" }} />
    </Container>
  );
}

export default CourseDetails;