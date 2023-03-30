import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navElements = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/project' },
];

export const NavBar = () => {
  const location = useLocation();

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
                    location.pathname === element.link ? 'active' : ''
                  }`}
                >
                  <Link className='nav-link' to={element.link}>
                    {element.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ minHeight: 100 }}></div>
    </>
  );
};
