import React from "react";

const Skills = () => {
  return (
    <main id="skills">
      <h1>Kompetencer</h1>
      <div id="skills_container">
        <div className="skill_list">
          <h2>Web udviklings relaterede kompetencer</h2>
          <ul>
            <li>HTML, CSS og JavaScript – Rutineret.</li>
            <li>React.js - Grundlæggende erfaring.</li>
            <li>Vue.js - Grundlæggende erfaring.</li>
            <li>EJS - Rutineret.</li>
            <li>
              Node.js - Erfaring afhænger af hvilken pakke der bliver brugt.
            </li>
            <li>REST API – God erfaring.</li>
            <li>MySQL – God erfaring.</li>
            <li>NoSQL – Begrænset erfaring.</li>
          </ul>
        </div>
        <div className="skill_list">
          <h2>
            Andre programmeringssprog / programmerings relaterede kompetencer
          </h2>
          <ul>
            <li>C# - Begrænset erfaring.</li>
            <li>Git – God erfaring.</li>
          </ul>
        </div>
        <div className="skill_list">
          <h2>Andre kompetencer</h2>
          <ul>
            <li>Photoshop / GIMP - Grundlæggende erfaring.</li>
            <li>
              Microsoft Office programmer – General kendskab til de fleste af
              programmerne.
            </li>
            <li>Sony Vegas - Grundlæggende erfaring.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Skills;
