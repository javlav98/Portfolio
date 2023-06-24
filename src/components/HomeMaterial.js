import React from 'react'
import './HomeMaterial.css'


function Title () {
    return (
        <div style={{
          backgroundImage: `url("/bgg.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          color: 'white',
        }}>
            <h1>Hello, I'm Javier<br></br>Full Stack Developer</h1>
        </div>
    )
}


export default function HomeMaterial() {
  return (
    <div>
      <Title />
    </div>
  )
}