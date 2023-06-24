import React from 'react'
import './AboutMaterial.css'

function AboutHeader() {
  return (
    <div className='titleContainer'>
      <h1>About me</h1>
    </div>
  )
}

function AboutImageBody() {
  return (
    <div className='pContainer'>
      <img src="6C95D768-EFB4-4E3C-80BF-01A1411C8442_1_105_c.jpeg" alt="placeholder" width='300' className='pic'/>
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
    <div className='skillsheaderConatiner'>
      <h1>Skills</h1>
    </div>
  )
}

function SkillsBody() {
  return (
    <div>
      <ul className='list'>
        <li className='list1'><img src='HTMLlogo.png' className='img1'></img>HTML</li>
        <li className='list2'><img src='CSSlogo.png' className='img1'></img>CSS</li>
        <li className='list3'><img src='JSlogo.png' className='img1'></img>JavaScript</li>
        <li className='list4'><img src='NODElogo.png' className='img1'></img>Node.js</li>
        <li className='list5'><img src='REACTlogo.png' className='img1'></img>React.js</li>
        <li className='list6'><img src='SQLlogo.png' className='img1'></img>MySQL</li>
        <li className='list7'><img src='GITlogo.png' className='img1'></img>Git</li>
      </ul>
    </div>
  )
}

export default function AboutMaterial () {
  return (
    <div>
      <AboutHeader />
      <AboutImageBody />
      <SkillsHeader />
      <SkillsBody />
    </div>
  )
}