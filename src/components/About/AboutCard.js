import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hello! I’m <span className="purple">Indireshvar</span>, a passionate <b className="purple">Full Stack Web Developer</b> with a strong focus on modern JavaScript technologies.
            <br />
            <br />
            I specialize in designing and developing scalable web applications using the <b className="purple">MERN stack</b> (MongoDB, Express.js, React.js, and Node.js). My experience spans across creating AI-integrated e-commerce platforms, interactive dashboards, and real-time social media applications that are both user-friendly and performance-optimized.
            <br />
            <br />
            I have also gained hands-on experience in <b className="purple">cloud computing</b> using Azure and Google Cloud, RESTful API architecture, and UI/UX design tools like <b className="purple">Figma</b> to ensure seamless user interactions.
            <br />
            <br />
            With a deep interest in building impactful solutions, I aim to contribute to innovative teams and deliver high-quality software aligned with modern engineering practices.
            <br />
            <br />
            <strong>When I’m not coding, I like to stay curious and creative through various activities:</strong>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing strategy-based video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing technical blogs and tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching documentaries, movies, and web series
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "The world rewards you for the value you create, not the hours you work."
          </p>
          <br></br>
          <footer className="blockquote-footer">James Clear</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
