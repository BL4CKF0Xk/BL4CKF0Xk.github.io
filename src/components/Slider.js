
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './Slider.css'

const Slider = () => {
  return (
    <>
      <h1 className='heading'>Projects</h1>
      <div className='ProCard'>
        <Link to="/projects/intro-to-htb-academy">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title style={{fontSize:'30px',fontWeight:'700'}}>Intro To HTB Academy</Card.Title>
          </Card.Body>
        </Card>
        </Link>
        <Card.Link href="#">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title style={{fontSize:'30px',fontWeight:'700'}}>Penetration Testing Process</Card.Title>
          </Card.Body>
        </Card> 
        </Card.Link>
        <Card.Link href="#">
        <Card className="text-center CardCss">
          <Card.Body>
            <Card.Title style={{fontSize:'30px',fontWeight:'700'}}>Certification To Follow in Cybersecurity</Card.Title>
          </Card.Body>
        </Card>
        </Card.Link>
      </div>
    </>
  )
}

export default Slider