import React from 'react'
import Button from '@mui/material/Button';

import "../Styles/About.css";
import about from "../images/about.jpg";
const About = () => {
  return (
    <div className="abt">
      <div className="abt-left">
        <div className="abt-card">
          <img className="abt-img" src={about} alt={about} />
        </div>
      </div>
      <div className="abt-right">
        <h1 className="abt-title">ABOUT ME</h1>
        <p className="abt-sub">
          I'm a{" "}
          <span style={{ color: "blueviolet", fontSize: "45px" }}>
            Full Stack Developer/MERN Stack Developer
          </span>
        </p>
        <p className="abt-desc">
          An enthusiastic,hardworking,self-confidence,self-motivated and excited
          programmer, Who likes to involve in the projects all.I really interest
          to learn new technologies and implement them. I am focus on completing
          the work given to me on time.
        </p>
        <div className="resume">
          <Button
            target="_blank"
            href="https://drive.google.com/file/d/1h8_OTnPFfQOp9BtNpET9UCVTqKkR0xXK/view?usp=drive_link"
            rel="noreferrer"
            size="large"
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About
