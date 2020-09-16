import React, { Component } from "react";
import "./Contact.css";

export default class About extends Component {
  render() {
    return (
      <header className="contact">
        <div className="container header">
          <h1>Thank you for visiting</h1>
          <h2>Feel free to contact me here</h2>

          <div className="contact-icon-container overlay">
            <a href="https://www.linkedin.com/in/tanattha-thuenim">
              <img
                src="../img/logo1.png"
                target="_blank"
                className="contact-icon"
                alt="LinkedIn"
                title="LinkedIn"
              />
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <a href="https://github.com/Tanattha">
              <img
                src="../img/logo3.png"
                target="_blank"
                className="contact-icon"
                alt="Github"
                title="Github"
              />
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <a href="mailto:tanattha.thuenim@gmail.com">
              <img
                src="../img/logo2.png"
                target="_blank"
                className="contact-icon"
                alt="Gmail"
                title="Gmail"
              />
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <a href="https://www.tanattha.info">
              <img
                src="../img/profile.jpeg"
                target="_blank"
                className="contact-icon profile"
                alt="Personal Website"
                title="Personal Website"
              />
            </a>
          </div>
        </div>
      </header>
    );
  }
}