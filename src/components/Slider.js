
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './Slider.css'

const Slider = () => {
  return (
    <>
      <h1 className='heading'>Projects</h1>
      <div className='ProCard'>
      <Link to="/projects/Way-of-learning">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title style={{fontSize:'30px',fontWeight:'700'}}>Way Of learning</Card.Title>
          </Card.Body>
        </Card>
        </Link>
        <Link to="/projects/Way-of-thinking">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title style={{fontSize:'30px',fontWeight:'700'}}>Way Of Thinking</Card.Title>
          </Card.Body>
        </Card>
        </Link>
        <Link to="/projects/intro-to-htb-academy">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title style={{fontSize:'30px',fontWeight:'700'}}>Penetration Testing Process</Card.Title>
          </Card.Body>
        </Card> 
        </Link>
      </div>
    </>
  )
}

export default Slider