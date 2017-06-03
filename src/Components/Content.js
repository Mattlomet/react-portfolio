import React from "react";
import nycTerminal from "../nycterminal.PNG";
import nycdaLogo from "../nycda.svg";
import linkedIn from "../linked-in.png";
import gitHub from "../github.png";
import saltShaker from "../saltshaker.png";
import "../Stylesheets/Content.css";

function Content() {
  return (
    <div>
      <div className="content-for-body-top">
        <div className="content-section1-div">
          <div className="container">
            <img className="content-section1-image" src={nycTerminal} />
            <div className="overlay">
              <img className="overlay-image" src={nycTerminal} />
            </div>
          </div>
          <div className="content-section1-header">Who Am I?</div>
          <div className="content-section1-body">
            I am a junior developer, fresh off the ground but picking up new skills as quick as I can. A little self taught but mainly a Coding Bootcamp is what sparked my intrest. A jack of all trades and a master of none with a strong intrest in JavaScript(specifically ReactJS as of right now). Computers have always been a big part of my life, I've been on a computer as long as i can remember and alot of my family works in the Tech-Industry so i've been around that for awhile now aswell.
          </div>
          <div className="links">
            <div className="Nycda">
              <a href="https://nycda.com/courses/web-development-intensive">
                <img className="nycda-logo logoz" src={nycdaLogo} />
              </a>
            </div>
            <div className="linkedIn">
              <a href="https://linkedin.com">
                <img className="linkedIn-logo logoz" src={linkedIn} />
              </a>
            </div>
            <div className="github">
              <a href="https://github.com">
                <img className="github-logo logoz" src={gitHub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-for-body-2">
        <div className="content-section2-div">
          <div className="content-section2-languages">
            <div className="html language">HTML</div>
            <div className="css language">CSS</div>
            <div className="ruby language">Ruby</div>
            <div className="rails language">Rails</div>
            <div className="javascript language">Javascript</div>
            <div className="reactjs language">ReactJs</div>
          </div>
          <div className="content-section2-header">My Skills</div>
          <div className="content-section2-body">
            Like I stated above most of my skills as of right now are from NYCDA's web development intensive bootcamp. We focused on many different languages throughout out the course, working on team projects and learning the techniques ourselves with our teacher being a vital crutch. Please follow the link to see a break down of where I believe my skills are at.
          </div>
        </div>
      </div>
      <div className="content-for-body-3">
        <div className="content-section3-div">
          <div className="content-section3-header">
            UGH! not another Bootcamp Grad
          </div>
          <div className="content-section3-body">
            I'm clearly biased towards the system I picked so take this section with a grain of salt. On many forums and around the community its an unsettled topic of "are bootcamp graduates prepared to be junior developers?". Some have taken sides, some have stayed neutral. But I do understand the fear of employeers seeing a bunch of bootcamp graduates who can make "twitter clones" and not much more. In my opinion my bootcamp did not approach learning to program in this way, we learned how to aquire skills and apply them quickly. For many projects we worked in groups aswell and learned the challenges that comes along with that aswell.
          </div>
          <img className="saltShaker" src={saltShaker} />
        </div>
      </div>
    </div>
  );
}

export default Content;
