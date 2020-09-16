import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          2020 &copy; Created by :
          <a
            href="https://www.linkedin.com/in/tanattha-thuenim/"
            target="_blank"
            rel="noopener noreferrer"
            alt="LinkedIn"
          >
            Tanattha Thuenim &nbsp;
          </a>
          |
          <a
            href="https://github.com/Tanattha/sweetie-frontend"
            target="_blank"
            rel="noopener noreferrer"
            alt="Github"
          >
            &nbsp; Github
          </a>
        </p>
      </footer>
    );
  }
}