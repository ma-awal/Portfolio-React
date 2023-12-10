import React, { useState, useEffect } from 'react';
import './Header.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
const navLink = [
  { id: uuidv4(), url: '/', name: 'Home' },
  { id: uuidv4(), url: '/About', name: 'About' },
  { id: uuidv4(), url: '/Portfolio', name: 'Portfolio' },
  { id: uuidv4(), url: '/Contact', name: 'Contact' },
];
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [bar, setBar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header  ${isSticky ? 'sticky' : ''}`}>
      <Navbar
        bg="transparent"
        expand="md"
        className="pt-3  "
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#home" className="nav-brand  ">
            PORTFOLIO
          </Navbar.Brand>

          <div className="bar-btn d-md-none">
            <button className="bg-transparent" onClick={() => setBar(!bar)}>
              <FaBars className="bar-icon fs-5" />
            </button>
            {bar && (
              <div className="sidebar d-block d-md-none ">
                <div div className=" slider   pt-3 px-3">
                  <div className="heading d-flex align-items-center justify-content-between">
                    <h6 className="fw-bold m-0 p-0 text-uppercase  ">
                      Explore pages
                    </h6>
                    <button
                      className="btn border-0  remove-slide  "
                      onClick={() => setBar(false)}
                    >
                      <IoMdClose className="fs-5" />
                    </button>
                  </div>
                  <div className="nav-item">
                    {navLink.map((link) => {
                      return (
                        <Link
                          to={link.url}
                          className=" text-decoration-none nav-link"
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLink.map((item) => {
                return (
                  <NavLink
                    to={item.url}
                    key={item.id}
                    className="nav-link"
                    onClick={handleNavItemClick}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
