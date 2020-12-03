import React from "react";

const Frontpage = () => {
  return (
    <main id="frontpage">
      <div id="front_top">
        <h1>Magnus Holm</h1>
        <h2>Front-end Webudvikler</h2>
      </div>
      <section>
        <h2>Oversigt over hoved webudviklings kompetencer</h2>
        <div id="prime_skills_container">
          <div className="prime_skills">
            <img
              src="/HTML_CSS_JS.png"
              alt="Iconerne for CSS 3, HTML 5 og JavaScript"
            />
            <p>
              Jeg har arbejdet med HTML, CSS and JavaScript siden 2018 og har et
              godt kendskab til alle 3.
            </p>
          </div>
          <div className="prime_skills">
            <img src="/React.png" alt="Logoet for React.js" />
            <p>
              Jeg har arbejdet med React.js i nogle måneder i min fritid, hvor
              jeg har lært det grundlæggende.
            </p>
          </div>
          <div className="prime_skills">
            <img src="/Node.js.png" alt="Logoet for Node.js" />
            <p>
              Jeg har arbejdet med Node.js siden sommeren 2018 og har brugt en
              række forskellige Node pakker.
            </p>
          </div>
          <div className="prime_skills">
            <img
              src="/database.png"
              alt="En simpel illustration af en database"
            />
            <p>
              Jeg har arbejdet med databaser siden sommeren 2018 og har primært
              brugt MySQL, men har også prøvet at arbejde lidt med NoSQL.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Frontpage;
