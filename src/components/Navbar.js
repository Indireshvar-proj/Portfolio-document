import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CgGitFork } from 'react-icons/cg';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // Track active tab

  // Handle scroll for sticky navbar
  const [navColour, updateNavbar] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // Dynamically change the background color of the body based on the active tab
  useEffect(() => {
    // Dynamically change the background color based on the active tab
    if (activeTab === 'home') {
      document.body.style.backgroundImage = 'linear-gradient(to left, rgb(7, 7, 126), rgb(130, 213, 255))'; // Default gradient for Home
    } else if (activeTab === 'about') {
      document.body.style.backgroundColor = '#e6f7ff'; // Light blue for About
    } else if (activeTab === 'project') {
      document.body.style.backgroundColor = '#f0f8ff'; // Lighter blue for Projects
    } else if (activeTab === 'courses') {
      document.body.style.backgroundColor = '#f7f7f7'; // Grey for Courses
    } else if (activeTab === 'resume') {
      document.body.style.backgroundColor = '#fff7f7'; // Light red for Resume
    }

    // Cleanup: Reset background color when component unmounts or tab changes
    return () => {
      document.body.style.backgroundColor = ''; // Reset background color to default
    };
  }, [activeTab]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setActiveTab('home')}>
          <p
            style={{
              margin: 'auto',
              fontWeight: '700',
              letterSpacing: '1px',
              fontSize: '28px',
            }}
          >
            Indireshvar V
          </p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            {/* Home Tab */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  setActiveTab('home');
                  updateExpanded(false);
                }}
                className={activeTab === 'home' ? 'active' : ''}
              >
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About Tab */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {
                  setActiveTab('about');
                  updateExpanded(false);
                }}
                className={activeTab === 'about' ? 'active' : ''}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects Tab */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => {
                  setActiveTab('project');
                  updateExpanded(false);
                }}
                className={activeTab === 'project' ? 'active' : ''}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* More Tab */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/courses"
                onClick={() => {
                  setActiveTab('courses');
                  updateExpanded(false);
                }}
                className={activeTab === 'courses' ? 'active' : ''}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> More
              </Nav.Link>
            </Nav.Item>

            {/* Resume Tab */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {
                  setActiveTab('resume');
                  updateExpanded(false);
                }}
                className={activeTab === 'resume' ? 'active' : ''}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* GitHub Fork Button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Indireshvar-proj"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />{' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
