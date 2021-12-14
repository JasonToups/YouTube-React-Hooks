import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, [])

	return (
    <footer className="contact">
      <div className="contact-items-container flex-container">
        <a
          className="contact-item"
          href="https://www.linkedin.com/in/jasontoups/"
          target="_blank"
          rel="noreferrer" 
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className="contact-item"
          href="https://github.com/JasonToups"
          target="_blank"
          rel="noreferrer" 
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a
          className="contact-item"
          href="mailto:me@jasontoups.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          className="contact-item"
          href="https://twitter.com/jsontoups"
          target="_blank"
          rel="noreferrer" 
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <p className="footer">
        Copyright &copy; Jason Toups {date}
      </p>
    </footer>
	);
};

export default Contact;
