import React from 'react'

function AllProjects() {
  return (
    <div>
      <section class="projects" id="projects">

      {/* Page Title */}
      <h2 class="projects-title">Recent Projects</h2>

      {/* Projects Container */}
      <div class="projects-container">

        {/* Project Card 1*/}
        <div class="project-container project-card">
          <img
            src="newshot.png"
            alt="Simple Calculator"
            loading="lazy"
            class="project-pic"
            width={300}
          />
          <h3 class="project-title">Simple Calculator</h3>
          <p class="project-details">
            This is Just a simple calculator created with HTML, CSS and Vanilla JavaScript
          </p>
          <a href="https://javlav98.github.io/" target="" class="project-link">Check it Out</a>
        </div>

        {/* Project Card 2*/}
        <div class="project-container project-card">
          <img
            src="virtkey.png"
            alt="Virtual Keyboard"
            loading="lazy"
            class="project-pic"
            width={300}
          />
          <h3 class="project-title">Virtual Keyboard</h3>
          <p class="project-details">
            This is just a virtual keyboard created with HTML, CSS and Vanilla JavaScript. 
            It has a dark mode and a light mode and is web responsive.
          </p>
          <a href="#" target="" class="project-link">Check it Out</a>
        </div>

        {/* Project Card 3*/}
        <div class="project-container project-card">
          <img
            src="Dripbox.png"
            alt="DropBox Clone"
            loading="lazy"
            class="project-pic"
            width={300}
          />
          <h3 class="project-title">DropBox Login Clone</h3>
          <p class="project-details">
            I just replicated the DropBox Login Page with HTML and CSS. It is web responsive.
          </p>
          <a href="#" target="" class="project-link">Check it Out</a>
        </div>
      </div>

      </section>
    </div>
  )
}

export default function ProjectsMaterial() {
  return (
    <div>
      <AllProjects />
    </div>
  )
}