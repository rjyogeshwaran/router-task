import React from 'react'

function CyberSecurityCard({ cyberSecurity }) {
  return <>
  <div className='box'>
    <img className='img' src={`${cyberSecurity.image}`} alt="" />
  <div className='title'><h4>{cyberSecurity.title}</h4></div>
  <br />
  <div className='desc'>{cyberSecurity.description}</div>
  </div>
</>
}

export default CyberSecurityCard