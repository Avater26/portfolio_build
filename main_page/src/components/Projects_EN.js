import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <main id="projects">
      <div className="project_container">
        <h1>magnusholm.eu</h1>
        <p className="site_info">
          Mobile friendly:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Language: Danish and english</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Project info</h2>
            <section>
              <p>
                The website you are currently on. That includes the front,
                skills and projects pages, both in danish and english.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Project code</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Font Awesome</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project_container">
        <a className="project_title" href="http://localhost:3001/exam">
          Boligstjernen
        </a>
        <p className="site_info">
          Mobile friendly:
          <FontAwesomeIcon className="not_mobile" icon={faTimes} />
        </p>
        <p className="site_info">Language: Danish</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Project info</h2>
            <section>
              <p>
                My exam assignment from my web-integrator education.
                <br />
                The assignment was to make a website for a fictional newly
                started real estate agent, named Boligstjernen.
                <br />
                The website should primarily be used to present current housing
                for potential clients.
                <br />
                The grade I got for the assignment was a 12.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Project code</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>EJS</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Several different Node.js packages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container">
        <a className="project_title" href="/projects/card-draw">
          Playing card project v1.0
        </a>
        <p className="site_info">
          Mobile friendly:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Language: English</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Project info</h2>
            <section>
              <p>
                A small simple project I have made, where you can draw cards
                from a deck of cards.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Project code</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>
                Node.js packages:{" "}
                <a href="https://www.npmjs.com/package/cards">cards.js</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container">
        <a className="project_title" href="/projects/tarot">
          Major Arcana Tarot project v1.0
        </a>
        <p className="site_info">
          Mobile friendly:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Language: English</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Project info</h2>
            <section>
              <p>
                A small simple project I have made, where you can draw cards
                from a deck containing major arcana tarot cards.
                <br />
                There is also a checkbox, which can toggle whether or not you
                want to see the cards Deck of Many Things effect from Dungeons &
                Dragons 5E.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Project code</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>
                Node.js packages:{" "}
                <a href="https://www.npmjs.com/package/cards">cards.js</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project_container">
        <a className="project_title" href="/en/projects/memory_game">
          Memory game projekt v1.0
        </a>
        <p className="site_info">
          Mobile friendly:
          <FontAwesomeIcon className="is_mobile" icon={faCheck} />
        </p>
        <p className="site_info">Language: Danish and english</p>
        <div className="description_code_container">
          <div className="project_description">
            <h2>Project info</h2>
            <section>
              <p>
                A small memory game, that we had to make during the 2nd part of
                the basic course.
              </p>
            </section>
          </div>
          <div className="project_code">
            <h2>Project code</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
