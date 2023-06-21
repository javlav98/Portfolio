import React from 'react'

function AboutHeader() {
  return (
    <div>
      <h1>About me</h1>
    </div>
  )
}

function AboutImage() {
  return (
    <div>
      <img src="6C95D768-EFB4-4E3C-80BF-01A1411C8442_1_105_c.jpeg" alt="placeholder" 
      width="300"
      />
    </div>
  )
}

function AboutBody() {
  return (
    <div>
      <p>
        Hello, I'm Javier Lavin, a Web Developer from the Southern California region based 
        in Riversdie, CA. I graduated from the University of California, Irvine with a degree 
        in History and an interest in Web Development. I'm currently attending W3school's coding 
        bootcamp to further my knowledge in the subject and make a breakthrough into the tech industry.
        I'm fairly new in the field but have about 2 years of web development under my belt. My experiences 
        include W3Schools Bootcamp open source projects, small business freelancing, and various exciting 
        projects that I've woked on through out my career. With a passion for creating exceptional digital 
        experiences and from designing responsive user interfaces to building robust back-end solutions, I 
        thrive in delivering high-quality web applications that meet client objectives.
      </p>
    </div>
  )
}

function SkillsHeader() {
  return (
    <div>
      <h1>Skills</h1>
    </div>
  )
}

function SkillsBody() {
  return (
    <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>MySQL</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Bootstrap</li>
        <li>APIs</li>
        <li>JSON</li>
        <li>Command Line</li>
      </ul>
    </div>
  )
}

export default function AboutMaterial () {
  return (
    <div>
      <AboutImage />
      <AboutHeader />
      <AboutBody />
      <SkillsHeader />
      <SkillsBody />
    </div>
  )
}