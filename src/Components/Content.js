import React from "react";
import nycTerminal from "../headshot-hires-8.jpg";
import nycdaLogo from "../nycda.svg";
import linkedIn from "../linked-in.png";
import gitHub from "../github.png";
import angelList from "../angelist.png";
import chart from "../chart.svg";
import carbonfriends from "../carbonfriends.png";
import carbonprintmenu from "../carbonprintmenu.png";
import carbonsignin from "../carbonprintsignin.png";
import carbonprintprofile from "../carbonprofilepage.png";
import newsscreen from "../newspaperboy.png";
import newsselector from "../selectorpaperboy.png";
import signinpaperboy from "../frontscreenpaperboy.png";
import arrowdown from "../arrowdown.ico";
import Resume from "../Resume.pdf";
import resumePng from "../resume.png";
import "../Stylesheets/Content1.css";

function Content() {
    return (
        <div>
            <div className="content-for-body-top">
                <div className="content-section1-div">
                    <div className="container">
                        <img
                            className="content-section1-image"
                            src={nycTerminal}
                        />
                    </div>
                    <div className="content-section-header">
                        Education/Where to find me
                    </div>
                    <div className="links">
                        <div className="Nycda">
                            <a
                                href="https://nycda.com/courses/web-development-intensive"
                                target="_blank"
                            >
                                <img
                                    className="nycda-logo logoz"
                                    src={nycdaLogo}
                                />
                            </a>
                        </div>
                        <div className="angellist">
                            <a
                                href="https://angel.co/matt-lomet?public_profile=1"
                                target="_blank"
                            >
                                <img
                                    src={angelList}
                                    alt="angellist"
                                    className="angellist-logo logoz"
                                />
                            </a>
                        </div>
                        <div className="linkedIn">
                            <a
                                href="https://www.linkedin.com/in/matt-lomet-458552141/"
                                target="_blank"
                            >
                                <img
                                    className="linkedIn-logo logoz"
                                    src={linkedIn}
                                />
                            </a>
                        </div>
                        <div className="github">
                            <a
                                href="https://github.com/mattlomet"
                                target="_blank"
                            >
                                <img
                                    className="github-logo logoz"
                                    src={gitHub}
                                />
                            </a>
                        </div>
                        <div className="resume">
                            <a href={Resume} target="_blank">
                                <img
                                    src={resumePng}
                                    alt="resume"
                                    className="resume-logo logoz"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrowdown">
                <img className="arrow" src={arrowdown} alt="look down" />
            </div>
            <div className="content-for-body-second">
                <div className="content-section2-header">
                    My Projects
                </div>
                <div className="project-container">
                    <div className="carbonprint">
                        <div className="content-section2-body">
                            <a
                                href="https://mattlomet.github.io/enviroprint/"
                                target="_blank"
                            >
                                CarbonPrint
                            </a>
                        </div>
                        <div className="content-section2-descrip">
                            A Carbon FootPrint Calculator
                        </div>
                        <img className="carbonpicture" src={carbonsignin} />
                        <img className="carbonpicture" src={carbonprintmenu} />
                        <img
                            className="carbonpicture"
                            src={carbonprintprofile}
                        />
                        <img className="carbonpicture" src={carbonfriends} />
                    </div>
                    <div className="paperboy">
                        <div className="content-section2-body">
                            <a
                                href="https://mattlomet.github.io/paperboy_frontend/"
                                target="_blank"
                            >
                                PaperBoy
                            </a>
                        </div>
                        <div className="content-section2-descrip">
                            News Aggreate Website
                        </div>
                        <img className="paperboypicture" src={signinpaperboy} />
                        <img className="paperboypicture" src={newsselector} />
                        <img className="paperboypicture" src={newsscreen} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
