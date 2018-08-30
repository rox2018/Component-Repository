import React, { Component } from 'react';

class Resume extends Component {
    render () {
        return(
            <aside id="resume">
              <a href="#">
                  <i class="far fa-arrow-alt-circle-up"></i>
              </a>
              <h1>Resume</h1>
      
              <header>
                  <h2>Roxanne Rachel Awang</h2>
                  <address>
                 1865 NE 79th St.Causeway.....
                  </address>
              </header>
              <hr/>
      
              <ul>
                  <li>
                  <h3>Technical Skills</h3>
                  <ul>
                      <li>Languages: HTML, CSS, Javascript</li>
                      <li>libraries: REACT </li>
                      <li>Frameworks: etc</li>
                  </ul>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui sapiente repudiandae, sed accusantium perspiciatis, molestias.</p>
                  </li>
                  <li>
                  <h3>Experience</h3>
                  <ul>
                      <li>
                      <h4>The One Place - <small>2009-2018</small></h4>
                      <ul>
                          <li>I did this</li>
                          <li>I did that</li>
                      </ul>
                      </li>
                      <li>
                      <h4>The Other Place - <small>2006-2009</small></h4>
                      <ul>
                          <li>I did this</li>
                          <li>I did that</li>
                      </ul>
                      </li>
                  </ul>
                  </li>
              </ul>
      
          </aside>
          )
        }
      }

export default Resume;