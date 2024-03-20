import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy;Portfolio</p>
        <div className="social-links">
          <a href="https://github.com/JFleshren" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jared-f-419348122/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
/*ADD ACCOUNTS TO CURRENT PLACEHOLDERS*/