import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        I've always been curious about all the aspects of programming, with a keen interest in all C-like languages. <br/>
        I'm a Full Stack Developer with an advanced curiosity in all languages for programming Blockchain Apps (DApps) .

      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand java" />
            <em>Java/Kotlin</em>
          </li>
          <li>
            <span className="bar-expand cc" />
            <em>C++</em>
          </li>
          <li>
            <span className="bar-expand python" />
            <em>Python</em>
          </li>
          <li>
            <span className="bar-expand SQL" />
            <em>SQL</em>
          </li>
          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand cordasolidity" />
            <em>Corda</em>
          </li>
          <li>
            <span className="bar-expand cordasolidity" />
            <em>Solidity</em>
          </li>


        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
