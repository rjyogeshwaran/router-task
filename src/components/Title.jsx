import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Title() {
  let nav = useNavigate();
  return <>
      
    <div className='nav'>
      <div className='btns'>
       
      <Button className='btn' onClick={()=>nav(`/all`)}>ALL</Button>
      <Button className='btn' onClick={()=>nav(`/fullStack`)}>FULL STACK DEVELOPMENT</Button>
      <Button className='btn' onClick={()=>nav(`/dataScience`)}>DATA SCIENCE</Button>
      <Button className='btn' onClick={()=>nav(`/cyberSecurity`)}>CYBER SECURITY</Button>
        <Button className='btn' onClick={()=>nav(`/career`)}>CAREER</Button>
        </div>
    </div>
    </>
}

export default Title