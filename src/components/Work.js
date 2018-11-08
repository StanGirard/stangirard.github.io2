import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Natixis</h3>
          <p className="info">
            Blockchain Developer
            <span>&bull;</span>
            <em className="date">October 2017 - Present</em>
          </p>

          <p>
            I'm working at Natixis as a working student in the <span>Blockchain Team.</span> <br/>
            I had the pleasure of integrating this newly created team to tackle this new Technology. <br/>
            We are looking at developing new solutions to improve existing process in the financial world.
            Those projects go from KYC to Trading using the latest Distributed Ledger Technologies (Corda, Hyperledger, Ethereum, Quorum).
          </p>
        </div>
      </div>


    </div>
  </div>
);

export default Work;
