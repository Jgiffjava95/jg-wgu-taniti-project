import React from 'react';
import './SecondaryNav.css';

const SecondaryNav = ({ segments }) => {
  if (!segments || segments.length === 0) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed TopBar + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="secondary-nav">
      <ul className="secondary-nav-list">
        {segments.map((segment) => (
          <li key={segment.id} className="secondary-nav-item">
            <a 
              href={`#${segment.id}`} 
              onClick={(e) => handleClick(e, segment.id)}
              className="secondary-nav-link"
            >
              {segment.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SecondaryNav;
