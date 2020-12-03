import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          <span>Email:</span> magnusholm.contact@gmail.com
        </p>
        <div>
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/magnus-thestrup-holm/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a id="github" href="https://github.com/Avater26">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
