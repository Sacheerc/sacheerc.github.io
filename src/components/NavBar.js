import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navElements = [
  { label: 'Home', link: 'intro-section' },
  { label: 'About', link: 'bio-section' },
  { label: 'Skills', link: 'skills-section' },
  { label: 'Qualifications', link: 'qualifications-section' },
  { label: 'Projects', link: 'projects-section' },
  { label: 'Contact', link: 'contact-section' },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState([navElements[0].link]);

  useEffect(() => {
    setActiveLink(navElements[0].link);
  }, []);

  return (
    <>
      <nav class='navbar navbar-expand-sm fixed-top navbar-light'>
        <div class='container'>
          <a class='navbar-brand' href='/'>
            SACHINTHA
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbar1'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbar1'>
            <ul className='navbar-nav ms-auto'>
              {navElements.map((element, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    activeLink === element.link ? 'active' : ''
                  }`}
                >
                  <Link
                    style={{ cursor: 'pointer' }}
                    className='nav-link'
                    offset={-150}
                    to={element.link}
                    onClick={() => setActiveLink(element.link)}
                  >
                    {element.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ minHeight: 170 }}></div>
    </>
  );
};
