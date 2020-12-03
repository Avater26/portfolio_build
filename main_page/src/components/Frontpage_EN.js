import React from "react";

const Frontpage_EN = () => {
  return (
    <main id="frontpage">
      <div id="front_top">
        <h1>Magnus Holm</h1>
        <h2>Front-end Web Developer</h2>
      </div>
      <section>
        <h2>Overview of main web development skills</h2>
        <div id="prime_skills_container">
          <div className="prime_skills">
            <img
              src="/HTML_CSS_JS.png"
              alt="The icons for CSS 3, HTML 5 and JavaScript"
            />
            <p>
              I have worked with HTML, CSS and JavaScript since 2018 and have
              experience with all 3.
            </p>
          </div>
          <div className="prime_skills">
            <img src="/React.png" alt="The logo for React.js" />
            <p>
              I have worked with React.js for a few mounths in my spare time,
              where I have learnt the basics.
            </p>
          </div>
          <div className="prime_skills">
            <img src="/Node.js.png" alt="The logo for Node.js" />
            <p>
              I have worked with Node.js since summer 2018 and have use a number
              of different Node packages.
            </p>
            <p>
              One such package is express, which I know how to make a backend
              server with.
            </p>
          </div>
          <div className="prime_skills">
            <img
              src="/database.png"
              alt="A simple illustration of a database"
            />
            <p>
              I have worked with databases since summer 2018 and have primeraly
              used MySQL, but have also tried working a bit with NoSQL.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Frontpage_EN;
