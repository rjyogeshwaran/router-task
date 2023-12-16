import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Container({title, description, image}) {
  return <>
      <div className='box'>
        <img className='img' src={`${image}`} alt="" />
      <div className='title'><h4>{title}</h4></div>
      <br />
      <div className='desc'>{description}</div>
      </div>
    </>
}

export default Container