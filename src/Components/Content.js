import React from "react";
import nycTerminal from "../nycterminal.PNG";
import nycdaLogo from "../nycda.svg";
import linkedIn from "../linked-in.png";
import gitHub from "../github.png";
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
      <div className="content-for-body-continued">
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
            Like I stated above most of my skills as of right now are from NYCDA's web development intensive bootcamp. We focused on many different languages throughout out the course, working on team projects and learning the techniques ourselves with our teacher being a vital crutch. Please follow the link to see a break down of where I believe my skills are at. Aswell as my resume if that intrests you aswell.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
