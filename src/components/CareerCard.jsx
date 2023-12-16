import React from 'react'

function CareerCard({career}) {
  return <>
  <div className='box'>
    <img className='img' src={`${career.image}`} alt="" />
  <div className='title'><h4>{career.title}</h4></div>
  <br />
  <div className='desc'>{career.description}</div>
  </div>
</>
}

export default CareerCard