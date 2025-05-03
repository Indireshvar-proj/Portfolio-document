import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Indireshvar </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />I am a Full Stack Javascript Developer.
            <br />
            I had done some industry related projects with MERN stack and deployed the projects in production.
            Also,completed many academic related projects encompassing on the tech field with industry interlinked projects.
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "The world rewards you for value provided, not time spent."{' '}
          </p>
          <footer className="blockquote-footer">James clear</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
