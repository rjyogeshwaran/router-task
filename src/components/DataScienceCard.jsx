import React from 'react'

function DataScienceCard({dataScience}) {
  return <>
  <div className='box'>
    <img className='img' src={`${dataScience.image}`} alt="" />
  <div className='title'><h4>{dataScience.title}</h4></div>
  <br />
  <div className='desc'>{dataScience.description}</div>
  </div>
</>
}

export default DataScienceCard