import React, { Component } from 'react';

class Navbar extends Component {
    render () {
      return(
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact-me">Contact</a>
          </li>
        </ul>
      )
    }
  }
  
  

export default Navbar;